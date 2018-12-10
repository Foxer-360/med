import * as React from 'react';
import DoctorSchedule from './components/DoctorSchedule/DoctorSchedule';
import TextBlock from '../TextBlock';
import Button from '../../partials/Button';

export interface DoctorCardProps {}

const DoctorCard = (props: DoctorCardProps) => {
  return (
    <section className={'doctorCard'}>
      <div className="container">
        <div className={'doctorCard__main'}>
          <img src="/assets/medicon/images/doctorIcon.svg" />

          <h3 className={'gradientHeading'}>mudr. jana pavluchová</h3>

          <p className={'doctorCard__main__spe'}>Alergologie a imunologie</p>

          <p className={'doctorCard__main__sis'}>
            Sestra: <strong>Jiřina Slezáková</strong>
          </p>
        </div>
      </div>

      <div className={'fullwidthContainer'}>
        <div className="doctorCard__info">
          <div className={'container'}>
            <div className="doctorCard__info__wrapper">
              <div className={'doctorCard__info__item'}>
                <img src="/assets/medicon/images/stethoscopeIcon.svg" />
                <p>
                  Alergologie
                  <br />
                  Imunologie
                </p>
              </div>

              <div className={'doctorCard__info__item'}>
                <img src="/assets/medicon/images/phoneIcon.svg" />
                <p>+420 261 003 404</p>
              </div>
              
              <div className={'doctorCard__info__item'}>
                <img src="/assets/medicon/images/geoIcon.svg" />

                <div>
                  <p>
                    <strong>Poliklinika Budějovická </strong>
                    Červená budova 9. patro
                  </p>
                  <p>Antala Staška 1670/80, 140 00 Praha 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={'container'}>
        <div className={'doctorCard__timePlace'}>
          <div>
            <DoctorSchedule />
          </div>

          <div>
            <img src="/assets/medicon/images/floorMap.png" alt="" />
          </div>
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

      <TextBlock data={{ title: 'Poskytovaná péče' }} />

      <TextBlock data={{ title: 'typy provadenych vysetreni' }} />
    </section>
  );
};

export default DoctorCard;
