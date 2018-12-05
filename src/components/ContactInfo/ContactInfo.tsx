import * as React from 'react';

export interface ContactInfoProps {}

const ContactInfo = (props: ContactInfoProps) => {
  return (
    <div className={'contact-info'}>
      <div className={'container'}>
        <div className={'grid contact-info__grid'}>
          
          <div className={'grid contact-info__grid__element'}>
            <img src="/assets/medicon/images/contact-info-1.png" alt="address"/>
            <div>
              <p>MEDICON a.s. Antala Staška 1670/80 140 00 Praha 4</p>
            </div>
          </div>
          <div className={'grid contact-info__grid__element'}>
            <img src="/assets/medicon/images/contact-info-2.png" alt="phone number"/>
            <div>
              <p>tel.: +420 261 006 111</p>
              <p>fax: +420 261 006 210</p>
            </div>
          </div>
          <div className={'grid contact-info__grid__element'}>
            <img src="/assets/medicon/images/contact-info-3.png" alt="e-mail"/>
            <div>
              <p>info@mediconas.cz</p>
            </div>
          </div>
          <div className={'grid contact-info__grid__element'}>
            <img src="/assets/medicon/images/contact-info-4.png" alt="ICO and DIC"/>
            <div>
              <p>IČO: 284 63 293</p>
              <p>DIČ: CZ 284 63 293</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactInfo;