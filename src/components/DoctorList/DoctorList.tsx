import * as React from 'react';

import List from '../List';
import Link from '@source/partials/Link';
import Button from '../../partials/Button';
import Media from '@source/partials/Media';

interface Doctors {
  name: string;
  clinicName: string;
  clinicUrl: LooseObject;
  doctorUrl: LooseObject;
  field: string;
  image: LooseObject;
}
export interface DoctorListProps {
  languageCode?: string;
  data: {
    title: string;
    doctors: Doctors[];
  };
}

export interface DoctorListState {
  numberOfPage: number;
}

export default class DoctorList extends React.Component<DoctorListProps, DoctorListState> {
  constructor(props: DoctorListProps) {
    super(props);

    this.state = {
      numberOfPage: 1,
    };
  }

  render() {
    const { doctors, title } = this.props.data;

    return (
      <List data={doctors}>
        {({ getPage }) => {
          const { items, lastPage } = getPage(this.state.numberOfPage, 'infinite', 9);

          return (
            <section className={'doctorList'}>
              <div className={'container'}>
                {title && <h3>{title}</h3>}

                <div className="doctorList__wrapper">
                  {items &&
                    items.map((doctor, index) => {
                      return (
                        <div className={'doctorList__item'} key={index}>
                          <div className={'doctorList__item__img'}>
                            {(doctor.image && doctor.image.filename && <Media data={doctor.image} type="image" />) || (
                              <img
                                className="avatarImg"
                                src={'../../../assets/medicon/images/doctorIcon.svg'}
                                alt="Medicon Doctor Icon"
                              />
                            )}
                          </div>

                          <div className={'doctorList__item__info'}>
                            <h3>{doctor.name}</h3>
                            <p>{doctor.field}</p>
                            <Link {...doctor.clinicUrl} className={'doctorList__item__info__link'}>
                              {doctor.clinicName}
                            </Link>
                            <Button classes="btn--blueBorder btn--small" url={doctor.doctorUrl}>
                              více informací
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                </div>
                {this.state.numberOfPage < lastPage && <div className="doctorList__btnHolder">
                  <button
                    className={'btn btn--blueBkg'}
                    onClick={() => this.setState({ numberOfPage: lastPage })}
                  >
                    zobrazit více
                  </button>
                </div>}
              </div>
            </section>
          );
        }}
      </List>
    );
  }
}
