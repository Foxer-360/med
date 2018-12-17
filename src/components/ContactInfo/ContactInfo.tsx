import * as React from 'react';

interface Phone {
  name: string;
  type: string;
}

interface Email {
  name: string;
}

interface Additional {
  name: string;
}

export interface ContactInfoProps {
  data: {
    address: string;
    phones: Phone[];
    emails: Email[];
    additional: Additional[];
  };
}

const ContactInfo = (props: ContactInfoProps) => {
  const { address, phones, emails, additional } = props.data;

  return (
    <div className={'contact-info'}>
      <div className={'container'}>
        <div className={'grid contact-info__grid'}>
          
          <div className={'grid contact-info__grid__element'}>
            <img src="/assets/medicon/images/contact-info-1.png" alt="address"/>
            <div>
              {address && <p>{address}</p>}
            </div>
          </div>
          <div className={'grid contact-info__grid__element'}>
            <img src="/assets/medicon/images/contact-info-2.png" alt="phone number"/>
            <div>
              {phones && phones.map((item, i) => (
                <a href={`${item.type}:${item.name}`} key={i}>{item.type}: {item.name}</a>
              ))}
            </div>
          </div>
          <div className={'grid contact-info__grid__element'}>
            <img src="/assets/medicon/images/contact-info-3.png" alt="e-mail"/>
            <div>
              {emails && emails.map((item, i) => (
                <a href={`mailto:${item.name}}`} key={i}>{item.name}</a>
              ))}
              
            </div>
          </div>
          <div className={'grid contact-info__grid__element'}>
            <img src="/assets/medicon/images/contact-info-4.png" alt="ICO and DIC"/>
            <div>
              {additional && additional.map((item, i) => (
                <p key={i}>{item.name}</p>  
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactInfo;