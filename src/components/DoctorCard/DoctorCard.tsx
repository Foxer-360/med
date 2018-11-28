import * as React from 'react';
import DoctorSchedule from './components/DoctorSchedule/DoctorSchedule';
import TextBlock from '../TextBlock';

export interface DoctorCardProps {}

const DoctorCard = (props: DoctorCardProps) => {
  return (
    <section className={'doctorCard'}>
      <div className="container">
        <div className={'doctorCard__main'}>
          <img src="/assets/medicon/images/lekari.png" />

          <h3>mudr. jana pavluchová</h3>

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
              <div
                className={'doctorCard__info__item'}
                style={{ backgroundImage: 'url(/assets/medicon/images/stethoscope.png)' }}
              >
                Alergologie
                <br />
                Imunologie
              </div>
              <div
                className={'doctorCard__info__item'}
                style={{ backgroundImage: 'url(/assets/medicon/images/phone.png)' }}
              >
                +420 261 003 404
              </div>
              <div
                className={'doctorCard__info__item'}
                style={{ backgroundImage: 'url(/assets/medicon/images/geo.png)' }}
              >
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
          <button className={'btn  btnFirst'}>objednat</button>
        </div>

        <div className={'doctorCard__divider'}>
          <div className="dividerCircles">
            <div />
          </div>
        </div>
      </div>

      <TextBlock data={{title: 'Poskytovaná péče'}} />

      <TextBlock data={{title: 'typy provadenych vysetreni'}} />
    </section>   
  );
};

export default DoctorCard;
