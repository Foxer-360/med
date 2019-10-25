import * as React from 'react';
import * as ReactMarkdown from 'react-markdown/with-html';

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
          {firstText && <ReactMarkdown
            skipHtml={false}
            escapeHtml={false}
            source={firstText}
          />}
        </div>
        {secondText && secondText.length > 1 &&
          <h4
            className={'care__more'}
            onClick={() => this.setState({ showHiddenText: !this.state.showHiddenText })}
          >
            {hideBtn ? hideBtn : 'Více informací'}
          </h4>
        }

        {this.state.showHiddenText ?
          <div className={'hCenterBlock care--hidden'} style={{ marginTop: 45 }}>
            {secondText && <ReactMarkdown
              skipHtml={false}
              escapeHtml={false}
              source={secondText}
            />}
          </div>
          : ''
        }
      </div>
    );
  }
}
