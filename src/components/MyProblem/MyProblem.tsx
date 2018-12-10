import * as React from 'react';
import Avatar from './components/Avatar';
import SvgIcon from '@source/partials/SvgIcon';

export interface MyProblemProps {}

export interface MyProblemState {
  area: string;
}

class MyProblem extends React.Component<MyProblemProps, MyProblemState> {
  constructor(props: MyProblemProps) {
    super(props);

    this.state = {
      area: '',
    };
  }

  clickArea = (area: string) => {
    this.setState({
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
          <h3>Můj Problém se týká</h3>

          <p>Klikněte na část těla se kterou máte problém.</p>

          <div className={'flexRow myProblem__holder'}>
            <Avatar onClick={this.clickArea} activeArea={this.state.area ? 'active--' + this.state.area : ''} />

            {this.state.area && (
              <div className={`infoBox ${this.state.area ? 'infoBox--' + this.state.area : ''}`}>
                <div className={'infoBox__close'} onClick={() => this.closeInfoBox()}>
                  <SvgIcon name="close" type="gray" />
                </div>

                <div className={'infoBox__item'}>
                  <a href="">{this.state.area}</a>
                </div>
                <div className={'infoBox__item'}>
                  <a href="">{this.state.area}</a>
                </div>
                <div className={'infoBox__item'}>
                  <a href="">{this.state.area}</a>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default MyProblem;
