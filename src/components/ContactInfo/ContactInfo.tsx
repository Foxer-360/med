import * as React from 'react';
import * as ReactMarkdown from 'react-markdown/with-html';

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
  const source = [
    'Zelená budova',
    'Žlutá budova',
    'Červená budova',
    'Fialová budova',
  ];

  const result = [
    '<b style="color: green">Zelená budova</b>',
    '<b style="color: #AA8F00">Žlutá budova</b>',
    '<b style="color: red">Červená budova</b>',
    '<b style="color: purple">Fialová budova</b>',
  ];

  let finalAddress = address;

  for (var i = source.length - 1; i >= 0; i--) {
    finalAddress = finalAddress.replace(`${source[i]}`, `${result[i]}`);
  }
  
  return (
    <div className={'contact-info'}>
      <div className={'container'}>
        <div className={'contact-info__grid row'}>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className={'contact-info__grid__element'}>
              <img src={'/assets/medicon/images/contact-info-1.png'} alt="address" />
              <div className={'contact-info__grid__element__content'}>
                {address && <ReactMarkdown
                  skipHtml={false}
                  escapeHtml={false}
                  source={finalAddress} 
                />}
                {clinic && <p style={clinicColor ? {color: `${clinicColor}`} : {}}>{clinic}</p>}
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className={'contact-info__grid__element'}>
              <img src={'/assets/medicon/images/contact-info-2.png'} alt="phone number" />
              <div className={'contact-info__grid__element__content phone'}>
                {phones && <ReactMarkdown 
                  skipHtml={false}
                  escapeHtml={false}
                  source={phones}
                />}
              </div>
            </div>
          </div>
          
          <div className="col-12 col-sm-6 col-lg-3">
            <div className={'contact-info__grid__element'}>
              <img src={'/assets/medicon/images/contact-info-3.png'} alt="e-mail" />
              <div className={'contact-info__grid__element__content'}>
                {emails && <ReactMarkdown
                  skipHtml={false}
                  escapeHtml={false}
                  source={emails}
                />}
              </div>
            </div>
          </div>
          
          <div className="col-12 col-sm-6 col-lg-3">
            <div className={'contact-info__grid__element'}>
              <img src={'/assets/medicon/images/contact-info-4.png'} alt="ICO and DIC" />
              <div className={'contact-info__grid__element__content'}>
                {additional && <ReactMarkdown
                  skipHtml={false}
                  escapeHtml={false}
                  source={additional}
                />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;