import * as React from 'react';

interface IProperties { 
  data: number[];
}

const Benefits: React.SFC<IProperties> = props => (
  <section className={'benefits'}>
    <div className={'container'}>

      <div className={'grid benefits__list'}>
        <div className={'grid benefits__list__element'}>
          <img src="/assets/medicon/images/benefity1.png" alt="out benefit"/>
          <p>Přívětivý personál</p>
        </div>
        <div className={'grid benefits__list__element'}>
          <img src="/assets/medicon/images/benefity2.png" alt="out benefit"/>
          <p>Přívětivý personál</p>
        </div>
        <div className={'grid benefits__list__element'}>
          <img src="/assets/medicon/images/benefity3.png" alt="out benefit"/>
          <p>Přívětivý personál</p>
        </div>
        <div className={'grid benefits__list__element'}>
          <img src="/assets/medicon/images/benefity4.png" alt="out benefit"/>
          <p>Přívětivý personál</p>
        </div>
      </div>

    </div>
  </section>
);

export default Benefits;