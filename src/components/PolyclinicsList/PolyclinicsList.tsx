import * as React from 'react';
import PcTitle from './components/title';
import Button from '../../partials/Button';
import Media from '../../partials/Media';
import ReactMarkdown from 'react-markdown';
import List from '../List';

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
  url?: LooseObject;
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
      activeCard: null,
    };
  }

  filterServices = (services, index) => {
    services = services && services.length > 0 && services
      .split('\n')
      .filter((service, i) => i <= 8)
      .join('\n') || "";

    return services;
  }

  toggleDisplayServices = (index: number) => {
    this.setState({
      displayAllServices: index === null ?  false : true,
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
                      <div className={'pcitem__img'}>{clinic.image && <Media data={clinic.image} type="image" />}</div>

                      <div className={'pcitem__info'}>
                        <PcTitle name={clinic.name} />

                        <div className="pcitem__info__details">
                          <div className="pcitem__info__details__item">
                            <img src="../../../assets/medicon/images/geoIcon.svg" alt="Medicon GeoLocation Icon" />

                            <p>
                              {clinic.address && clinic.address} <br />
                              {clinic.district && clinic.district}
                            </p>
                          </div>

                          <div className="pcitem__info__details__item">
                            <img src="../../../assets/medicon/images/phoneIcon.svg" alt="Medicon Phone Icon" />
                            {clinic.phone && <p>{clinic.phone}</p>}
                          </div>

                          <div className="pcitem__info__details__item">
                            {clinic.transportImage && <Media data={clinic.transportImage} type="image" />}

                            {!clinic.transportImage && <img src="../../../assets/medicon/images/metro2.png" alt="" />}

                            <p>
                              {clinic.transport && clinic.transport}
                              <br />
                              {clinic.station && clinic.station}
                            </p>
                          </div>
                        </div>

                        <div className={'pcitem__info__list'}>
                          <ReactMarkdown
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

                          <div
                            onClick={() => this.toggleDisplayServices(index === this.state.activeCard ? null : index)}
                          >  
                            {this.state.displayAllServices && index === this.state.activeCard
                              ? 'Skrýt'
                              : 'Další odbornosti'}{' '}
                            <span className="arrow" />
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
                            <Button classes="btn btn--blueBorder" url={clinic.url && clinic.url}>
                              vice info
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
