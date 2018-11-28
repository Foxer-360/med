import * as React from 'react';

export interface PolyclinicInfoProps {}

const PolyclinicInfo = (props: PolyclinicInfoProps) => {
  return (
    <div className="policlinicInfo">
      <div className="policlinicInfo__item" style={{ backgroundImage: 'url(/assets/medicon/images/geo.png)' }}>
        <p>
          Antala Staška 1670/80 <br />
          140 00 Praha 4
        </p>
      </div>
      <div className="policlinicInfo__item" style={{ backgroundImage: 'url(/assets/medicon/images/phone.png)' }}>
        <p>+420 261 006 111</p>
      </div>
      <div className="policlinicInfo__item" style={{ backgroundImage: 'url(/assets/medicon/images/metro.png)' }}>
        <p>
          Metro C <br />
          stanice Budějovická
        </p>
      </div>
    </div>
  );
};

export default PolyclinicInfo;
