import * as React from 'react';
import PcTitle from './components/title';
import Button from '../../partials/Button';
import Media from '../../partials/Media';
import ReactMarkdown from 'react-markdown';

interface Clinic {
  name: string;
  image: LooseObject;
  description: string;
  address: string;
  district: string;
  phone: string;
  transport: string;
  transportImage: LooseObject;
  station: string;
  services: string;
}

interface PolyclinicsListProps {
  data: {
    clinics: Clinic[];
  };
}

const PolyclinicsList = (props: PolyclinicsListProps) => {
  const { clinics } = props.data;

  return (
    <section className="polyclinicsList">
      {clinics &&
        clinics.map((clinic, index) => (
          <div className={'pcitem'} key={index}>
            <div className="fullWidthContainer">
              <div className="container">
                <div className="pcitem__wrapper">
                  <div className={'pcitem__img'}>{clinic.image && <Media data={clinic.image} type="image" />}</div>

                  <div className={'pcitem__info'}>
                    <PcTitle name={clinic.name} />

                    <div className="pcitem__info__details">
                      <div className="pcitem__info__details__item">
                        <img src="../../../assets/medicon/images/geoIcon.svg" alt="Medicon GeoLocation Icon" />

                        <p>
                          {clinic.address} <br />
                          {clinic.district}
                        </p>
                      </div>

                      <div className="pcitem__info__details__item">
                        <img src="../../../assets/medicon/images/phoneIcon.svg" alt="Medicon Phone Icon" />
                        <p>{clinic.phone}</p>
                      </div>

                      <div className="pcitem__info__details__item">
                        {clinic.transportImage && <Media data={clinic.transportImage} type="image" />}

                        {!clinic.transportImage && <img src="../../../assets/medicon/images/metro2.png" alt="" />}

                        <p>
                          {clinic.transport}
                          <br />
                          {clinic.station}
                        </p>
                      </div>
                    </div>

                    <div className={'pcitem__info__list'}>
                      <ReactMarkdown
                        source={clinic.services}
                        renderers={{
                          paragraph: (rProps: any) => <ul>{rProps.children}</ul>,
                        }}
                      />

                      <div>
                        Další odbornosti <span className="arrow" />
                      </div>
                    </div>

                    <div className={'pcitem__info__desc'}>
                      <div className={'pcitem__info__desc__txt'}>
                        <ReactMarkdown
                          source={clinic.description}
                          renderers={{
                            paragraph: (rProps: any) => <p>{rProps.children}</p>,
                          }}
                        />
                      </div>

                      <div className={'pcitem__info__btnHolder'}>
                        <Button classes="btn btn--blueBorder">vice info</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default PolyclinicsList;
