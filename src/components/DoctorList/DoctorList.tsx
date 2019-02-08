import * as React from 'react';
import Button from '../../partials/Button';
import Media from '@source/partials/Media';
import Link from '@source/partials/Link';
import List from '../List';
import Loader from '@source/partials/Loader';

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
  showMore: boolean;
}

export default class DoctorList extends React.Component<DoctorListProps, DoctorListState> {
  constructor(props: DoctorListProps) {
    super(props);

    this.state = {
      showMore: false,
    };
  }

  render() {
    const { doctors, title } = this.props.data;

    return (
      <List data={doctors}>
      {({ data }) => {

        let otherDoctors = [];

        const sourcedDoctors = data;
    
        if (sourcedDoctors.length > 4) {
          otherDoctors = sourcedDoctors.slice(4, sourcedDoctors.length);
        }

        return (
          <section className={'doctorList'}>
            <div className={'container'}>
              {title && <h3>{title}</h3>}
      
              <div className="doctorList__wrapper">
                {sourcedDoctors && sourcedDoctors.slice(0, 4).map((doctor, index) => {
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
                          vice info
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {this.state.showMore ? (
                <div className="doctorList__wrapper">
                {otherDoctors && otherDoctors.map((doc, i) => {
                  return (
                    <div className={'doctorList__item'} key={i}>
                      <div className={'doctorList__item__img'}>
                        {(doc.image && doc.image.filename && <Media data={doc.image} type="image" />) || (
                          <img
                            className="avatarImg"
                            src={'../../../assets/medicon/images/doctorIcon.svg'}
                            alt="Medicon Doctor Icon"
                          />
                        )}
                      </div>

                      <div className={'doctorList__item__info'}>
                        <h3>{doc.name}</h3>
                        <p>{doc.field}</p>
                        <Link url={doc.clinicUrl} className={'doctorList__item__info__link'}>
                          {doc.clinicName}
                        </Link>
                        <Button classes="btn--blueBorder btn--small" url={doc.doctorUrl}>
                          vice info
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
              ) : ''}

              {otherDoctors.length >= 1 ? (
                <div className="doctorList__btnHolder">
                  <button 
                    onClick={() => this.setState({ showMore: !this.state.showMore })} 
                    className={'btn btn--blueBkg'}
                  >
                    zobrazit {this.state.showMore ? `méně ⯅` : `vice ⯆`}
                  </button>
                </div>
              ) : ''}
            </div>
          </section>
        );
      }}
      </List>
    );
  }
}