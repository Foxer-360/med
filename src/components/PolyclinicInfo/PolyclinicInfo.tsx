import * as React from 'react';
import Media from '@source/partials/Media';

export interface ContactsProps {
  data: {
    geo: string;
    phone: string;
    transport: string;
    transportImage: LooseObject;
  };
}

const PolyclinicInfo = (props: ContactsProps) => {
  const { geo, phone, transport, transportImage } = props.data;
  
  return (
    <div className={'policlinicInfo'}>

      <div className={'policlinicInfo__item'}>
        <img src={'/assets/medicon/images/geo.svg'} alt="address"/>
        {geo && <p>{geo}</p>}
      </div>
      <div className={'policlinicInfo__item'}>
        <img src={'/assets/medicon/images/phone.svg'} alt="phone nubmer"/>
        {phone && <p>{phone}</p>}
      </div>
      <div className={'policlinicInfo__item'}>
        {(transportImage && <Media type={'image'} data={transportImage} />) || (
          <img src={'/assets/medicon/images/metro.svg'} alt="metro"/>
        )}
        {transport && <p>{transport}</p>}
      </div>
      
    </div>
  );
};

export default PolyclinicInfo;