import * as React from 'react';
import gql from 'graphql-tag';
import { adopt } from 'react-adopt';
import { Query } from 'react-apollo';

import Link from '../../partials/Link';
import Loader from '../../partials/Loader';
import Hamburger from './components/Hamburger';

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

export interface HeaderProps {
  navigations?: LooseObject;
  languages?: LooseObject;
  languageCode?: string;
}

export interface HeaderState {
  vX: number;
  menuActive: boolean;
}

class Header extends React.Component<HeaderProps, HeaderState> {
  public logo: any;

  constructor(props: HeaderProps) {
    super(props);
    this.logo = React.createRef();
    this.state = { vX: 15, menuActive: false };
  }

  closeMenu = () => {
    this.setState({
      menuActive: false,
    });
  }

  toggleMenu = () => {
    this.setState({
      menuActive: !this.state.menuActive,
    });
  }

  getVertex() {
    if (window) {
      let container = (90 * window.innerWidth) / 100;
      let logoWidth = (this.logo.current && this.logo.current.clientWidth) || 55;

      if (window.innerWidth >= 992) {
        logoWidth = (this.logo.current && this.logo.current.clientWidth) || 123;
      }

      if (window.innerWidth >= 1250) {
        container = 1204;
      }

      logoWidth = Math.ceil(logoWidth / 2);

      let vX = Math.ceil((window.innerWidth - container) / 2) + logoWidth;

      this.setState({
        vX: Math.ceil((vX * 100) / window.innerWidth - 1),
      });
    }
  }

  componentDidMount() {
    this.getVertex();
  }

  public render() {
    this.state.menuActive ? (document.body.style.position = 'fixed') : (document.body.style.position = 'static');

    return (
      <ComposedQuery>
        {({ getPagesUrls: { loading, error, data }, context }) => {
          if (!context.navigationsData || !context.languageData || !context.languagesData || !data || !data.pagesUrls) {
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

          const mainNav = 'main';
          const secNav = 'secondary';

          const mainNavItems =
            transformedNavigations && transformedNavigations[mainNav] ? transformedNavigations[mainNav] : [];

          const secNavItems =
            transformedNavigations && transformedNavigations[secNav] ? transformedNavigations[secNav] : [];

          return (
            <header className={`header ${this.state.menuActive ? 'menuActive' : ''}`}>
              <div className="container">
                <div className={'header__wrapper'}>
                  <div className={'header__logo'} ref={this.logo}>
                    <Link
                      url={`${context.websiteData.urlMask === '/' ?
                              '' : context.websiteData.urlMask}/${context.languageData.code}`}
                    >
                      <img src="/assets/medicon/images/logo.svg" alt="Medicon Logo" />
                    </Link>
                  </div>

                  <nav>
                    <ul>
                      {mainNavItems &&
                        mainNavItems.map((navItem, i) => (
                          <li key={i}>
                            <Link {...navItem.url}>{navItem.name || navItem.title}</Link>
                          </li>
                        ))}
                    </ul>

                    <Hamburger active={this.state.menuActive} onClick={this.toggleMenu} />
                  </nav>
                </div>
              </div>

              <div className={'header__iso'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <polygon fill="white" points={`0,0 0,50 ${this.state.vX},100 100,0`} />
                </svg>
              </div>

              <div className={`hiddenMenu ${this.state.menuActive ? 'hiddenMenu--active' : ''}`}>
                <div className={'hiddenMenu__wrapper'}>
                  <ul>
                    {secNavItems &&
                      secNavItems.map((navItem, i) => (
                       <li key={i}>
                          {<Link {...navItem.url} onClick={() => this.closeMenu()}>
                            {navItem.name || navItem.title}
                          </Link>}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </header>
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

export default Header;
