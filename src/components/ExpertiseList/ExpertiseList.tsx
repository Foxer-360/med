import * as React from 'react';

import List from '../List';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';

interface Expertise {
  title: string;
  url: LooseObject;
  image: LooseObject;
}

export interface ExpertiseListProps {
  languageCode?: string;
  data: {
    title: string;
    expertiseList: Expertise[];
  };
}

interface ExpertiseListState {
  numberOfPage: number;
}

export default class ExpertiseList extends React.Component<ExpertiseListProps, ExpertiseListState> {
  constructor(props: ExpertiseListProps) {
    super(props);

    this.state = {
      numberOfPage: 1,
    };
  }

  render () {
    const { title, expertiseList } = this.props.data;

    return (
      <List data={expertiseList}>
        {({ getPage }) => {
          const { items, lastPage } = getPage(this.state.numberOfPage, 'infinite', 9);
  
          return (
            <section className="expertiseList">
              {title && <h3>{title}</h3>}
        
              <div className="grid-container">
                {items && items.map((item, index) => (
                  <Link {...item.url} key={index}>
                    <div className="expertiseList__element">
                      <div>{item.image && <Media type={'image'} data={item.image} />}</div>
  
                      {item.title && <p>{item.title}</p>}
                    </div>
                  </Link>
                ))}
              </div>
  
              {this.state.numberOfPage < lastPage && <div className="container">
                <button
                  onClick={() => this.setState({ numberOfPage: this.state.numberOfPage + 1 })}
                  className={'btn btn--blueBkg btn--fullWidth'}
                >
                  zobrazit dalši odbornosti
                </button>
              </div>}
            </section>
          );
        }}
      </List>
    );
  }
}