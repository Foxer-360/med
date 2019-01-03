import * as React from 'react';
import Hamburger from './components/Hamburger';
import Link from '@source/partials/Link';

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
    const mainNav = this.props.navigations && this.props.navigations.main;
    const secondaryNav = this.props.navigations && this.props.navigations.secondary;

    return (
      <header className={`header ${this.state.menuActive ? 'menuActive' : ''}`}>
        <div className="container">
          <div className={'header__wrapper'} ref={this.headerWrapper}>
            <div className={'header__logo'}>
              <Link languageCode={this.props.languageCode} url={'/'}>
                <img src="/assets/medicon/images/logo.svg" alt="Medicon Logo" />
              </Link>
            </div>

            <nav>
              <ul>
                {mainNav &&
                  mainNav.map((navItem, i) => (
                    <li key={i}>
                      <Link url={navItem.url} languageCode={this.props.languageCode}>
                        {navItem.name}
                      </Link>
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
              {secondaryNav &&
                secondaryNav.map((navItem, i) => (
                  <li key={i}>
                    {
                      <Link url={navItem.url} languageCode={this.props.languageCode} onClick={() => this.closeMenu()}>
                        {navItem.name}
                      </Link>}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
