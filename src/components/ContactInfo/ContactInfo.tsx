import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';

export interface ContactInfoProps {
  data: {
    address: string;
    clinic?: string;
    clinicColor?: string;
    phones: string;
    emails: string;
    additional: string;
  };
}

const ContactInfo = (props: ContactInfoProps) => {
  const { address, phones, emails, additional, clinic, clinicColor } = props.data;

  return (
    <div className={'contact-info'}>
      <div className={'container'}>
        <div className={'grid contact-info__grid'}>
          <div className={'grid contact-info__grid__element'}>
            <img src={'/assets/medicon/images/contact-info-1.png'} alt="address" />
            <div>
              {address && <ReactMarkdown source={address} />}
              {clinic && <p style={clinicColor ? {color: `${clinicColor}`} : {}}>{clinic}</p>}
            </div>
          </div>
          <div className={'grid contact-info__grid__element'}>
            <img src={'/assets/medicon/images/contact-info-2.png'} alt="phone number" />
            <div>{phones && <ReactMarkdown source={phones} />}</div>
          </div>
          <div className={'grid contact-info__grid__element'}>
            <img src={'/assets/medicon/images/contact-info-3.png'} alt="e-mail" />
            <div>{emails && <ReactMarkdown source={emails} />}</div>
          </div>
          <div className={'grid contact-info__grid__element'}>
            <img src={'/assets/medicon/images/contact-info-4.png'} alt="ICO and DIC" />
            <div>{additional && <ReactMarkdown source={additional} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
