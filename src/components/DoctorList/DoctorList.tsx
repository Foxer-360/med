import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import List from '../List';
import Link from '../../partials/Link';
import Media from '../../partials/Media';
import Select from '../../partials/Select';
import Button from '../../partials/Button';
import * as removeAccents from 'remove-accents';

interface Doctors {
  name: string;
  field: string;
  clinicName: string;
  image: LooseObject;
  clinicUrl: LooseObject;
  doctorUrl: LooseObject;
}
export interface DoctorListProps {
  languageCode?: string;
  data: {
    title: string;
    doctors: Doctors[];
    excludedDoctor: string;
  };
}

export interface DoctorListState {
  numberOfPage: number;
  filter: string;
}

class DoctorList extends React.Component<RouteComponentProps<{}> & DoctorListProps, DoctorListState> {
  constructor(props: RouteComponentProps<{}> & DoctorListProps) {
    super(props);

    this.state = {
      numberOfPage: 1,
      filter: ''
    };

    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  componentDidMount() {
    const { search } = this.props.location;
    if (search.length > 0) {
      this.setFilterBySearchParam(search.split('=')[1]);
    }
  }

  handleChangeSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const { history } = this.props;
    const slug = removeAccents(event.target.value).toLowerCase().replace(/[\W_]+/g, '-');
    this.setFilterBySearchParam(slug);    
  }

  getCurrentPolyclinic(current, items: Array<LooseObject>) {
    const polyclinics = this.getUniquePolyclinicNames(items);
    if (Array.isArray(polyclinics) && current.length > 0) {
      const polyclinic = polyclinics.find((pol) => pol.indexOf(current) > -1) || '';
      return polyclinic;
    }

    return undefined;
  }

  getUniquePolyclinicNames(items: LooseObject<any>[]) {
    const names = items.map(item => item.clinicName
      .replace(/Poliklinika /g, '')
      .trim()
      .split(',')
      );
    
    const flatAndSplitNames = [...names
      .toString()
      .split(',')];

    const polyclinicNames = flatAndSplitNames.map(item => 'Poliklinika '.concat(item.trim()));

    const uniquePolyclinicNames = [...new Set(polyclinicNames)];

    return uniquePolyclinicNames;
  }

  setFilterBySearchParam(param: string) {
    switch (true) {
      case /(vysocany)/.test(param):
        this.setState({ filter: 'Vysočany' });
        break;
      case /(benesov)/.test(param):
        this.setState({ filter: 'Benešov' });
        break;
      case /(budejovicka)/.test(param):
        this.setState({ filter: 'Budějovická' });
        break;
      case /(zeleny-pruh)/.test(param):
        this.setState({ filter: 'Zelený pruh' });
        break;
      case /holesovice/.test(param):
        this.setState({ filter: 'Holešovice' });
        break;
      case /(zahradni-mesto)/.test(param):
        this.setState({ filter: 'Zahradní Město' });
        break;
      default:
        this.setState({ filter: '' });
        break;
    }
  }

  render() {
    const { doctors, title, excludedDoctor } = this.props.data;
    
    return (
      <List
        data={doctors}
        searchedText={this.state.filter}
        exclude={{ key: 'name', value: excludedDoctor }}
        searchKeys={['clinicName']}
      >
        {({ getPage, allData }) => {
          const { items, lastPage, allItems } = getPage(this.state.numberOfPage, 'infinite', 6);
          return items && items.length > 0 ? (
            <section className={'doctorList'}>
              <div className={'container'}>
                {title && <h3>{title}</h3>}
                <Select
                  value={this.getCurrentPolyclinic(this.state.filter, allData)}
                  className={'hCenterBlock'}
                  onChange={this.handleChangeSelect}
                  defaultValue={'Všechny polikliniky'}
                  items={this.getUniquePolyclinicNames(allData)}
                />

                <div className="doctorList__wrapper">
                  {items &&
                    items.map((doctor, index) => {
                      return (
                        <div className={'doctorList__item'} key={index}>
                          <div className={'doctorList__item__img'}>
                            {(doctor.image && doctor.image.filename && 
                            <Media data={doctor.image} type="image" width={'190'} height={'190'} />) || (
                              <img
                                className="avatarImg"
                                src={'../../../assets/medicon/images/doctorIcon.svg'}
                                alt="Medicon Doctor Icon"
                              />
                            )}
                          </div>

                          <div className={'doctorList__item__info'}>
                            <h3>{doctor.name}</h3>
                            {doctor.field && <div className={'doctorList__item__info__description'}>
                              <div className={'doctorList__item__info__description--container'}>
                                <p>{doctor.field}</p>
                              </div>
                            </div>}
                            <p className={'doctorList__item__info--mobileField'}>{doctor.field}</p>
                            <Link {...doctor.clinicUrl} className={'doctorList__item__info__link'}>
                              {doctor.clinicName}
                            </Link>
                            {doctor.doctorUrl
                              && doctor.doctorUrl.url
                              && <Button classes="btn--blueBorder btn--small" url={doctor.doctorUrl}>
                                více informací
                              </Button>}
                          </div>
                        </div>
                      );
                    })}
                </div>
                {this.state.numberOfPage < lastPage && <div className="doctorList__btnHolder">
                  <button
                    className={'btn btn--blueBkg'}
                    onClick={() => this.setState({ numberOfPage: lastPage })}
                  >
                    zobrazit více
                  </button>
                </div>}
              </div>
            </section>
          ) : <></>;
        }}
      </List>
    );
  }
}

export default withRouter(DoctorList);