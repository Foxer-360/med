import * as React from 'react';
import Hamburger from './components/Hamburger';

export interface HeaderProps {}

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
    return (
      <header className={`header ${this.state.menuActive ? 'menuActive' : ''}`}>
        <div className="container">
          <div className={'header__wrapper'} ref={this.headerWrapper}>
            <div className={'header__logo'}>
              <a href={''}>
                <img src="/assets/medicon/images/logo.svg" alt="Medicon Logo" />
              </a>
            </div>

            <nav>
              <ul>
                <li>
                  <a href="">Domu</a>
                </li>
                <li>
                  <a href="">O nas</a>
                </li>
                <li>
                  <a href="">kontakty</a>
                </li>
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
              <li>
                <a href="">Link</a>
              </li>
              <li>
                <a href="">Link</a>
              </li>
              <li>
                <a href="">Link</a>
              </li>
              <li>
                <a href="">Link</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
