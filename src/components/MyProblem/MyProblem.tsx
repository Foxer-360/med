import * as React from 'react';
import Avatar from './components/Avatar';
import SvgIcon from '@source/partials/SvgIcon';

interface Specialization {
  name: string;
  head: boolean;
  belly: boolean;
  arm: boolean;
  legs: boolean;
  feet: boolean;
  body: boolean;
}

export interface MyProblemProps {}

export interface MyProblemState {
  area: string;
  availableSpecializations: Specialization[];
}

let specializations = [
  {
    name: 'alergologie a imunologie',
    head: true,
    chest: false,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: true,
  },
  {
    name: 'angiologie (cévní)',
    head: false,
    chest: false,
    belly: false,
    arm: false,
    legs: true,
    feet: false,
    body: true,
  },
  {
    name: 'audiometrie',
    head: true,
    chest: false,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: false,
  },
  {
    name: 'dermarologie (kožní)',
    head: true,
    chest: false,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: true,
  },
  {
    name: 'diabetologie',
    head: false,
    chest: false,
    belly: true,
    arm: false,
    legs: false,
    feet: false,
    body: true,
  },
  {
    name: 'domácí péče (Home Care)',
    head: false,
    chest: false,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: true,
  },
  {
    name: 'EEG',
    head: true,
    chest: false,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: false,
  },
  {
    name: 'EKG',
    head: false,
    chest: true,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: false,
  },
  {
    name: 'EMG',
    head: true,
    chest: true,
    belly: false,
    arm: true,
    legs: false,
    feet: false,
    body: false,
  },
  {
    name: 'endokrinologie',
    head: false,
    chest: false,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: true,
  },
  {
    name: 'foniatrie',
    head: true,
    chest: false,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: false,
  },
  {
    name: 'gastroenterologie',
    head: false,
    chest: false,
    belly: true,
    arm: false,
    legs: false,
    feet: false,
    body: false,
  },
  {
    name: 'gynekologie',
    head: false,
    chest: false,
    belly: true,
    arm: false,
    legs: false,
    feet: false,
    body: false,
  },
  {
    name: 'chirurgie (proktologie)',
    head: false,
    chest: false,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: true,
  },
  {
    name: 'infuzní terapie',
    head: false,
    chest: false,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: true,
  },
  {
    name: 'interna (a geriatrie)',
    head: false,
    chest: false,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: true,
  },
  {
    name: 'kalmetizace',
    head: false,
    chest: false,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: true,
  },
  {
    name: 'kardiologie (a EKG)',
    head: false,
    chest: true,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: false,
  },
  {
    name: 'lymfodrenáže',
    head: false,
    chest: false,
    belly: false,
    arm: false,
    legs: true,
    feet: false,
    body: false,
  },
  {
    name: 'Mammacentrum',
    head: false,
    chest: true,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: false,
  },
  {
    name: 'mas�e',
    head: false,
    chest: false,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: true,
  },
  {
    name: 'neurologie',
    head: true,
    chest: true,
    belly: false,
    arm: true,
    legs: true,
    feet: false,
    body: false,
  },
  {
    name: 'neurologie - dětská',
    head: true,
    chest: false,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: false,
  },
  {
    name: 'oční - dětské',
    head: true,
    chest: false,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: false,
  },
  {
    name: 'ORL',
    head: true,
    chest: false,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: false,
  },
  {
    name: 'ortopedie',
    head: false,
    chest: false,
    belly: false,
    arm: false,
    legs: true,
    feet: true,
    body: false,
  },
  {
    name: 'osteologie',
    head: false,
    chest: false,
    belly: false,
    arm: true,
    legs: true,
    feet: false,
    body: true,
  },
  {
    name: 'pediatrie (dětský praktický lékař)',
    head: false,
    chest: false,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: true,
  },
  {
    name: 'plicní (pneumologie)',
    head: false,
    chest: true,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: true,
  },
  {
    name: 'praktický lékař',
    head: false,
    chest: false,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: true,
  },
  {
    name: 'psychiatrie',
    head: true,
    chest: false,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: false,
  },
  {
    name: 'psychologie',
    head: true,
    chest: false,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: false,
  },
  {
    name: 'RDG a zobrazovací metody',
    head: false,
    chest: false,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: true,
  },
  {
    name: 'revmatologie',
    head: false,
    chest: false,
    belly: false,
    arm: true,
    legs: true,
    feet: true,
    body: false,
  },
  {
    name: 'urologie',
    head: false,
    chest: false,
    belly: true,
    arm: false,
    legs: false,
    feet: false,
    body: false,
  },
  {
    name: 'Onkologie',
    head: false,
    chest: false,
    belly: false,
    arm: false,
    legs: false,
    feet: false,
    body: true,
  },
  {
    name: 'reprodukční medicína',
    head: false,
    chest: false,
    belly: true,
    arm: false,
    legs: false,
    feet: false,
    body: false,
  },
];

class MyProblem extends React.Component<MyProblemProps, MyProblemState> {
  constructor(props: MyProblemProps) {
    super(props);

    this.state = {
      area: '',
      availableSpecializations: null,
    };
  }

  clickArea = (area: string) => {
    let availableSpecializations = [];

    for (let i = 0; i < specializations.length; i++) {
      if (specializations[i][area] === true) {
        availableSpecializations.push(specializations[i]);
      }
    }

    this.setState({
      availableSpecializations: availableSpecializations,
      area: area,
    });
  };

  closeInfoBox = () => {
    this.setState({
      area: '',
    });
  };

  public render() {

    return (
      <div className="container">
        <section className={'myProblem'}>
          <h3>Můj Problém se týká</h3>

          <p>Klikněte na část těla se kterou máte problém.</p>

          <div className={'flexRow myProblem__holder'}>
            <Avatar onClick={this.clickArea} activeArea={this.state.area ? 'active--' + this.state.area : ''} />

            {this.state.area && (
              <div className={`infoBox ${this.state.area ? 'infoBox--' + this.state.area : ''}`}>
                <div className={'infoBox__close'} onClick={() => this.closeInfoBox()}>
                  <SvgIcon name="close" type="gray" />
                </div>

                {this.state.availableSpecializations &&
                  this.state.availableSpecializations.map((specialization, i) => (
                    <div className={'infoBox__item'} key={i}>
                      <a href="">{specialization.name}</a>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default MyProblem;
