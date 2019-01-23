import * as React from 'react';
import Social from './components/Social';
import HelpPopup from './components/HelpPopup';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { adopt } from 'react-adopt';
import Link from '../../partials/Link';

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

export interface FooterState { }

class Footer extends React.Component<FooterProps, FooterState> {
  constructor(props: FooterProps) {
    super(props);
  }

  public render() {
    const {
      links,
      social,
      socialIcons,
      company,
      url,
      text
    } = this.props.data;

    return (
      <footer className={'footer'}>
        <HelpPopup />

        <div className="container">
          <div className="flexRow flexAlign--space-between">

            {links && links.length > 0 &&
              <ul className={'footer__list'}>
                {links.slice(0, 5).map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            }

            {links && links.length > 5 &&
              <ul className={'footer__list'}>
                {links.slice(5, 10).map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            }

            {links && links.length > 10 &&
              <ul className={'footer__list'}>
                {links.slice(10, 15).map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            }

            {social && <Social info={social} icons={socialIcons} />}

          </div>
        </div>

        <div className="bottom">
          <div className="container">
            <div className="copyrights grid">

              {company && <p>{company}</p>}
              {text &&
                <a href={url}><p>{text}</p></a>
              }

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

        res.push(item);
      }
    });

    res.sort((a: LooseObject, b: LooseObject) => a.order - b.order);
    return res;
  }
}

export default Footer;
