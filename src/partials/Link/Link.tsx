import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Loader from '../../partials/Loader';

const isExternalLink = url => {
  const pattern = /^https?|^www/i;
  return pattern.test(url);
};

const GET_PAGES_URLS = gql`
  query pagesUrls($languageCode: String) {
    pagesUrls(where: { languageCode: $languageCode }) {
      id
      page
      url
      name
      description
    }  
  }
`;

const ComposerLink = props => {
  const { children, urlNewWindow, url, pageId, languageCode, ...args } = props;

  return (
    <Query query={GET_PAGES_URLS} variables={{ languageCode }}>
      {({ data: { pagesUrls }, loading, error }) => {
        if (loading) {
          return <Loader />;
        }

        if (error) {
          return `Error: ${error}`;
        }

        let pageUrlObj;

        if (pagesUrls) {
          pageUrlObj = pagesUrls.find(u => u.page === pageId || u.url === url);
        }

        if (isExternalLink(url) || args.forceHtml || urlNewWindow) {
          return (
            <a
              href={(isExternalLink(url) && url) || (pageUrlObj && pageUrlObj.url) || '/404'}
              {...args}
              target={urlNewWindow ? '_blank' : ''}
            >
              {children}
            </a>
          );
        } else {
          return (
            <Link to={pageUrlObj ? pageUrlObj.url : '/404'} {...args}>
              {children}
            </Link>
          );
        }
      }}
    </Query>
  );
};

export default ComposerLink;
