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

  public render() {
    return (
      <div className={`helpPopup ${this.state.active ? 'helpPopup--active' : ''} `}>
        <div
          className={'helpPopup__main'}
          style={{ backgroundImage: 'url(/assets/medicon/images/phoneIcon.svg)' }}
          onClick={() => this.toggleList()}
        >
          <h4>Potřebujete poradit</h4>
        </div>

        <ul className={'helpPopup__list'}>
          <li style={{ backgroundImage: 'url(/assets/medicon/images/phoneIcon.svg)' }}>
            <p>Poliklinika Budějovická</p>
            <a href="tel:+420261006111">+420 261 006 111</a>
          </li>

          <li style={{ backgroundImage: 'url(/assets/medicon/images/phoneIcon.svg)' }}>
            <p>Poliklinika Zelený pruh</p>
            <a href="tel:+420234105111">+420 234 105 111</a>
          </li>

          <li style={{ backgroundImage: 'url(/assets/medicon/images/phoneIcon.svg)' }}>
            <p>Poliklinika Vysočany</p>
            <a href="tel:+420266006211">+420 266 006 211</a>
          </li>

          <li style={{ backgroundImage: 'url(/assets/medicon/images/phoneIcon.svg)' }}>
            <p>Poliklinika Holešovice</p>
            <a href="tel:+420227777677">+420 227 777 677</a>
          </li>
        </ul>
      </div>
    );
  }
}
