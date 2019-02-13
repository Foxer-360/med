import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import * as R from 'ramda';
import Loader from '@source/partials/Loader';
import { adopt } from 'react-adopt';

interface Properties {
  // tslint:disable-next-line:no-any
  data: any;
  children: (data: LooseObject) => JSX.Element;
}

const DATASOURCE = gql`
  query datasource($id: ID!) {
    datasource(where: { id: $id }) {
      id
      type
      schema
      datasourceItems {
        id
        slug
        content
        createdAt
        updatedAt
      }
    }
  }
`;

const GET_CONTEXT = gql`
  {
    pageData @client
    languageData @client
  }
`;

const GET_ALL_PAGES = gql`
  query localizedPages($languageId: ID!) {
    pages {
      id
      type {
        id
        name
      }
      tags {
        id
        name
      }
      translations(where: { language: { id: $languageId } }) {
        id
        name
        createdAt
        content
        language {
          id
          code
        }
      }
    }
  }
`;

const AllPagesComposedQuery = adopt({
  getContext: ({ render }) => <Query query={GET_CONTEXT}>{({ data }) => render(data)}</Query>,
  allPages: ({ render, getContext: { languageData } }) => {
    console.log('Blogholder language data:', languageData.id);
    if (!languageData) {
      return render({ loading: true });
    }

    return (
      <>
        <Query query={GET_ALL_PAGES} variables={{ languageId: languageData.id }}>
          {data => {
            return render(data);
          }}
        </Query>
      </>
    );
  },
});
class List extends React.Component<Properties, {}> {

  render(): JSX.Element {

    const { data } = this.props;
    console.log(data);
    if (Array.isArray(data)) {
      return this.props.children({ data });
    }
    // In case that data isn't array and contain datasourceId try to fetch datasource with his items
    if (data && data.datasourceId) {
      return this.datasourcesList(data);
    }

    if (data && data.sourceType === 'pages') {

      return (
        <>
          <AllPagesComposedQuery>
            {({
              allPages: { data: allPagesData, loading: allPagesLoading, error: allPagesError },
              getContext: { languageData, pageData },
            }) => {
              if (allPagesLoading || !allPagesData || !languageData) {
                return <Loader />;
              }
  
              if (allPagesError) {
                return `Error...`;
              }
  
              const { pages } = allPagesData;
  
              const pagesWithTag = pages
                .filter(p => {
  
                  if (!(p.translations && p.translations.length > 0)) {
                    return false;
                  }
  
                  if (data.tagIds && !p.tags.some(t => data.tagIds.some(tagId => t.id === tagId))) {
                    return false;
                  }
  
                  if (pageData && p.id === pageData.id) {
                    return false;
                  }
  
                  return true;
                })
                .map(p => {

                  const res = { ...data.data };

                  const item = {
                    page: {
                      name: (p && p.translations && p.translations[0] && p.translations[0].name) || '' 
                    }
                  };
                  console.log(item);
                  if (data.orderBy) {
                    res.orderBy = this.replaceWithSourceItemValues(data.orderBy, item);
                  }
      
                  if (data.filters) {
                    res.filters = data.filters.map(filter => {
                      let parsedFilter = { ...filter };
                      parsedFilter.filterBy = this.replaceWithSourceItemValues(filter.filterBy, item);
      
                      return parsedFilter;
                    });
                  }

                  Object.keys(res).forEach(key => {
                    if (typeof res[key] === 'string') {
                      let replaced = this.replaceWithSourceItemValues(res[key], item);
                      res[key] = replaced;
                    } else if (res[key].pageSourcedUrl) {
                      res[key] = { pageId: p.id };
                    } 
                  });
                  return res;
                })
                .filter(item => {
                  return  !item.filters || 
                    !item.filters
                      .some(filter => 
                        !filter.filterBy.toLowerCase()
                          .includes(filter && filter.includes && filter.includes.toLowerCase())
                      );
                })
                .filter((item, i) => !data.limit || i < data.limit);

              return this.props.children({
                data: data.orderBy ? 
                  pagesWithTag
                    .sort((a, b) => {
                      if (data.order === 'DESC') {
                        if (a.orderBy > b.orderBy) { return -1; }
                        { if (a.orderBy < b.orderBy) { return 1; } }
                        return 0;
                      }
      
                      if (a.orderBy < b.orderBy) { return -1; }
                      { if (a.orderBy > b.orderBy) { return 1; } }
                      return 0;
                    })
                    .map(item => {
                      delete item.orderBy;
                      return item;
                    })  
                  :
                  pagesWithTag
                });
            }}
          </AllPagesComposedQuery>
        </>
      );
    }

    return this.props.children({ data: [] });
  }

  replaceWithSourceItemValues(source: string, item: LooseObject) {
    const regex = /%([^%]*)%/g;
    let result;
    let replaced = String(source);
    while ((result = regex.exec(source))) {
      if (result[1]) {
        try {
          const searchKeys = result[1].split(',');
          if (Array.isArray(searchKeys) && searchKeys.length > 0) {
            const getValueFromDatasourceItems = R.path(searchKeys);
            const replacement = getValueFromDatasourceItems(item);
            if (replacement) {
              replaced = replaced.replace(result[0], replacement);
            } else {
              replaced = replaced.replace(result[0], '');
            }
          }    
        } catch (e) {
          console.log(e);
        }
      }
    }
    
    return replaced;
  }

  datasourcesList = (data) => {
    return (
      <Query 
        query={DATASOURCE}
        variables={{
          id: data.datasourceId
        }}
      >{(queryData) => {

        const { data: dataShape, error, loading } = data;
        
        // Map datasourceItem data to placeholders
        const datasourceItems = ((queryData.data.datasource && queryData.data.datasource.datasourceItems) || [])
          .map((item) => {

            // Iterate through dataShape 
            // in case that value inside some of keys is string
            // try to find key inside item and replace value with it

            const res = { ...dataShape };

            if (data.orderBy) {
              res.orderBy = this.replaceWithSourceItemValues(data.orderBy, item.content);
            }

            if (data.filters) {
              res.filters = data.filters.map(filter => {
                let parsedFilter = { ...filter };
                parsedFilter.filterBy = this.replaceWithSourceItemValues(filter.filterBy, item.content);

                return parsedFilter;
              });
            }

            // Iterate through keys and in case that value inside key is string value 
            // apply replace function which replace dynamic placeholders with dynamic source item values.
            // In case that value of key is url and contains dynamic slug with same entity that we sourcing,
            // replace it with dynamic source item slug.

            Object.keys(res).forEach(key => {
              if (typeof res[key] === 'string') {
                let replaced = this.replaceWithSourceItemValues(res[key], item.content);
                res[key] = replaced;
              } else if (res[key].url) {
                const regex = /ds\:(\w+)/g;

                let result;
                let newUrl = String(res[key].url);

                while (result = regex.exec(res[key].url)) {
                  if (result[1] && result[1] === queryData.data.datasource.type.toLowerCase()) {
                    newUrl = newUrl.replace(result[0], item.slug);
                  }
                }
                if  (newUrl !== res[key].url) {
                  res[key] = { url: newUrl, dynamic: true };
                }
              }
            });

            return res;
          })
            .filter(item => {
              return  !item.filters || 
                !item.filters
                  .some(filter => 
                    !filter.filterBy.toLowerCase()
                      .includes(filter && filter.includes && filter.includes.toLowerCase())
                  );
            })
            .filter((item, i) => !data.limit || i < data.limit);

        if (error) { return <span>Error...</span>; }

        if (loading) { return <Loader />; }

        return this.props.children({
          data: data.orderBy ? 
            datasourceItems
              .sort((a, b) => {
                if (data.order === 'DESC') {
                  if (a.orderBy > b.orderBy) { return -1; }
                  { if (a.orderBy < b.orderBy) { return 1; } }
                  return 0;
                }

                if (a.orderBy < b.orderBy) { return -1; }
                { if (a.orderBy > b.orderBy) { return 1; } }
                return 0;
              })
              .map(item => {
                delete item.orderBy;
                return item;
              }) 
            :
            datasourceItems 
          });
      }}
      </Query>);
  }
}

export default List;