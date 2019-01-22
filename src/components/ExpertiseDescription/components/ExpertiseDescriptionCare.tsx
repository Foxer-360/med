import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import Button from '@source/partials/Button';

export interface ExpertiseDescriptionCareProps {
  title: string;
  firstText: string;
  secondText: string;
}

export interface ExpertiseDescriptionCareState {
  showHiddenText: boolean;
}

// tslint:disable-next-line:max-line-length
export default class ExpertiseDescriptionCare extends React.Component<ExpertiseDescriptionCareProps, ExpertiseDescriptionCareState> {
  constructor(props: ExpertiseDescriptionCareProps) {
    super(props);

    this.state = {
      showHiddenText: false,
    };
  }

  render() {
    return (
      <div className={'care'}>
        {this.props.title && <h3>{this.props.title}</h3>}
        <div className={'hCenterBlock'}>
          {this.props.firstText && <ReactMarkdown source={this.props.firstText} />}
        </div>
        <h3 style={{ cursor: 'pointer' }} onClick={() => this.setState({ showHiddenText: !this.state.showHiddenText })}>
          Více info
        </h3>
        {this.state.showHiddenText ? 
          <div className={'hCenterBlock'}>
            {this.props.secondText && <ReactMarkdown source={this.props.secondText} />}
          </div>
          : ''
        }
      </div>
    );
  }
}