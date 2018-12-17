import * as React from 'react';
import Social from './components/Social';
import HelpPopup from './components/HelpPopup';

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
}

export default Footer;
