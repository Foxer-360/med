import * as React from 'react';
import gql from 'graphql-tag';
import { adopt } from 'react-adopt';
import { Query } from 'react-apollo';
import { Link, NavLink } from 'react-router-dom';

import Loader from '../Loader';

const isExternalLink = url => {
  const pattern = /^https?|^www|^mailto:|^tel:|^sms:|^call:/gi;
  return pattern.test(url);
};

const GET_CONTEXT = gql`
  {
    languageData @client
    websiteData @client
  }
`;

const ComposedQuery = adopt({
  context: ({ render }) => <Query query={GET_CONTEXT}>{({ data }) => render(data)}</Query>,
  getPagesUrls: ({ render, context: { languageData, websiteData } }) => {
    if (!(languageData && websiteData)) {
      return render({ loading: true });
    }
    return (
      <Query query={GET_PAGES_URLS} variables={{ language: languageData.id, websiteId: websiteData.id }}>
        {data => {
          return render(data);
        }}
      </Query>
    );
  },
});

const GET_PAGES_URLS = gql`
  query pagesUrls($language: ID!, $websiteId: ID!) {
    pagesUrls(where: { language: $language, websiteId: $websiteId }) {
      id
      page
      url
      name
      description
    }
  }
`;

const ComposerLink = props => {
  const { children, urlNewWindow, url, query, pageId, dynamic, ...args } = props;

  
  if (isExternalLink(url) || args.forceHtml || urlNewWindow) {
    return (
      <a
        {...args}
        style={props.style}
        target={urlNewWindow ? '_blank' : ''}
        href={(isExternalLink(url) && url) || '#'}
      >
        {children}
      </a>
    );
  } else {
    return (
      <NavLink 
        activeClassName={'navItemActive'} 
        to={`${url}${query ? `?${query}` : ''}`}
        style={props.style}
        {...args}
      >
        {children}
      </NavLink>
    );
  }


  // return (
  //   <ComposedQuery>
  //     {({ getPagesUrls: { loading, error, data } }) => {
  //       if (loading) {
  //         return <Loader />;
  //       }

  //       if (error) {
  //         return `Error: ${error}`;
  //       }

  //       let pageUrlObj;
  //       const { pagesUrls } = data;
  //       if (pagesUrls) {
  //         pageUrlObj = pagesUrls.find(u => u.page === pageId || u.url === url);
  //       }

  //       if (isExternalLink(url) || args.forceHtml || urlNewWindow) {
  //         return (
  //           <a
  //             {...args}
  //             style={props.style}
  //             target={urlNewWindow ? '_blank' : ''}
  //             href={(isExternalLink(url) && url) || (pageUrlObj && pageUrlObj.url) || '#'}
  //           >
  //             {children}
  //           </a>
  //         );
  //       } else {
  //         return (
  //           <NavLink 
  //             activeClassName={'navItemActive'} 
  //             to={(dynamic && url) || (pageUrlObj ? `${pageUrlObj.url}${query ? `?${query}` : ''}` : '#')}
  //             style={props.style}
  //             {...args}
  //           >
  //             {children}
  //           </NavLink>
  //         );
  //       }
  //     }}
  //   </ComposedQuery>
  // );
};

export default ComposerLink;