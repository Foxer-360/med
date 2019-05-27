import * as React from 'react';

import List from '../List';
import Link from '../../partials/Link';
import Media from '../../partials/Media';

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
              <div className="container">
                {title && <h3>{title}</h3>}
          
                <div className="row">
                  {items && items.map((item, index) => (
                    <div key={index} className="col-sm-12 col-lg-6 col-xl-4">
                      <div className="expertiseList__element">
                        <div>{item.image && <Media type={'image'} data={item.image} />}</div>
                        <Link {...item.url} />
                        {item.title && <p>{item.title}</p>}
                      </div>
                    </div>
                  ))}
                </div>

                {this.state.numberOfPage < lastPage && 
                  <button
                    className={'btn btn--blueBkg btn--fullWidth'}
                    onClick={() => this.setState({ numberOfPage: lastPage })}
                  >
                    zobrazit dalši odbornosti
                  </button>}
              </div>
            </section>
          );
        }}
      </List>
    );
  }
}