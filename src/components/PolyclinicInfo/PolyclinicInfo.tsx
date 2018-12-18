import * as React from 'react';

export interface PolyclinicInfoProps {}

const PolyclinicInfo = (props: PolyclinicInfoProps) => {
  return (
    <section className="policlinicInfo">
      <div className="policlinicInfo__item" style={{ backgroundImage: 'url(/assets/medicon/images/geoIcon.svg)' }}>
        <p>
          Antala Staška 1670/80
          <br />
          140 00 Praha 4
        </p>
      </div>
      <div className="policlinicInfo__item" style={{ backgroundImage: 'url(/assets/medicon/images/phoneIcon.svg)' }}>
        <p>+420 261 006 111</p>
      </div>
      <div className="policlinicInfo__item" style={{ backgroundImage: 'url(/assets/medicon/images/metro.png)' }}>
        <p>
          Metro C <br />
          stanice Budějovická
        </p>
      </div>
    </section>
  );
};

export default PolyclinicInfo;
