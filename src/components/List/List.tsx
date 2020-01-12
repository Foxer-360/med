import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { Query, ApolloConsumer } from 'react-apollo';
import { adopt } from 'react-adopt';
import gql from 'graphql-tag';
import * as R from 'ramda';
import * as removeAccents from 'remove-accents';

import Loader from '../../partials/Loader';
import readEnvVariable from '../../helpers/readEnvVariable';

const REACT_APP_ORIGIN = readEnvVariable('REACT_APP_ORIGIN');

const escape = function (str: string) {
  // TODO: escape %x75 4HEXDIG ?? chars
  return str
    .replace(/[\b]/g, '\\b')
    .replace(/[\f]/g, '\\f')
    .replace(/[\n]/g, '\\n')
    .replace(/[\r]/g, '\\r')
    .replace(/[\t]/g, '\\t'); 
};

export interface Properties extends RouteComponentProps<LooseObject> {
  // tslint:disable-next-line:no-any
  data?: any;
  children: (data: QueryResult) => React.ReactNode;
  // exclude by object { key, value } - key is property of Datasourceitem, value is value that should be excluded
  exclude?: LooseObject;
  searchedText?: string;
  searchKeys?: Array<string>;
}

const FRONTEND = gql`
  query frontend($url: String!, $origin: String) {
    frontend: frontend( where: { url: $url, origin: $origin } ) {
      website @connection(key: "websiteData") {
        id
        title
      }
      language @connection(key: "languageData") {
        id
        code
        name
      }
      page @connection(key: "pageData") {
        id
        name
        content
      }
      navigations @connection(key: "navigationsData") {
        id
        name
        nodes {
          id
          page
          title
          link
          order
          parent
          __typename
        }
        __typename
      },
      languages @connection(key: "languages") {
        id
        code
        name
      },
      datasourceItems @connection(key: "datasourceItems") {
        id
        content
        slug
        datasource {
          type
        }
      },
      seo,
      project {
        id
        components
      }
    }
  }
`;

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

export interface GetPage {
  (
    numberOfPage: number,
    paginationType: 'pagination' | 'infinite',
    pageSize: number
  ): { items: Array<LooseObject>, lastPage: number, allItems: Array<LooseObject> } ;
}

export interface GetPaginatingFunction {
  (
    items: Array<LooseObject>
  ): GetPage;
}

export interface QueryResult {
  getPage: GetPage;
  allData: Array<LooseObject>;
  data: Array<LooseObject>;
}

const GET_CONTEXT = gql`
  {
    pageData @client
    languageData @client
    websiteData @client
  }
`;

const GET_ALL_PAGES = gql`
  query localizedPages($languageId: ID! $websiteId: ID!) {
    pages(where: { website: { id: $websiteId } }) {
      id
      createdAt
      type {
        id
        name
      }
      tags {
        id
        name
      }
      plugin {
        plugin
        content
      }
      translations(where: { 
        language: { id: $languageId }
      }) {
        id
        name
        createdAt
        content
        annotations {
          key
          value
        }
        language {
          id
          code
        }
      }
    }
  }
`;

const AllPagesComposedQuery = adopt({
  getContext: ({ render }) => <Query ssr={false} query={GET_CONTEXT}>{({ data }) => render(data)}</Query>,
  getFrontend: ({ render, windowOrigin, locationPath }) => (
    <ApolloConsumer>
      {(client: LooseObject) => {
        const { cache: { data } } = client;
        let origin = windowOrigin;
        let url = locationPath;

        if (data && data.data['$ROOT_QUERY.origin']
          && data.data['$ROOT_QUERY.origin'].url
          && data.data['$ROOT_QUERY.origin'].origin ) {
            origin = data.data['$ROOT_QUERY.origin'].origin;
            url = data.data['$ROOT_QUERY.origin'].url;
          }

        if (!windowOrigin || !locationPath) {
          return render({ frontend: null });
        }

        return (
          <Query
            query={FRONTEND} 
            variables={{ origin, url }}
          >
            {({ data: frontend }) => render(frontend)}
          </Query>
        );
      }}
     </ApolloConsumer>
  ),
  allPages: ({ 
    render,
    getFrontend: {
      frontend
    },
    getContext: { 
      languageData,
      websiteData,
    },
  }) => {
    const languageId = (languageData && languageData.id) || 
      (frontend && frontend.language && frontend.language.id);

    const websiteId = (websiteData && websiteData.id) ||
      (frontend && frontend.website && frontend.website.id);

    if (!languageId || !websiteId) {
      return render({ loading: true });
    }

    return (
      <Query 
        ssr={false}
        query={GET_ALL_PAGES}
        variables={{ 
          languageId,
          websiteId,
        }}
      >
        {data => {
          const { fetchMore } = data;
          return render(data);
        }}
      </Query>
    );
  },
});
class List extends React.Component<Properties, {}> {
  getPaginatingFunction: GetPaginatingFunction = (items) => {
    
    const getPage: GetPage = function (
      numberOfPage: number, 
      paginationType: 'pagination' | 'infinite' = 'pagination',
      pageSize: number = 10) {

        let numberOfItems = items.length;
        let lastPage = Math.ceil(items.length / pageSize);

        const cutTo = 
          (numberOfPage) * pageSize < numberOfItems ? 
            (numberOfPage) * pageSize : numberOfItems;
        const cutFrom = 
          (numberOfPage) * pageSize < numberOfItems ? 
            cutTo - pageSize : (((numberOfPage - 1) && ((numberOfPage - 1) * pageSize)) || 0);

        return { items: items.slice(
          paginationType === 'pagination' ? cutFrom : 0, 
          cutTo),
          lastPage,
          allItems: items
        };
      };
    return getPage;
    
  }

  render() {
    let origin = null;
    if (window) {
      origin = window.origin;
    }
    
    const { data, location } = this.props;
    let { searchedText, searchKeys } = this.props;

    const fulltextFilter = data && data.fulltextFilter;

    const regex = /^\[([a-z]*)\]$/;
    
    var searchParams = typeof window !== 'undefined' && new URLSearchParams(location && location.search || '');

    if (fulltextFilter) {
      const res = regex.exec(fulltextFilter.trim());

      if (res && res[1]) {
        const textFromSearchParams = searchParams && searchParams.get(res[1]);

        if (!textFromSearchParams) {
          return this.props.children({ data: [], allData: [], getPage: this.getPaginatingFunction([]) });
        }
        searchedText = `${searchedText ? searchedText : ''} ${textFromSearchParams ? textFromSearchParams  : '' }`;
      } else {
        searchedText = `${searchedText ? searchedText : ''} ${fulltextFilter}`;
      }
    }  

    const searchedFragments = searchedText && searchedText.trim().split(' ').map(fragment => fragment.trim());
    if (Array.isArray(data)) {
      return this.props.children({ data, allData: [], getPage: this.getPaginatingFunction(data) });
    }

    // In case that data isn't array and contain datasourceId try to fetch datasource with his items
    if (data && data.datasourceId) {
      return this.datasourcesList(data, searchedFragments, this.props.searchKeys);
    }

    if (data && data.sourceType === 'pages') {
      return (
          <AllPagesComposedQuery origin={REACT_APP_ORIGIN || origin} url={location.pathname}>
            {({
              allPages: { data: allPagesData, loading: allPagesLoading, error: allPagesError },
              getFrontend: { frontend },
              getContext: { pageData }
            }) => {
              const pageId = (pageData && pageData.id) ||
                (frontend && frontend.page && frontend.page.id);
              
              if (allPagesLoading || !allPagesData) {
                return <Loader />;
              }
  
              if (allPagesError) {
                return `Error...`;
              }
  
              let { pages } = allPagesData;
              
              const pagesWithTag = pages
                .filter(p => {
                  if (!(p.translations && p.translations.length > 0)) {
                    return false;
                  }
  
                  if (data.tagIds && p.tags.some(t => t.name === 'unpublished')) {
                    return false;
                  }

                  if (data.tagIds && !p.tags.some(t => data.tagIds.some(tagId => t.id === tagId))) {
                    return false;
                  }
  
                  if (pageId && p.id === pageId) {
                    return false;
                  }
  
                  return true;
                })
                .map(p => {
                  console.log('p', p)
                  const annotations = {};
                  const translation = (p && p.translations && p.translations[0]);
                  translation.annotations.forEach(({ key, value }) => {
                    annotations[key] = value;
                  });

                  const res = { ...data.data };
                  
                  const item = {
                    page: {
                      name: (translation && translation.name) || '', 
                      annotations,
                    }
                  };

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

                  if (p && p.createdAt) {
                    res.createdAt = p.createdAt;
                  }

                  Object.keys(res).forEach(key => {
                    if (typeof res[key] === 'string') {
                      let replaced = this.replaceWithSourceItemValues(res[key], item);
                      res[key] = replaced;
                    } else if (res[key].pageSourcedUrl) {
                        const queryParams = typeof window !== 'undefined'
                          && /^([\w-]+(=[\w-]*)(&[\w-]+(=[\w-]*)?)*)$/.test(res[key].url)
                          && new URLSearchParams(res[key] && res[key].url || '').toString() || undefined;

                        res[key] = { pageId: p.id, query: queryParams };
                    } else if (res[key].dynamiclySourcedImage) {
                      let image;
                      try {
                        image = JSON.parse(
                          this.replaceWithSourceItemValues(res[key].dynamiclySourcedImage, item, true) || '{}');
                      } catch (e) {
                        console.log(e);
                      }
                      res[key] = image || {};
                    }
                  });
                  return { ...res, pi: item };
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
              
              let pagesWithFilter = pagesWithTag;
              if (searchedFragments && searchedFragments.length > 0) {
                pagesWithFilter = searchedFragments.reduce(
                (filteredPages, fragment) => {
                  return filteredPages
                    .filter(page => {
                      if (!searchKeys) {
                        return JSON.stringify(page).toLowerCase().includes(fragment.toLowerCase());
                      }

                      const flattenPage = this.flatten(
                        {
                          ...page,
                          // adding annotations as data to page object
                          annotations: (
                            page.translations && page.translations[0] && 
                            page.translations[0].annotations && Array.isArray(page.translations[0].annotations)
                              && page.translations[0].annotations.reduce(
                              (acc, a) => {
                                acc[a.key] = a.value;
                                return acc;
                              }, 
                              {})) || {},
                        },
                        '',
                        '');

                      return searchKeys.reduce(
                        (acc, key) => {
                          // Remove letter accents
                          const Key = removeAccents(`${flattenPage[key]}`.toLowerCase());
                          const Fragment = removeAccents(`${fragment}`.toLowerCase());
                          
                          return acc || Key.includes(Fragment);
                        }, 
                        false
                      );
                    }); 
                },                                       
                pagesWithTag);
              }
              pages = data.orderBy ? 
                pagesWithFilter
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
                pagesWithFilter
                .sort((a, b) => {
                  if (data.order === 'DESC') {
                    if (a.createdAt > b.createdAt) { return -1; }
                    { if (a.createdAt < b.createdAt) { return 1; } }
                    return 0;
                  }
  
                  if (a.createdAt < b.createdAt) { return -1; }
                  { if (a.createdAt > b.createdAt) { return 1; } }
                  return 0;
                })
                .map(item => {
                  delete item.createdAt;
                  return item;
                });

              return this.props.children({
                  data: pagesWithFilter,
                  allData: pagesWithTag,
                  getPage: this.getPaginatingFunction(pages)
              });
            }}
          </AllPagesComposedQuery>
      ); 
    }

    return this.props.children({ data: [], allData: [], getPage: this.getPaginatingFunction([]) });
  }

  replaceWithSourceItemValues(source: string, item: LooseObject, isImage?: boolean) {
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
            if (replacement && typeof replacement === 'string') {
              replaced = replaced.replace(result[0], isImage ? replacement : escape(replacement));
            } else if (replacement && typeof replacement === 'object') {
              replaced = replaced.replace(result[0], JSON.stringify(replacement));
            } else if (replacement && typeof replacement === 'number') {
              replaced = replaced.replace(result[0], replacement.toString());
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

  datasourcesList = (data, searchedFragments, searchKeys?) => {
    return (
      <Query 
        query={DATASOURCE}
        ssr={false}
        variables={{
          id: data.datasourceId
        }}
      >{(queryData) => {

        const { data: dataShape, error, loading } = data;

        let datasourceItems = ((queryData.data.datasource && queryData.data.datasource.datasourceItems) || []);
        // Map datasourceItem data to placeholders
        datasourceItems = datasourceItems
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

            return { ...res, di: item.content };
          })
            .filter(item => {
              if (this.props.exclude && item[this.props.exclude.key]
                && item[this.props.exclude.key] === this.props.exclude.value) {
                  return false;
                }

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

        const allData = data.orderBy ? 
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
        datasourceItems;

        let items = allData;
        if (searchedFragments && searchedFragments.length > 0) {
          items = searchedFragments.reduce(
          (filteredItems, fragment) => {
            return filteredItems.filter(item => {
              if (!searchKeys) {
                return JSON.stringify(item).toLowerCase().includes(fragment.toLowerCase());
              }

              const flattenItem = this.flatten(item, '', '');
              return searchKeys.reduce(
                (acc, key) => {
                  // Remove letter accents
                  const Key = removeAccents(`${flattenItem[key]}`.toLowerCase());
                  const Fragment = removeAccents(`${fragment}`.toLowerCase());
                  return acc || Key.includes(Fragment);
                }, 
                false
              );
            }); 
          },                                       
          allData);
        }

        return this.props.children({
          data: items,
          allData,
          getPage: this.getPaginatingFunction(items)
        });
      }}
      </Query>);
  }

  /**
   * Recursively flattens a JSON object using dot notation.
   *
   * NOTE: input must be an object as described by JSON spec. Arbitrary
   * JS objects (e.g. {a: () => 42}) may result in unexpected output.
   * MOREOVER, it removes keys with empty objects/arrays as value (see
   * examples bellow).
   *
   * @example
   * // returns {a:1, 'b.0.c': 2, 'b.0.d.e': 3, 'b.1': 4}
   * flatten({a: 1, b: [{c: 2, d: {e: 3}}, 4]})
   * // returns {a:1, 'b.0.c': 2, 'b.0.d.e.0': true, 'b.0.d.e.1': false, 'b.0.d.e.2.f': 1}
   * flatten({a: 1, b: [{c: 2, d: {e: [true, false, {f: 1}]}}]})
   * // return {a: 1}
   * flatten({a: 1, b: [], c: {}})
   *
   * @param obj item to be flattened
   * @param {Array.string} [prefix=[]] chain of prefix joined with a dot and prepended to key
   * @param {Object} [current={}] result of flatten during the recursion
   *
   * @see https://docs.mongodb.com/manual/core/document/#dot-notation
   */
  flatten (obj: Object, prefix: any, current: any) {
    prefix = prefix || [];
    current = current || {};

    // Remember kids, null is also an object!
    if (typeof (obj) === 'object' && obj !== null) {
      Object.keys(obj).forEach(key => {
        this.flatten(obj[key], prefix.concat(key), current);
      });
    } else {
      current[prefix.join('.')] = obj;
    }

    return current;
  }
}

export default withRouter(List);