import Ajv from 'ajv';
import gql from 'graphql-tag';
import http from 'apollo-link-http';
import ca from 'apollo-cache-inmemory';
import doctors from './doctors';
import fetch from 'node-fetch';
import urli from  'urlize';
import axios from 'axios';
import apollo from 'apollo-client';
import * as context from 'apollo-link-context';
import redis from 'redis';

const redisClient = redis.createClient();
const { ApolloClient } = apollo;
const { HttpLink } = http;
const { InMemoryCache } = ca;
const { urlize } = urli;

const cache = new InMemoryCache();

// console.log(ApolloClient);
const date = new Date();
console.log(date);
const httpLink = new HttpLink({ uri: 'http://mediconas.cz/graphql', fetch: fetch });

function update(token) {
  const GET_OUTDATED = gql`
    query datasourceItems($date: DateTime) {
      datasourceItems(where:{updatedAt_lt: $date}) {
        id
        slug
        createdAt
        updatedAt
      }
    }
  `;

  const authLink = context.default.setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache
  });

  const ajv = new Ajv();

  const DATASOURCE_ID = "cjrkew3eu02gp0d71xoi0i5em";

  const DATASOURCE = gql`
    query datasource($id: ID!) {
      datasource(where: { id: $id }) {
        id
        type
        schema
        slug
        datasourceItems {
          id
          slug
          content
        }
      }
    }
  `;

  const CREATE_DATASOURCE_ITEM = gql`
    mutation createDatasourceItem($id: ID!, $content: Json!, $slug: String!) {
      createDatasourceItem(
        data: {
          content: $content,
          slug: $slug,
          datasource: {
            connect: {
              id: $id
            }
          },
        }
      ) {
        id
        slug
        content
      }
    }
  `;

  const UPDATE_DATASOURCE_ITEM = gql`
    mutation updateDatasourceItem($id: ID!, $content: Json!, $slug: String!) {
      updateDatasourceItem(
        data: {
          content: $content,
          slug: $slug
        },
        where: {
          id: $id
        }
      ) {
        id
        slug
        content
      }
    }
  `;

  const DELETE_DATASOURCE_ITEM = gql`
    mutation deleteDatasourceItem($id: ID!) {
      deleteDatasourceItem(where: { id: $id }) {
        id
      }
    }
  `;

  const GET_ANNOTATION = gql`
    query expertiseUrl($key: String) {
      pageAnnotations(where: { key: $key}) {
        id
        key
        value
        pageTranslation {
          url
        }
      }
    }
  `;

  // tslint:disable-next-line:typedef
  const createNewItem =  function (datasource, data) {
    const slug = urlize(datasource.slug
      .map(p =>
        p.split('.').reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, data) || ''
      )
      .join('-').toLowerCase());

    return client.mutate({
      mutation: CREATE_DATASOURCE_ITEM,
      variables: {
        content: data,
        slug: slug,
        id: datasource.id,
      },
      // tslint:disable-next-line:no-shadowed-variable
      update: (cache, { data: { createDatasourceItem } }) => {
        datasource = {
          ...datasource,
          datasourceItems: [
            ...datasource.datasourceItems,
            createDatasourceItem
          ]
        };
      }
    });
  };

  // tslint:disable-next-line:typedef
  const updateItem = function (datasource, id, data) {
    const slug = urlize(datasource.slug
      .map(p =>
        p.split('.').reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, data) || ''
      )
      .join('-').toLowerCase());

    return client.mutate({
      mutation: UPDATE_DATASOURCE_ITEM,
      variables: {
        content: data,
        slug,
        id,
      },
      // tslint:disable-next-line:no-shadowed-variable
      update: (cache, { data: { updateDatasourceItem } }) => {
        datasource = {
          ...datasource,
          datasourceItems: [
            ...datasource.datasourceItems.map((datasourceItem) => {
              if (datasourceItem.id === updateDatasourceItem.id) { return updateDatasourceItem; }
              return datasourceItem;
            }),
          ]
        };
      }
    });
  };

  // tslint:disable-next-line:typedef
  const deleteItem = function (id) {
    return client.mutate({
      mutation: DELETE_DATASOURCE_ITEM,
      variables: {
        id,
      }
    });
  };

    // tslint:disable-next-line:align
    const removeEmpty = (obj) => {
      Object.keys(obj).forEach(key => {
        if (obj[key] && typeof obj[key] === 'object') {
          removeEmpty(obj[key]);
        } else if (obj[key] == null) {
          delete obj[key];
        }
      });
    };
    // tslint:disable-next-line:align
    (async () => {

      const { data: { datasource }} = await client.query({
        query: DATASOURCE,
        variables: {
          id: DATASOURCE_ID
        }
      });

      const expertisesUrls = await client.query({
              query: GET_ANNOTATION,
            variables: {
              key: 'expertiseCode'
            }});
    
      const polyclinicsUrls = await client.query({
        query: GET_ANNOTATION,
      variables: {
        key: 'polyclinicCode'
      }});

      try {
        return doctors.reduce((result, doctor) => {
          return result.then(
            (r) => {
              // const validate = ajv.compile(datasource.schema);
              const { nurses } = doctor;
              delete doctor.nurses;
              doctor.expertises = [doctor.expertises.reduce(
                (acc, v) =>  {
                  if (!acc) {
                    return v;
                  }

                  return ({
                    id: [acc.id, v.id].join(', '),
                    code: [acc.code, v.code].join(', '),
                    name: [acc.name, v.name].join(', ')
                  });
                },
                null)];

              const transformedDoctor = { doctorPersonalInformation: {
                ...doctor,
                phoneForOrders: doctor.phoneForOrders || doctor.phone,
                order: `${doctor.profession.id === 16 ? 'A' : 'N'} ${doctor.lastName} ${doctor.firstName}`,
              }, nurses };

              // const valid = validate(transformedDoctor);

              transformedDoctor.doctorPersonalInformation.workingHours && Array.isArray(transformedDoctor.doctorPersonalInformation.workingHours.weeks.forEach((w => {
                if(!(transformedDoctor.doctorPersonalInformation.polyclinic && transformedDoctor.doctorPersonalInformation.polyclinic.name.includes(w.polyclinic.name))) {
                  console.log(transformedDoctor.doctorPersonalInformation.firstName, transformedDoctor.doctorPersonalInformation.lastName, w.polyclinic.name);
                  if(!transformedDoctor.doctorPersonalInformation.polyclinic) {
                    transformedDoctor.doctorPersonalInformation.polyclinic = w.polyclinic;
                  }
  
                  transformedDoctor.doctorPersonalInformation.polyclinic.id = `${transformedDoctor.doctorPersonalInformation.polyclinic.id},${w.polyclinic.id}`
                  transformedDoctor.doctorPersonalInformation.polyclinic.name = `${transformedDoctor.doctorPersonalInformation.polyclinic.name}, ${w.polyclinic.name}`
                  transformedDoctor.doctorPersonalInformation.polyclinic.shortName = `${transformedDoctor.doctorPersonalInformation.polyclinic.shortName},${w.polyclinic.shortName}`
                  
                  if (transformedDoctor.doctorPersonalInformation.polyclinic.phonePrefix) {
                    transformedDoctor.doctorPersonalInformation.polyclinic.phonePrefix = `${transformedDoctor.doctorPersonalInformation.polyclinic.phonePrefix}, ${w.polyclinic.phonePrefix}`
                  }
  
                  console.log(transformedDoctor.doctorPersonalInformation.polyclinic);
                }
              })));

              transformedDoctor.doctorPersonalInformation.expertises.forEach(expertise => {
                if (expertise && expertise.code) {
                  expertise.url = expertisesUrls.data.pageAnnotations.find(i => i.value === expertise.code)
                  && expertisesUrls.data.pageAnnotations.find(i => i.value === expertise.code).pageTranslation.url
                }
              })

              if (transformedDoctor.doctorPersonalInformation.polyclinic && transformedDoctor.doctorPersonalInformation.polyclinic.shortName) {
                let polyclinics = []
                transformedDoctor.doctorPersonalInformation.polyclinic.shortName.split(',').forEach(polyclinicShort => {
                    polyclinicsUrls.data.pageAnnotations.find(i => i.value === polyclinicShort)
                    && polyclinics.push(polyclinicsUrls.data.pageAnnotations.find(i => i.value === polyclinicShort).pageTranslation.url)
                })
                transformedDoctor.doctorPersonalInformation.polyclinic.url = polyclinics.join(',')
              }

              if (transformedDoctor.doctorPersonalInformation.workingHours && transformedDoctor.doctorPersonalInformation.workingHours.weeks) {
                transformedDoctor.doctorPersonalInformation.workingHours.weeks.map(week => {
                  if (polyclinicsUrls.data.pageAnnotations.find(i => i.value === week.polyclinic.shortName)) {
                    week.polyclinic.url = polyclinicsUrls.data.pageAnnotations.find(i => i.value === week.polyclinic.shortName).pageTranslation.url
                  }
                })
              }

              const existingDoctorItem = datasource.datasourceItems
                .find(item => item.content.doctorPersonalInformation.id === doctor.id);

              // if (!valid) {
              //   console.log(doctor.firstName, doctor.lastName, doctor.mobilePhone, JSON.stringify(validate.errors));
              //   if (existingDoctorItem) {
              //     console.log('Dropping from database - not valid item');
              //     return deleteItem(datasource, existingDoctorItem.id);
              //   }

              //   return Promise.resolve();
              // }

              // tslint:disable-next-line:max-line-length
              console.log(`Updating ${transformedDoctor.doctorPersonalInformation.order}`);
              if (!existingDoctorItem) {
                return createNewItem(datasource, transformedDoctor)
                  .then(() => setTimeout(() => Promise.resolve(), 2000));
              }
              return updateItem(datasource, existingDoctorItem.id, transformedDoctor)
                .then(() => setTimeout(() => Promise.resolve(), 2000));

            }).catch((err) => { console.log(err); process.exit(); });
          // tslint:disable-next-line:align
          }, Promise.resolve())
          .then(() => {
            return client.query({
              query: GET_OUTDATED,
              variables: {
                date,
              }
            });
          })
          .then((outdated) => {
            if (outdated && outdated.data && outdated.data.datasourceItems) {

              return outdated.data.datasourceItems.reduce((result, item) => {
                return result.then(
                  (r) => {
                    console.log(`Deleting ${item.slug}`);
                    return deleteItem(item.id)
                      .then(() => setTimeout(() => Promise.resolve(), 2000));
                  }).catch((err) => { console.log(err); });
                // tslint:disable-next-line:align
                }, Promise.resolve());
            }
          })
          .catch((err) => console.error(err.result.errors))
          .then(() => redisClient.sendCommand('flushall', () => {
		console.log('cache cleared')
		process.exit(1);
	   }));

      } catch (e) {
        console.log('insertion error', e);
	      process.exit(0);
      }
    })();
  }

axios.post('https://foxer360.eu.auth0.com/oauth/token', {
  grant_type: 'password',
  username: 'pavel.krcil@foxmedia.cz',
  password: 'wjlmnb_7',
  audience: 'foxer360-server',
  client_id: 'AD26pS1rTn6dHc6DOmUhxQ904O3lG7bs',
  client_secret: '13U_ewzP3YV61bk31cFIN9W2NUleoi62BeffYMdb7mzVg3-5jV_nlhDm-_icjzDP',
}).then(({ data }) => {
  update(data.access_token);
});
