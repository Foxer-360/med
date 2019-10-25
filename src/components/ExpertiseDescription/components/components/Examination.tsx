import * as React from 'react';
import * as ReactMarkdown from 'react-markdown/with-html';

import Link from '../../../../partials/Link';

export interface ExaminationProps {
  title: string;
  description: string;
  url?: LooseObject;
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
    const { title, description, url } = this.props;

    return (
      <div
        className={`examination__list__item `}
        style={description ? { cursor: 'pointer' } : { cursor: 'default' }}
      >
        <div style={{ display: 'table', height: '100%', width: '100%' }}>
          <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
            {title &&
              <p
                style={{ fontWeight: 500 }}
                onClick={() => this.setState({ isDescriptionVisible: !this.state.isDescriptionVisible })}
              >{title}
              </p>}
              
              {url && <Link 
                  {...url} 
                  style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }} 
              />}

            {description &&
              <ReactMarkdown
                skipHtml={false}
                escapeHtml={false}
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