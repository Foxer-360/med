import * as React from 'react';
import Social from './components/Social';
import HelpPopup from './components/HelpPopup';

class Footer extends React.Component<any, any> {
  public render() {
    return (
      <footer className={'footer'}>
        <HelpPopup />

        <div className="container">
          <div className="flexRow flexAlign--space-between">
            <ul className={'footer__list'}>
              <li>
                <a href="#">O společnosti</a>
              </li>
              <li>
                <a href="#">Skupina PRONATAL</a>
              </li>
              <li>
                <a href="#">INCARE</a>
              </li>
              <li>
                <a href="#">Aktuality</a>
              </li>
              <li>
                <a href="#">Kontakty</a>
              </li>
            </ul>
            <ul className={'footer__list'}>
              <li>
                <a href="#">Polikliniky</a>
              </li>
              <li>
                <a href="#">Mammacentra</a>
              </li>
              <li>
                <a href="#">Onkocentrum</a>
              </li>
              <li>
                <a href="#">Následná péče </a>
              </li>
              <li>
                <a href="#">Lékárny</a>
              </li>
            </ul>
            <ul className={'footer__list'}>
              <li>
                <a href="#">Nejčastější dotazy</a>
              </li>
              <li>
                <a href="#">Nabídka zaměstnání</a>
              </li>
              <li>
                <a href="#">Ochrana osobních údajů</a>
              </li>
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
  }
}

export default Footer;
