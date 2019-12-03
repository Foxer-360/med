import * as React from 'react';
import * as ReactMarkdown from 'react-markdown/with-html';

import List from '../List';
import Media from '../../partials/Media';
import PcTitle from './components/title';
import Button from '../../partials/Button';
import Link from '../../partials/Link';

interface Clinic {
  name: string;
  image: LooseObject;
  description: string;
  address: string;
  addressUrl: string;
  district: string;
  phone: string;
  transport: string;
  transportUrl: string;
  transportImage: LooseObject;
  station: string;
  services: string;
  url?: LooseObject;
  clinic?: string;
  clinicColor?: string;
}

export interface PolyclinicsListProps {
  languageCode?: string;
  data: {
    clinics: Clinic[];
  };
}

export interface PolyclinicsListState {
  displayAllServices: boolean;
  activeCard: number;
}

class PolyclinicsList extends React.Component<PolyclinicsListProps, PolyclinicsListState> {
  constructor(props: PolyclinicsListProps) {
    super(props);

    this.state = {
      displayAllServices: false,
      activeCard: null
    };
  }

  filterServices = (services, index) => {
    services = services && services.length > 0 && services
      .split('\n')
      .filter((service, i) => i <= 8)
      .join('\n') || '';

    return services;
  }

  getServicesLength = (services) => services.split('\n').length;

  toggleDisplayServices = (index: number) => {
    this.setState({
      displayAllServices: index === null ? false : true,
      activeCard: index,
    });
  }

  render() {
    const { clinics } = this.props.data;

    return (
      <section className="polyclinicsList">
        <List data={clinics}>
          {({ data }) =>
            data &&
            data.map((clinic, index) => (
              <div className={'pcitem'} key={index}>
                <div className="fullWidthContainer">
                  <div className="container">
                    <div className="pcitem__wrapper">
                      <div className={'pcitem__img'}>
                        {clinic.image && <Media data={clinic.image} type="image" width={'362'} height={'420'}  />}
                      </div>

                      <div className={'pcitem__info'}>
                        <PcTitle name={clinic.name} />

                        <div className="pcitem__info__details">
                          <div className="pcitem__info__details__item">
                            <img src="../../../assets/medicon/images/geoIcon.svg" alt="Medicon GeoLocation Icon" />

                            <div>
                                {clinic.addressUrl ? 
                              <p>
                                <a href={clinic.addressUrl} target="_blank">
                                {clinic.address && clinic.address} <br />
                                {clinic.district && clinic.district}
                                {clinic.district && clinic.district}</a>
                              </p>
                                :
                              <p>
                                {clinic.address && clinic.address} <br />
                                {clinic.district && clinic.district}
                              </p>}

                              {clinic.clinic &&
                                <p
                                  style={
                                    clinic.clinicColor ?
                                    { color: `${clinic.clinicColor}`} :
                                    {}
                                  }
                                >{clinic.clinic}
                                </p>}
                            </div>
                          </div>

                          <div className="pcitem__info__details__item">
                            <img src="../../../assets/medicon/images/phoneIcon.svg" alt="Medicon Phone Icon" />
                            {clinic.phone && 
                            <p><a href={`callto:${clinic.phone.replace(/ /g,'')}`}>{clinic.phone}</a></p>}
                          </div>

                          <div className="pcitem__info__details__item">
                            {clinic.transportImage && 
                            <Media data={clinic.transportImage} type="image" width={'42'} height={'50'} />}

                            {!clinic.transportImage && <img src="../../../assets/medicon/images/metro2.png" alt="" />}

                            {clinic.transportUrl ?
                            <p>
                              <a href={clinic.transportUrl} target="_blank">
                              {clinic.transport && clinic.transport}
                              <br />
                              {clinic.station && clinic.station}
                              </a>
                            </p>
                            :
                            <p>
                              {clinic.transport && clinic.transport}
                              <br />
                              {clinic.station && clinic.station}
                            </p>}
                          </div>
                        </div>

                        <div className={'pcitem__info__list'}>
                          <ReactMarkdown
                            skipHtml={false}
                            escapeHtml={false}
                            source={
                              this.state.displayAllServices && index === this.state.activeCard
                                ? clinic.services
                                : this.filterServices(clinic.services, index)
                            }
                            renderers={{
                              paragraph: (rProps: any) => {
                                return <ul>{rProps.children}</ul>;
                              },
                            }}
                          />

                          {this.getServicesLength(clinic.services) > 9 &&
                            <div
                              className={'pcitem__info__list__showMore'}
                              onClick={() => this.toggleDisplayServices(index === this.state.activeCard ? null : index)}
                            >
                              {this.state.displayAllServices && index === this.state.activeCard
                                ? 'Skrýt'
                                : 'Další odbornosti'}{' '}
                              <span className="arrow" />
                            </div>}
                        </div>

                        <div className={'pcitem__info__desc'}>
                          <div className={'pcitem__info__desc__txt'}>
                            <ReactMarkdown
                              skipHtml={false}
                              escapeHtml={false}
                              source={clinic.description}
                              renderers={{
                                paragraph: (rProps: any) => <p>{rProps.children}</p>,
                              }}
                            />
                          </div>

                          <div className={'pcitem__info__btnHolder'}>
                            <Button classes="btn btn--blueBorder" url={clinic.url && clinic.url}>
                              více informací
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </List>
      </section>
    );
  }
}

export default PolyclinicsList;
