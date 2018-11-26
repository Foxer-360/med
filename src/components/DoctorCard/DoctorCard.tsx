import * as React from 'react';

export interface DoctorCardProps {}

const DoctorCard = (props: DoctorCardProps) => {
  return (
    <div className="container">
      <section className={'doctorCard'}>
        <div className={'doctorCard__main'}>
          <img src="/assets/medicon/images/lekari.png" />

          <h3>mudr. jana pavluchová</h3>

          <p className={'doctorCard__main__spe'}>Alergologie a imunologie</p>

          <p className>
            Sestra: <strong>Jiřina Slezáková</strong>
          </p>
        </div>

        <div className={'doctorCard__btnHolder'}>
          <button className={'btn  btnFirst'}>objednat</button>
        </div>
      </section>
    </div>
  );
};

export default DoctorCard;
