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

export interface MyProblemProps {
  data: {
    specializations: Specialization[];
  };
}

export interface MyProblemState {
  area: string;
  availableSpecializations: Specialization[];
} 

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

    for (let i = 0; i < this.props.data.specializations.length; i++) {
      if (this.props.data.specializations[i][area] === true) {
        availableSpecializations.push(this.props.data.specializations[i]);
      }
    }

    this.setState({
      availableSpecializations: availableSpecializations,  
      area: area,
    });
  }

  closeInfoBox = () => {
    this.setState({
      area: '',
    });
  }

  public render() {
    return (
      <div className="container">
        <section className={'myProblem'}>
          {console.log('%c Emilio: ', 'background: #222; color: #83FFFF', this.props)}

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
