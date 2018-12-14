import * as React from 'react';
import Button from '../../partials/Button';
import Media from '@source/partials/Media';

interface Doctors {
  name: string;
  clinicName: string;
  clinicUrl: string;
  field: string;
  image: LooseObject;
}
export interface DoctorListProps {
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

                    <a className={'doctorList__item__info__link'} href="">
                      {doctor.clinicName}
                    </a>

                    <Button classes="btn--blueBorder btn--small">vice info</Button>
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
