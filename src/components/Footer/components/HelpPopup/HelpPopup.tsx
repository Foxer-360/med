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
          style={{ backgroundImage: 'url(/assets/medicon/images/phone2.png)' }}
          onClick={() => this.toggleList()}
        >
          <h4>Potrebujete poraditz</h4>
        </div>

        <ul className={'helpPopup__list'}>
          <li style={{ backgroundImage: 'url(/assets/medicon/images/phone2.png)' }}>
            <p>Polikinika Budejovicka</p>
            <a href="tel:+420261006111">+420 261 006 111</a>
          </li>

          <li style={{ backgroundImage: 'url(/assets/medicon/images/phone2.png)' }}>
            <p>Polikinika Budejovicka</p>
            <a href="tel:+420261006111">+420 261 006 111</a>
          </li>

          <li style={{ backgroundImage: 'url(/assets/medicon/images/phone2.png)' }}>
            <p>Polikinika Budejovicka</p>
            <a href="tel:+420261006111">+420 261 006 111</a>
          </li>
        </ul>
      </div>
    );
  }
}
