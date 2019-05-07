import * as React from 'react';
import moment from 'moment';
import debounce from 'lodash/debounce';

import SvgIcon from '@source/partials/SvgIcon';
import List from '@source/components/List';
import Link from '@source/partials/Link';

export interface SearchBarProps {
  placeholder: string;
  barColor: string;
  doctorsLink?: LooseObject;
  blogSearchResults?: LooseObject;
}

export interface SearchBarState {
  focused: boolean;
  query: string;
}

const doctorSearchResultsTemplate: LooseObject = {
  datasourceId: 'cjrkew3eu02gp0d71xoi0i5em',
  data: {
    name: '%doctorPersonalInformation,firstName% %doctorPersonalInformation,lastName% ',
    speciality: '%doctorPersonalInformation,expertises,0,name% ',
    clinic: '%doctorPersonalInformation,polyclinic,name% ',
    workingHours: '%doctorPersonalInformation,workingHours% ',
    link: {
      url: '/medicon/cs/ds:doctor',
      pageId: 'cjoy8qfdl001b0845fwgt2200',
      urlNewWindow: false,
    },
  },
  filters: [],
};

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  // tslint:disable-next-line:no-any
  public searchBar: any;
  // tslint:disable-next-line:no-any
  public input: any;

  constructor(props: SearchBarProps) {
    super(props);
    this.searchBar = React.createRef();

    this.state = { focused: false, query: '' };

    this.handleClick = this.handleClick.bind(this);
    this.input = React.createRef();
    this.changeSearchQuery = debounce(this.changeSearchQuery, 300).bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleFocus = () => {
    this.setState({
      focused: !this.state.focused,
    });
  }

  // tslint:disable-next-line:typedef
  public changeSearchQuery(query) {
    this.setState({
      query,
    });
  }

  handleClick(e: LooseObject) {
    if (this.searchBar.current && this.searchBar && this.searchBar.current.contains(e.target)) {
      return;
    } else {
      this.changeSearchQuery('');
    }
  }

  public render() {
    const { placeholder, barColor } = this.props;
    let doctorSearchResults = { ...doctorSearchResultsTemplate };

    if (this.props.doctorsLink) {
      doctorSearchResults = {
        ...doctorSearchResults,
        data: {
          ...doctorSearchResults.data,
          link: this.props.doctorsLink,
        },
      };
    }
    return (
      <div
        className={`searchBar ${this.state.focused ? 'searchBar--focused' : ''} searchBar--${barColor}`}
        ref={this.searchBar}
      >
        <div className={'searchBar__input'}>
          <input
            type="text"
            placeholder={placeholder}
            onFocus={() => this.handleFocus()}
            onBlur={() => this.handleFocus()}
            onChange={e => this.changeSearchQuery(e.target.value)}
            ref={this.input}
          />
          <SvgIcon name={'search'} type={barColor} />
        </div>

        <div className={`searchBar__bar`} />
        {this.state.query.length > 2 &&
          <div className={`searchBarResults ${this.state.query.length > 2 ? 'active' : ''}`}>
            <List data={doctorSearchResults} searchedText={this.state.query}>
              {({ data }) => {
                if (data.length > 0) {
                  return (
                    <ul className={'searchBarResults__doctors'}>
                      {data
                        .map(
                          (item): LooseObject => {
                            let workingHours = null;
                            try {
                              workingHours = JSON.parse(item.workingHours);
                            } catch (e) {
                              console.log('error', e);
                            }

                            return {
                              ...item,
                              isDoctorActive: this.isDoctorActive(workingHours),
                            };
                          }
                        )
                        .sort((a, b) => (a.isDoctorActive === true ? -1 : 1))
                        .map((doctor, i) => {
                          return (
                            <li key={i} className={doctor.isDoctorActive ? 'active' : ''}>
                              <Link {...doctor.link}>
                                <span>
                                  <p>
                                    <span>{doctor.name}</span>
                                    <span 
                                      style={
                                        doctor.isDoctorActive ? 
                                        {color: '#31a031'} : 
                                        {color: '#c23636'} 
                                      }
                                    >
                                      {doctor.isDoctorActive ? 'ordinuje' : 'Dnes již neordinuje'}
                                    </span>
                                  </p>
                                  <p>{doctor.speciality}</p>
                                </span>
                                <span>{doctor.clinic}</span>
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  );
                } else {
                  return (
                    <div className={'searchBarResults__noResults'}>Bohužel jsme nenašli žádné výsledeky.</div>
                  );
                }
              }}
            </List>

            {this.props.blogSearchResults && this.state.query.length > 2 && (
              <List data={this.props.blogSearchResults} searchedText={this.state.query}>
                {({ data }) => {
                  if (data.length > 0) {
                    console.log('HERE!!!!!!');
                    return (
                      <ul className={'searchBarResults__blog'}>
                        <label>Možná jste hledali:</label>

                        {data.map((blogItem, i) => (
                          <li key={i}>
                            <Link {...blogItem.link}>
                              <div>
                                <h4>{blogItem.title}</h4>
                                <p>{blogItem.perex}</p>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    );
                  } else {
                    return (<></>);
                  }
                }}
              </List>
            )}
        </div>
      }
      </div>
    );
  }

  public getWeekDayKey() {
    let day;

    switch (moment().isoWeekday()) {
      case 1:
        day = 'mo';
        break;
      case 2:
        day = 'tu';
        break;
      case 3:
        day = 'we';
        break;
      case 4:
        day = 'th';
        break;
      case 5:
        day = 'fr';
        break;
      case 6:
        day = 'st';
        break;
      case 7:
        day = 'su';
        break;
      default:
        day = 'mo';
        break;
    }

    return day;
  }

  public isDoctorActive(workingHours: LooseObject) {
    const weekDayKey = this.getWeekDayKey();

    if (
      workingHours &&
      workingHours.weeks &&
      workingHours.weeks[0] &&
      workingHours.weeks[0].days &&
      workingHours.weeks[0].days[weekDayKey] &&
      workingHours.weeks[0].days[weekDayKey] &&
      workingHours.weeks[0].days[weekDayKey] &&
      workingHours.weeks[0].days[weekDayKey].length > 0 &&
      workingHours.weeks[0].days[weekDayKey].length > 0
    ) {
      return workingHours.weeks[0].days[weekDayKey].some(doctorWorkingHours => {
        const regex = /^\s*([0-9]{2}):([0-9]{2})\s*$/;
        const from = regex.exec(doctorWorkingHours.from);
        const to = regex.exec(doctorWorkingHours.to);

        if (from && from[1] && from[2] && to && to[1] && to[2]) {
          const startOfShift = moment()
            .startOf('day')
            .add(from[1], 'hours')
            .add(from[2], 'minutes');
          const endOfShift = moment()
            .startOf('day')
            .add(to[1], 'hours')
            .add(to[2], 'minutes');
          const now = moment();

          if (now.isSameOrBefore(endOfShift) && now.isSameOrAfter(startOfShift)) {
            return true;
          }
        }
        return false;
      });
    }

    return false;
  }
}

export default SearchBar;
