import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

export interface ExaminationProps {
  index: number;
  title: string;
  description: string;
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
    const { title, description, index } = this.props;

    return (
      <div
        style={description ? { cursor: 'pointer' } : { cursor: 'default' }}
        className={`examination__list__item col-12 ${index === 2 ? 'col-md-12' : 'col-md-6'}`}
      >
        <div style={{ display: 'table', height: '100%', width: '100%' }}>
          <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
            {title &&
              <p
                style={{ fontWeight: 500 }}
                onClick={() => this.setState({ isDescriptionVisible: !this.state.isDescriptionVisible })}
              >{title}
              </p>}

            {description &&
              <ReactMarkdown
                source={description}
                renderers={{
                  // tslint:disable-next-line:no-any
                  root: (props: any) =>
                    <div
                      className={'examination__list__item--markdown'}
                      style={
                        this.state.isDescriptionVisible ?
                        { display: 'block', paddingTop: 15 } :
                        { display: 'none' }}
                    >
                      {props.children}
                    </div>,
                }}
              />}
          </div>
        </div>
      </div>
    );
  }
}

export default Examination;