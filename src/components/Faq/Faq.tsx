import * as React from 'react';
import * as ReactMarkdown from 'react-markdown/with-html';

import List from '../List';

interface Item {
  title: string;
  description: string;
}

export interface FaqProps {
  data: {
    items: Item[];
  };
}

interface FaqState {
  numberOfPage: number;
}

export default class Faq extends React.Component<FaqProps, FaqState> {
  constructor(props: FaqProps) {
    super(props);

    this.state = {
      numberOfPage: 1,
    };
  }

  render () {
    return (
      <List data={this.props.data.items}>
        {({ getPage }) => {
          const { items, lastPage } = getPage(this.state.numberOfPage, 'infinite', 4);

          return (
            <div className={'faq'}>
              <div className={'container'}>
                {items && items.map((item, i) => {
                  return (
                    <div key={i} className={'faq__element'}>
                      <h3>{item.title}</h3>
                      {item.description && <ReactMarkdown
                        skipHtml={false}
                        escapeHtml={false}
                        source={item.description}
                      />}
                    </div>
                  );
                })}

                {this.state.numberOfPage < lastPage && <button
                  className={'btn hCenterBlock btn--blueBkg btn--fullWidth'}
                  onClick={() => this.setState({ numberOfPage: this.state.numberOfPage + 1 })}
                >
                  více info
                </button>}
              </div>
            </div>
          );
        }}
      </List>
    );
  }
}
