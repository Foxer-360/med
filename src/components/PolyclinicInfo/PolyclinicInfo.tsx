import * as React from 'react';

import Media from '../../partials/Media';
import DividerCircles from '../DividerCircles';

export interface ContactsProps {
  data: {
    geo: string;
    clinic?: string;
    clinicColor?: string;
    phone: string;
    transport: string;  
    transportImage: LooseObject;
  };
}

const PolyclinicInfo = (props: ContactsProps) => {
  const { geo, phone, transport, transportImage, clinic, clinicColor } = props.data;

  return (
    <div className={'policlinicInfo'}>
      <DividerCircles />

      <div className={'policlinicInfo__wrapper'}>
        <div className={'policlinicInfo__item'}>
          <img src={'/assets/medicon/images/geo.svg'} alt="address" />
          <div>
            <p style={{ display: 'block' }}>{geo}</p>
            {clinic && <p style={clinicColor ? {color: `${clinicColor}`} : {}}>{clinic}</p>}
          </div>
        </div>
        <div className={'policlinicInfo__item'}>
          <img src={'/assets/medicon/images/phone.svg'} alt="phone nubmer" />
          <p>{phone}</p>
        </div>
        <div className={'policlinicInfo__item'}>
          {transportImage && <Media type={'image'} data={transportImage} />}
          <p>{transport}</p>
        </div>
      </div>
    </div>
  );
};

export default PolyclinicInfo;
