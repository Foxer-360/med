import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import * as R from 'ramda';
import Loader from '@source/partials/Loader';

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

class List extends React.Component<Properties, {}> {

  render(): JSX.Element {

    const { data } = this.props;

    if (Array.isArray(data)) {
      return this.props.children({ data });
    }
    // In case that data isn't array and contain datasourceId try to fetch datasource with his items
    if (data && data.datasourceId) {
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
                res.orderBy = this.replaceWithSourceItemValues(data.orderBy, item);
              }

              Object.keys(res).forEach(key => {
                if (typeof res[key] === 'string') {
                  let replaced = this.replaceWithSourceItemValues(res[key], item);
                  res[key] = replaced;
                }
              });

              return res;
            });

          if (error) { return <span>Error...</span>; }

          if (loading) { return <Loader />; }

          return this.props.children({ 
            ...queryData, 
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

    return (<div>No data</div>);
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
            const replacement = getValueFromDatasourceItems(item.content);
            if (replacement) {
              
              replaced = replaced.replace(result[0], replacement);
            }
          }    
        } catch (e) {
          console.log(e);
        }
      }
    }
    
    return replaced;
  }
}

export default List;