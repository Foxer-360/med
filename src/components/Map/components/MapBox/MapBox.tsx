import * as React from 'react';
import Button from '../../../../partials/Button';

interface MapBoxProps {}

const MapBox: React.SFC<MapBoxProps> = props => {
  return (
    <div className={'mapBox'}>
      <img src={'/assets/medicon/images/mapbox.png'} />

      <div className={'pcTitle'}>
        <img src="/assets/medicon/images/logo.svg" alt="Medicon Logo" />

        <div className={'pcTitle__title'}>
          <h3>Poliklinika</h3>
          <div className={'pcTitle__title__subtitle'}>
            <span>Budejovicka</span>

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
            <p>Sokolovská 304 </p>
            <p> 190 00 Praha 9</p>
          </div>
        </div>

        <div className={'mapBox__contacts__item'}>
          <img src={'/assets/medicon/images/phone.png'} />
          <div>
            <p>+420 266 006 211</p>
          </div>
        </div>
      </div>

      <div className={'mapBox__buttons'}>
        <Button classes="btn--small btn--blueBkg" noArrow={true}>
          ambulance
        </Button>
        <Button classes="btn--small btn--blueBorder">kuddy k nam</Button>
      </div>
    </div>
  );
};

export default MapBox;
