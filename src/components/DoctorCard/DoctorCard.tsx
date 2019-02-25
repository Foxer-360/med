import * as React from 'react';
import DoctorSchedule from './components/DoctorSchedule/DoctorSchedule';
import TextBlock from '../TextBlock';
import Button from '../../partials/Button';
import Media from '../../partials/Media';
import List from '../List';

export interface DoctorCardProps {
  data: {
    name: string;
    specialization: string;
    nurse: string;
    phone: string;
    doctorImage: LooseObject;
    clinicImage: LooseObject;
    clinicName: string;
    clinicExtraInfo: string;
    clinicAddress: string;
    schedule: [
      {
        day: string;
        eveningHoursdescription: string;
        eveningOpeningHours: string;
        morningHoursdescription: string;
        morningOpeningHours: string;
      }
    ];
    additionalInfo: [
      {
        title: string;
        text: string;
      }
    ];
  };
}

const DoctorCard = (props: DoctorCardProps) => {
  const {
    name,
    specialization,
    phone,
    nurse,
    doctorImage,
    clinicImage,
    clinicName,
    clinicExtraInfo,
    clinicAddress,
    schedule,
    additionalInfo,
  } = props.data;

  return (
    <section className={'doctorCard'}>
      <div className="container">
        <div className={'doctorCard__main'}>
          {(doctorImage && doctorImage.filename && <Media data={doctorImage} type="image" />) || (
            <img src="/assets/medicon/images/doctorIcon.svg" />
          )}

          {name && <h3 className={'gradientHeading'}>{name}</h3>}

          {specialization && <p className={'doctorCard__main__spe'}>{specialization}</p>}

          {nurse && nurse.length > 1 && (
            <p className={'doctorCard__main__sis'}>
              Sestra: <strong>{nurse}</strong>
            </p>
          )}
        </div>
      </div>

      <div className={'fullwidthContainer'}>
        <div className="doctorCard__info">
          <div className={'container'}>
            <div className="doctorCard__info__wrapper">
              <div className={'doctorCard__info__item'}>
                <img src="/assets/medicon/images/stethoscopeIcon.svg" />
                <p>{specialization}</p>
              </div>

              <div className={'doctorCard__info__item'}>
                <img src="/assets/medicon/images/phoneIcon.svg" />
                {phone && <p>{phone}</p>}
              </div>

              <div className={'doctorCard__info__item'}>
                <img src="/assets/medicon/images/geoIcon.svg" />

                <div>
                  <p>
                    <strong>{clinicName}</strong>
                    {clinicExtraInfo && <span>{' - ' + clinicExtraInfo}</span>}
                  </p>
                  <p>{clinicAddress}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={'container'}>
        <div className={'doctorCard__timePlace'}>
          <div>
            <List data={schedule}>{({ data }) => data &&
              <DoctorSchedule 
                data={data.map(({
                  day,
                  eveningHoursdescription,
                  eveningOpeningHours,
                  morningHoursdescription,
                  morningOpeningHours
                }) => ({
                  day,
                  eveningHoursdescription,
                  eveningOpeningHours,
                  morningHoursdescription,
                  morningOpeningHours,
                }))} 
              />}</List>
          </div>

          <div>{clinicImage && <Media data={clinicImage} type="image" />}</div>
        </div>

        <div className={'doctorCard__btnHolder'}>
          <Button classes={'btn--blueBkg'} noArrow={true}>
            objednat
          </Button>
        </div>

        <div className={'doctorCard__divider'}>
          <div className="dividerCircles">
            <div />
          </div>
        </div>
      </div>

      <List data={additionalInfo}>
        {({ data }) =>
          data &&
          data.map((item, i) => {
            return <TextBlock key={i} data={{ title: item.title, text: item.text }} />;
          })}
      </List>
    </section>
  );
};

export default DoctorCard;
