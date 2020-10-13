import * as React from 'react';

export interface HelpPopupProps {}

export interface HelpPopupState {
  active: boolean;
}

export default class HelpPopup extends React.Component<HelpPopupProps, HelpPopupState> {
  constructor(props: HelpPopupProps) {
    super(props);

    this.state = {
      active: false,
    };
  }

  toggleList = () => {
    this.setState({
      active: !this.state.active,
    });
  }

//  componentDidMount() {
//    console.log("i am vibing..");
//  }

  public render() {
    return (
      <div className={`helpPopup ${this.state.active ? 'helpPopup--active' : ''} `}>
        <div
          className={'helpPopup__main'}
          style={{ backgroundImage: 'url(/assets/medicon/images/phoneIcon.svg)' }}
          onClick={() => this.toggleList()}
        >
          <h4>Potřebujete poradit?</h4>
        </div>

        <ul className={'helpPopup__list'}>
          <li style={{ backgroundImage: 'url(/assets/medicon/images/phoneIcon.svg)' }}>
            <p>Poliklinika Budějovická</p>
            <a className="phone" href="tel:+420237777200">+420 237 777 200</a>
          </li>

          <li style={{ backgroundImage: 'url(/assets/medicon/images/phoneIcon.svg)' }}>
            <p>Poliklinika Holešovice</p>
            <a className="phone" href="tel:+420227777677">+420 227 777 677</a>
          </li>

          <li style={{ backgroundImage: 'url(/assets/medicon/images/phoneIcon.svg)' }}>
            <p>Poliklinika Vysočany</p>
            <a className="phone" href="tel:+420237777200">+420 237 777 200</a>
          </li>

          <li style={{ backgroundImage: 'url(/assets/medicon/images/phoneIcon.svg)' }}>
            <p>Poliklinika Zelený pruh</p>
            <a className="phone" href="tel:+420234105111">+420 234 105 111</a>
          </li>
        </ul>
      </div>
    );
  }
}
