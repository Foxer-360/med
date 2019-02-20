import * as React from 'react';
import Button from '../../../../partials/Button';
import Media from '../../../../partials/Media';
import Link from '@source/partials/Link';

interface MapBoxProps {
  close: () => void;
  clinicData?: LooseObject;
}

const MapBox: React.SFC<MapBoxProps> = props => {
  const { title, address, city, phone, image, ambulanceLink } = props.clinicData;

  return (
      <div className={'mapBox'}>
        <div className={`mapBox__close ${!(image && image.filename) ? 'mapBox__close--white' : ''}`} onClick={() => props.close()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <g>
              <path d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z" />
              <path d="M35.707 16.293a.999.999 0 0 0-1.414 0L26 24.586l-8.293-8.293a.999.999 0 1 0-1.414 1.414L24.586 26l-8.293 8.293a.999.999 0 1 0 1.414 1.414L26 27.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L27.414 26l8.293-8.293a.999.999 0 0 0 0-1.414z" />
            </g>
          </svg>
        </div>

        {console.log('%c Emilio:as ', 'background: #222; color: #83FFFF', props)}
        {image && image.filename && <Media type="image" data={image} />}

        <div className={'pcTitle'}>
          <img src="/assets/medicon/images/logo.svg" alt="Medicon Logo" />

          <div className={'pcTitle__title'}>
            <h3>Poliklinika</h3>
            <div className={'pcTitle__title__subtitle'}>
              <span>{title}</span>

              <span className={'pcTitle__title__subtitle__circles'}>
                <div />
                <div />
                <div />
                <div />  
                <div />
                <div />
              </span>
            </div>
          </div>
        </div>

        <div className={'mapBox__contacts'}>
          <div className={'mapBox__contacts__item'}>
            <img src={'/assets/medicon/images/geoIcon.svg'} />

            <div>
              <p>{address}</p>
              <p>{city}</p>
            </div>
          </div>

          <div className={'mapBox__contacts__item'}>
            <img src={'/assets/medicon/images/phoneIcon.svg'} />
            <div>
              <p>{phone}</p>
            </div>
          </div>
        </div>
        <Link {...ambulanceLink}>
          <div className={'mapBox__buttons'}>
            <Button classes="btn--small btn--blueBkg" noArrow={true}>
              ambulance
            </Button>
            <Button classes="btn--small btn--blueBorder">kuddy k nam</Button>
          </div>
        </Link>
      </div>

  );
};

export default MapBox;
