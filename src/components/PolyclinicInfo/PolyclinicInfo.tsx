import * as React from 'react';
import * as ReactMarkdown from 'react-markdown/with-html';

import Link from '../../partials/Link';
import Media from '../../partials/Media';

export interface ContactsProps {
  data: {
    geo: string;
    clinic?: string;
    transport: string;
    clinicColor?: string;
    geoUrl?: LooseObject;
    transportUrl?: LooseObject;
    phone: string;
    transportImage: LooseObject;
  };
}

const PolyclinicInfo = (props: ContactsProps) => {
  const {
    geo,
    clinic,
    transport,
    clinicColor,
    geoUrl,
    transportUrl,
    phone,
    transportImage,
  } = props.data;

  return (
    <div className={'policlinicInfo'}>
      <div className="container">
        <div className="row policlinicInfo__list">

          <div className="col-12 col-lg-4">
            <div className={'policlinicInfo__item'}>
              <img src={'/assets/medicon/images/geo.svg'} alt="address" />
              <div className={'policlinicInfo__item--content'}>
                <p style={{ display: 'block' }}>{geo}</p>
                {clinic && <p style={clinicColor ? {color: `${clinicColor}`} : {}}>{clinic}</p>}
                {geoUrl && 
                  <Link
                    {...geoUrl} 
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      top: 0,
                      left: 0
                    }} 
                  />}
              </div>
            </div>  
          </div>
          <div className="col-12 col-lg-4">
            <div className={'policlinicInfo__item'}>
              <img src={'/assets/medicon/images/phone.svg'} alt="phone nubmer" />
              <p className={'policlinicInfo__item--content'}>
                {phone && <ReactMarkdown 
                  skipHtml={false}
                  escapeHtml={false}
                  source={phone}
                />}
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className={'policlinicInfo__item'}>
              {transportImage && <Media type={'image'} data={transportImage} width={'50'} height={'50'} />}
              <p className={'policlinicInfo__item--content'}>{transport}</p>
              {transportUrl && 
                <Link 
                  {...transportUrl} 
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0
                  }} 
                />}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PolyclinicInfo;