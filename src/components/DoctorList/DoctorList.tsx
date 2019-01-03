import * as React from 'react';
import Button from '../../partials/Button';
import Media from '@source/partials/Media';
import Link from '@source/partials/Link';

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

const DoctorList = (props: DoctorListProps) => {
  const { doctors, title } = props.data;

  return (
    <section className={'doctorList'}>
      <div className={'container'}>
        {title && <h3>{title}</h3>}

        {console.log('%c Emilio: cacaca', 'background: #222; color: #bada55', props)}

        <div className="doctorList__wrapper">
          {doctors &&
            doctors.map((doctor, index) => {
              return (
                <div className={'doctorList__item'} key={index}>
                  <div className={'doctorList__item__img'}>
                    {(doctor.image && doctor.image.filename && <Media data={doctor.image} type="image" />) || (
                      <img
                        className="avatar"
                        src={'../../../assets/medicon/images/doctorIcon.svg'}
                        alt="Medicon Doctor Icon"
                      />
                    )}
                  </div>

                  <div className={'doctorList__item__info'}>
                    <h3>{doctor.name}</h3>

                    <p>{doctor.field}</p>

                    <Link
                      languageCode={props.languageCode}
                      url={doctor.clinicUrl}
                      className={'doctorList__item__info__link'}
                    >
                      {doctor.clinicName}
                    </Link>

                    <Button
                      classes="btn--blueBorder btn--small"
                      url={doctor.doctorUrl}
                      languageCode={props.languageCode}
                    >
                      vice info
                    </Button>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="doctorList__btnHolder">
          <Button classes="btn--blueBkg btn--down">zobrazit vice</Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorList;
