import * as React from 'react';
import ReactMarkdown from 'react-markdown';

export interface ExaminationProps {
  title: string;
  description: string;
  lastLong: boolean;
}

export interface ExaminationState {
  isDescriptionVisible: boolean;
}

class Examination extends React.Component<ExaminationProps, ExaminationState> {
  constructor(props: ExaminationProps) {
    super(props);

    this.state = {
      isDescriptionVisible: false
    };
  }

  public render() {
    const { title, description, lastLong } = this.props;

    return (
      <div 
        style={description ? { cursor: 'pointer' } : { cursor: 'default' }}
        className={`examination__list__item ${lastLong ? 'examination__list__item--last-long' : ''}`}
      >
        {title && 
          <p onClick={() => this.setState({ isDescriptionVisible: !this.state.isDescriptionVisible })}>
            {title}
          </p>}
        {description && 
          <ReactMarkdown
            source={description}
            renderers={{
              // tslint:disable-next-line:no-any
              paragraph: (props: any) => 
                <p style={this.state.isDescriptionVisible ? { display: 'block' } : { display: 'none' }}>
                  {props.children}
                </p>,
            }}
          />}
          
      </div>
    );
  }
}

export default Examination;