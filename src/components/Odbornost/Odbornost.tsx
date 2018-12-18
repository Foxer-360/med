import * as React from 'react';
import TextBlock from '../TextBlock';
import DividerCircles from '../DividerCircles';

export interface OdbornostProps {}

const data = {
  title: 'Alergologie a Imunologie',
  img: '/assets/medicon/images/odbornost-lekar.jpg',
  doctor: 'MUDr. Hana Kocherová',
  cite:
    'Na našem oddělení Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu bibendum nulla, ac efficitur odio.',
};

const Odbornost = (props: OdbornostProps) => {
  return (
    <div className={'odbornost'}>
      <TextBlock data={data} />
      <DividerCircles />

      <div className={'container'}>
        <div className={'odbornost__doctor'}>
          <img src={data.img} alt="photo" />

          <div className="grid grid--vCenterBlock">
            <div>
              <div className={'horizontal-line'} />
              <p>{data.doctor}</p>
              <cite>{data.cite}</cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Odbornost;
