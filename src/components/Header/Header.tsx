import * as React from 'react';
import Hamburger from './components/Hamburger';
import { Link as DomLink } from 'react-router-dom';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { adopt } from 'react-adopt';

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
  public headerWrapper: any;

  constructor(props: HeaderProps) {
    super(props);
    this.headerWrapper = React.createRef();
    this.state = { vX: 15, menuActive: false };
  }

  getVertex = () => {
    let offsetLeft = this.headerWrapper.current && this.headerWrapper.current.offsetLeft + 61;
    let windowWidth = window.innerWidth;
    let vX = (offsetLeft * 100) / windowWidth;

    this.setState({
      vX,
    });
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

  componentDidMount() {
    this.getVertex();
  }

  public render() {
    // if (window.innerWidth < 768) {
    this.state.menuActive ? (document.body.style.position = 'fixed') : (document.body.style.position = 'static');
    // }

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

          const mainNav = 'main';
          const secNav = 'secondary';

          const mainNavItems =
            transformedNavigations && transformedNavigations[mainNav] ? transformedNavigations[mainNav] : [];

          const secNavItems =
            transformedNavigations && transformedNavigations[secNav] ? transformedNavigations[secNav] : [];

          return (
            <header className={`header ${this.state.menuActive ? 'menuActive' : ''}`}>
              <div className="container">
                <div className={'header__wrapper'} ref={this.headerWrapper}>
                  <div className={'header__logo'}>
                    <DomLink to={'/'}>
                      <img src="/assets/medicon/images/logo.svg" alt="Medicon Logo" />
                    </DomLink>
                  </div>

                  <nav>
                    <ul>
                      {mainNavItems &&
                        mainNavItems.map((navItem, i) => (
                          <li key={i}>
                            <DomLink to={navItem.url ? navItem.url : ''}>{navItem.name}</DomLink>
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
                          {
                            <DomLink to={navItem.url ? navItem.url : ''} onClick={() => this.closeMenu()}>
                              {navItem.name}
                            </DomLink>}
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

        res.push(item);
      }
    });

    res.sort((a: LooseObject, b: LooseObject) => a.order - b.order);
    return res;
  }
}

export default Header;
