import * as React from 'react';

interface IProperties {
  data: number[];
}

const Benefits: React.SFC<IProperties> = props => (
  <section className={'benefity'}>
    <div className="container">
      <ul>
        <li style={{ backgroundImage: 'url(/assets/medicon/images/benefity1.png)' }}>
          <p>Přívětivý personál</p>
        </li>
        <li style={{ backgroundImage: 'url(/assets/medicon/images/benefity2.png)' }}>
          <p>Přívětivý personál</p>
        </li>
        <li style={{ backgroundImage: 'url(/assets/medicon/images/benefity3.png)' }}>
          <p>Přívětivý personál</p>
        </li>
        <li style={{ backgroundImage: 'url(/assets/medicon/images/benefity4.png)' }}>
          <p>Přívětivý personál</p>
        </li>
      </ul>
    </div>
  </section>
);

export default Benefits;
