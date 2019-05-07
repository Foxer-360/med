import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { adopt } from 'react-adopt';

import List from '../List';
import Link from '../../partials/Link';
import Social from './components/Social';
import Loader from '@source/partials/Loader';
import HelpPopup from './components/HelpPopup';
import CookiePopup from './components/CookiePopup';
import TemporaryPopup from './components/TemporaryPopup';

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

const ComposedQuery = adopt({
  context: ({ render }) => <Query query={GET_CONTEXT}>{({ data }) => render(data)}</Query>,
  getPagesUrls: ({ render, context: { languageData, websiteData } }) => {
    if (!(languageData && websiteData)) {
      return render({});
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

interface Link {
  text: string;
  url: string;
}

interface Icon {
  name: string;
  url: string;
}

export interface FooterProps {
  data: {
    links: Link[];
    social: string;
    socialIcons: Icon[];
    company: string;
    url: string;
    text: string;
  };
}

export interface FooterState {}

class Footer extends React.Component<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);
  }

  public render() {
    const { links, social, socialIcons, company, url, text } = this.props.data;

    return (
      <footer className={'footer'}>
        <div className="container">
          <div className="flexRow flexAlign--space-between">
            <ComposedQuery>
              {({ getPagesUrls: { loading, error, data }, context }) => {
                if (
                  !context.navigationsData ||
                  !context.languageData ||
                  !context.languagesData ||
                  !data ||
                  !data.pagesUrls
                ) {
                  return <Loader />;
                }

                if (error) {
                  return `Error...${error}`;
                }

                const {
                  navigationsData: navigations,
                  languageData: { code: languageCode },
                } = context;

                const transformedNavigations = this.transformNavigationsIntoTree(navigations, data.pagesUrls);

                const footerFirst = 'footerFirst';
                const footerSecond = 'footerSecond';
                const footerThird = 'footerThird';

                const footerFirstItems =
                  transformedNavigations && transformedNavigations[footerFirst]
                    ? transformedNavigations[footerFirst]
                    : [];

                const footerSecondItems =
                  transformedNavigations && transformedNavigations[footerSecond]
                    ? transformedNavigations[footerSecond]
                    : [];

                const footerThirdItems =
                  transformedNavigations && transformedNavigations[footerThird]
                    ? transformedNavigations[footerThird]
                    : [];

                return (
                  <>
                  <HelpPopup />
                  <TemporaryPopup />
                  <CookiePopup lang={context.languageData.code} />

                    <ul className={'footer__list'}>
                      {footerFirstItems &&
                        footerFirstItems.map((navItem, i) => (
                          <li key={i}>
                            <Link {...navItem.url}>{navItem.name || navItem.title}</Link>
                          </li>
                        ))}
                    </ul>

                    <ul className={'footer__list'}>
                      {footerSecondItems &&
                        footerSecondItems.map((navItem, i) => (
                          <li key={i}>
                            <Link {...navItem.url}>{navItem.name || navItem.title}</Link>
                          </li>
                        ))}
                    </ul>

                    <ul className={'footer__list'}>
                      {footerThirdItems &&
                        footerThirdItems.map((navItem, i) => (
                          <li key={i}>
                            <Link {...navItem.url}>{navItem.name || navItem.title}</Link>
                          </li>
                        ))}
                    </ul>
                  </>
                );
              }}
            </ComposedQuery>

            {social && <List data={socialIcons}>{({ data }) => <Social info={social} icons={data} />}</List>}
          </div>
        </div>

        <div className="bottom">
          <div className="container">
            <div className="copyrights grid">
              {company && <p>{company}</p>}
              {text && <Link {...url}><p>{text}</p></Link>}
            </div>
          </div>
        </div>
      </footer>
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

        item.url = {
          url: item.url,
          pageId: item.id,
        };

        res.push(item);
      }
    });

    res.sort((a: LooseObject, b: LooseObject) => a.order - b.order);
    return res;
  }
}

export default Footer;
