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
              {phones && phones.map((phone, i) => (
                <a href={`${phone.type}:${phone.name}`} key={i}>{phone.type}: {phone.name}</a>
              ))}
            </div>
          </div>
          <div className={'grid contact-info__grid__element'}>
            <img src="/assets/medicon/images/contact-info-3.png" alt="e-mail"/>
            <div>
              {emails && emails.map((email, i) => (
                <a href={`mailto:${email.name}}`} key={i}>{email.name}</a>
              ))}
              
            </div>
          </div>
          <div className={'grid contact-info__grid__element'}>
            <img src="/assets/medicon/images/contact-info-4.png" alt="ICO and DIC"/>
            <div>
              {additional && additional.map((add, i) => (
                <p key={i}>{add.name}</p>  
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactInfo;