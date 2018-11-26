import * as React from 'react';

class Footer extends React.Component<any, any> {
  public render() {
    return (
      <footer className={'footer'}>
        <div className="container">
          <div className="grid-container">
            <ul className="footer-menu">
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
            <ul className="footer-menu">
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
            <ul className="footer-menu">
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
            <div className="social">
              <a href="#">
                <img src="/assets/medicon/images/facebook.png" alt="facebook" />
              </a>
              <br />
              <p>
                <strong>MEDICON a.s.</strong>
                <br />
                Antala Staška 1670/80 <br />
                140 00 Praha 4 <br />
              </p>
            </div>
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
