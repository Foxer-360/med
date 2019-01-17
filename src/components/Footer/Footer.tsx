import * as React from 'react';
import Social from './components/Social';
import HelpPopup from './components/HelpPopup';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { adopt } from 'react-adopt';
import Link from '@source/partials/Link';
import { Link as DomLink } from 'react-router-dom';

const GET_CONTEXT = gql`
  {
    languageData @client
    pageData @client
    websiteData @client
    languagesData @client
    navigationsData @client
  }
`;

const GET_PAGES_URLS = gql`
  query pagesUrls($language: ID!) {
    pagesUrls(where: { language: $language }) {
      id
      page
      url
      name
      description
    }
  }
`;

const ComposedQuery = adopt({
  context: ({ render }) => <Query query={GET_CONTEXT}>{({ data }) => render(data)}</Query>,
  getPagesUrls: ({ render, context: { languageData } }) => {
    if (!languageData) {
      return render({});
    }
    return (
      <Query query={GET_PAGES_URLS} variables={{ language: languageData.id }}>
        {data => {
          return render(data);
        }}
      </Query>
    );
  },
});

class Footer extends React.Component<any, any> {
  public render() {
    return (
      <ComposedQuery>
        {({ getPagesUrls: { loading, error, data }, context }) => {
          if (!context.navigationsData || !context.languageData || !context.languagesData || !data || !data.pagesUrls) {
            return <div>Loading...</div>;
          }

          if (error) {
            return `Error...${error}`;
          }

          const {
            navigationsData: navigations,
            languageData: { code: languageCode },
          } = context;

          const transformedNavigations = this.transformNavigationsIntoTree(navigations, data.pagesUrls);

          const footerFirstNav = 'footerFirst';
          const footerSecondNav = 'footerSecond';
          const footerThirdNav = 'footerThird';

          const footerFirstNavItems =
            transformedNavigations && transformedNavigations[footerFirstNav]
              ? transformedNavigations[footerFirstNav]
              : [];

          const footerSecondNavItems =
            transformedNavigations && transformedNavigations[footerSecondNav]
              ? transformedNavigations[footerSecondNav]
              : [];

          const footerThirdNavItems =
            transformedNavigations && transformedNavigations[footerThirdNav]
              ? transformedNavigations[footerThirdNav]
              : [];

          return (
            <footer className={'footer'}>
              <HelpPopup />

              <div className="container">
                <div className="flexRow flexAlign--space-between">
                  <ul className={'footer__list'}>
                    {footerFirstNavItems &&
                      footerFirstNavItems.map((navItem, i) => (
                        <li key={i}>
                          <DomLink to={navItem.url}>{navItem.name}</DomLink>
                        </li>
                      ))}
                  </ul>

                  <ul className={'footer__list'}>
                    {footerSecondNavItems &&
                      footerSecondNavItems.map((navItem, i) => (
                        <li key={i}>
                          <DomLink to={navItem.url}>{navItem.name}</DomLink>
                        </li>
                      ))}
                  </ul>

                  <ul className={'footer__list'}>
                    {footerThirdNavItems &&
                      footerThirdNavItems.map((navItem, i) => (
                        <li key={i}>
                          <DomLink to={navItem.url}>{navItem.name}</DomLink>
                        </li>
                      ))}
                  </ul>

                  <Social />
                </div>
              </div>

              <div className="bottom">
                <div className="container">
                  <div className="copyrights grid">
                    <p>© 2018 - MEDICON a.s.</p>
                    <a href="#">
                      <p>Prohlášení o ochraně osobních údajů</p>
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          );
        }}
      </ComposedQuery>
    );
  }

  private transformNavigationsIntoTree(navigation: LooseObject[], urls: LooseObject[]): LooseObject | null {
    const tree = {};

    if (!navigation || navigation.length < 1) {
      return null;
    }

    navigation.forEach((nav: LooseObject) => {
      tree[nav.name] = this.buildNavTree(nav.nodes, null, urls);
    });

    return tree;
  }

  private buildNavTree(nav: LooseObject[], parent: string | null, urls: LooseObject[]): LooseObject[] {
    const res = [] as LooseObject[];

    nav.forEach((node: LooseObject) => {
      if (node.parent === parent) {
        const url = urls.find((u: LooseObject) => u.page === node.page);
        const item = {
          ...node,
          ...url,
        } as LooseObject;
        if (node.page) {
          const children = this.buildNavTree(nav, node.page, urls);
          if (children && children.length > 0) {
            item.children = children;
          }
        }
        if (node.title && node.link) {
          item.url = node.link;
        }

        res.push(item);
      }
    });

    res.sort((a: LooseObject, b: LooseObject) => a.order - b.order);
    return res;
  }
}

export default Footer;
