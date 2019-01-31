import * as React from 'react';
import DoctorSchedule from './components/DoctorSchedule/DoctorSchedule';
import TextBlock from '../TextBlock';
import Button from '../../partials/Button';
import Media from '../../partials/Media';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import * as R from 'ramda';

const GET_CONTEXT = gql`{
  datasourceItems @client
}`;

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

  
  return (
    <Query query={GET_CONTEXT}>{({ error, loading, data }) => {
      if (error) { return 'Error...'; }
      if (loading) { return 'Loading...'; }
      
      const { datasourceItems } = data;

      const regex = /%([^%]*)%/g;
      let stringifiedData = JSON.stringify(props.data);
      let replacedData = String(stringifiedData);
      let result;
      
      while (result = regex.exec(stringifiedData)) {
        if (result[1]) {
          try {
            const searchKeys = result[1].split(',');
            console.log(searchKeys);
            if (Array.isArray(searchKeys) && searchKeys.length > 0) {
              const getValueFromDatasourceItems = R.path(searchKeys);
              const replacement = getValueFromDatasourceItems(datasourceItems[datasourceItems.length - 1].content);
              if (replacement) {
                
                replacedData = replacedData.replace(result[0], replacement);
              }
            }    
          } catch (e) {
            console.log(e);
          }
        }
      }
      
      const parsedData = JSON.parse(replacedData);
      console.log(parsedData);
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
      } = parsedData;



      return (<section className={'doctorCard'}>
        <div className="container">
          <div className={'doctorCard__main'}>
            {(doctorImage && <Media data={doctorImage} type="image" />) || (
              <img src="/assets/medicon/images/doctorIcon.svg" />
            )}

            {name && <h3 className={'gradientHeading'}>{name}</h3>}

            {specialization && <p className={'doctorCard__main__spe'}>{specialization}</p>}

            {nurse && (
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
            <div>{schedule && <DoctorSchedule data={schedule} />}</div>

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

        {additionalInfo &&
          additionalInfo.map((item, i) => {
            return <TextBlock key={i} data={{ title: item.title, text: item.text }} />;
          })}
      </section>);

    }}</Query>
  );
};

export default DoctorCard;
