import * as React from 'react';
import Media from '@source/partials/Media';

export interface PolyclinicInfoProps {
  data: {
    address: string;
    addressIcon: LooseObject;
    phone: string;
    phoneIcon: LooseObject;
    transport: string;
    transportIcon: LooseObject;
  };
}

const PolyclinicInfo = (props: PolyclinicInfoProps) => {
  const { 
    address, 
    addressIcon,
    phone,
    phoneIcon,
    transport,
    transportIcon,  
  } = props.data;

  return (
    <div className="policlinicInfo">

      {address &&
        <Media 
          type={'background-image'} 
          classes={'policlinicInfo__item'}
          data={addressIcon}
        >
          <p>{address}</p>
        </Media>
      }

      {phone &&
        <Media 
          type={'background-image'} 
          classes={'policlinicInfo__item'}
          data={phoneIcon}
        >
          <p>
            <a href={`tel:${phone}`}>{phone}</a>
          </p>
        </Media>
      }

      {transport &&
        <Media 
          type={'background-image'} 
          classes={'policlinicInfo__item'}
          data={transportIcon}
        >
          <p>{transport}</p>
        </Media>
      }
      
    </div>
  );
};

export default PolyclinicInfo;
