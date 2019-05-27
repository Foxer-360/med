import * as React from 'react';

import List from '../List';
import Button from '../../partials/Button';
import SelectButton from './components/index';
import getImageUrl from '../../helpers/getImageUrl';

interface Position {
  name: string;
  url: LooseObject;
  polyclinic: string;
  image: LooseObject;
}

export interface JobPositionsState {
  numberOfPage: number;
}

export interface JobPositionsProps {
  languageCode?: string;
  data: {
    title: string;
    positions: Position[];
  };
}

class JobPositions extends React.Component<JobPositionsProps, JobPositionsState> {
  constructor(props: JobPositionsProps) {
    super(props);

    this.state = {
      numberOfPage: 1
    };
  }

  render() {
    const { title, positions } = this.props.data;

    let polyclinics = [];
    if (positions && positions.length > 0) {
      positions.map((position, i) => {
        polyclinics.push(position.polyclinic);
      });
    }

    return (
      <List data={positions}>
        {({ getPage }) => {
          const { items, lastPage } = getPage(this.state.numberOfPage, 'infinite', 3);
          
          return (
            <div className={'container'}>
              <div className={'actual-positions'}>
                {title && <h3>{title}</h3>}

                {/* <SelectButton polyclinics={polyclinics} /> */}

                <div className={'positions row'}>
                  {items && items.map((position, index) => (
                    <div key={index} className={'col-sm-12 col-lg-6 col-xl-4'}>  
                      <div
                        className={'positions__element'}
                        style={{ backgroundImage: position.image && `url(${getImageUrl(position.image)})` }}
                      >
                        <div className={'positions__element-content'}>
                          {position.name && <p>{position.name}</p>}
                          <Button classes={'btn--whiteBorder'} url={position.url}>
                            více informací
                          </Button>
                        </div>

                        <div
                          className={'positions__colorGradient'}
                          style={{ background: `linear-gradient(to bottom, transparent 0%, #2473ba 100%)` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {this.state.numberOfPage < lastPage &&
                  <button 
                    className={'btn hCenterBlock btn--blueBkg btn--down btn--fullWidth'}
                    onClick={() => this.setState({ numberOfPage: this.state.numberOfPage + 1 })}
                  >
                    další pozice
                  </button>}
              </div>
            </div>
          );
        }}
      </List>
    );
  }
}

export default JobPositions;