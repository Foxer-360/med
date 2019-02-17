import * as React from 'react';
import ReactMarkdown from 'react-markdown';

export interface ExpertiseDescriptionCareProps {
  title: string;
  firstText: string;
  secondText: string;
  hideBtn: string;
  showHiddenText: boolean;
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

  componentWillReceiveProps(nextProps: ExpertiseDescriptionCareProps) {
    this.setState({ showHiddenText: nextProps.showHiddenText });
  }

  render() {
    const { title, firstText, secondText, hideBtn } = this.props;

    return (
      <div className={'care'}>
        {title && <h3>{title}</h3>}
        <div className={'hCenterBlock'}>
          {firstText && <ReactMarkdown source={firstText} />}
        </div>
        {secondText && secondText.length > 1 && hideBtn &&
          <h4 
            style={{ cursor: 'pointer', paddingTop: '45px', paddingBottom: 0 }} 
            onClick={() => this.setState({ showHiddenText: !this.state.showHiddenText })}
          >
            {hideBtn}
          </h4>
        }
        
        {this.state.showHiddenText ? 
          <div className={'hCenterBlock'} style={{ marginTop: 45 }}>
            {secondText && <ReactMarkdown source={secondText} />}
          </div>
          : ''
        }
      </div>
    );
  }
}