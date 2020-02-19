import * as React from 'react';
import * as moment from 'moment';

import List from '../../../List';
import Link from '../../../../partials/Link';

interface DoctorSearchResultsProps {
  query: string;
  searchResults?: LooseObject;
  searchKeys?: Array<string>;
  clearData: Function;
  checkDoctorResults: Function;
}

function isDoctorActive(workingHours: LooseObject, absence): Number {
  for (let item of absence) {
    if (item.fromDate && item.toDate
        && moment(item.fromDate.date) < moment()
        && moment(item.toDate.date) > moment()) {
      return 0;
    }
  }

  const weekDayKey = getWeekDayKey();
  if (
    workingHours &&
    workingHours.weeks &&
    workingHours.weeks[0] &&
    workingHours.weeks[0].days
  ) {
    if (!workingHours.weeks[0].days[weekDayKey] &&
      workingHours.weeks[0].days[weekDayKey].length > 0) {
      return -1;
    }

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
    }) ? 1 : 0;
  }

  return -1;
}

function getWeekDayKey() {
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

export default function DoctorSearchResults (props: DoctorSearchResultsProps) {
  const { searchResults, query, searchKeys, clearData, checkDoctorResults } = props;
  
  return (
    <List
      data={searchResults}
      searchedText={query}
      searchKeys={searchKeys}
    >
      {({ data }) => {
        if (data.length > 0) {
          checkDoctorResults(true);
          
          // const doctors = 
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
                    
                    let absence = null;
                    absence = JSON.parse(item.absence);

                    return {
                      ...item,
                      isDoctorActive: isDoctorActive(workingHours, absence),
                    };
                  }
                )
                .sort((a, b) => {
                  if (a.isDoctorActive === b.isDoctorActive) {
                    return a.name.localeCompare(b.name, 'cs', { sensitivity: 'base' });
                  }

                  return b.isDoctorActive - a.isDoctorActive;
                })
                .map((doctor, i) => {
                  return (
                    <li 
                      key={i} 
                      className={
                        ([-1, 1].includes(doctor.isDoctorActive))
                        ? 'active' : ''
                      }
                      onClick={() => clearData()}
                    >
                      <Link {...doctor.link}>
                        <span>
                          <p>
                            <span className={doctor.isDoctorActive === -1 ? 'noTimetable' : ''}>
                              {doctor.name} 
                            </span>

                            {doctor.isDoctorActive > -1 && 
                              <>
                                <span 
                                  style={
                                    doctor.isDoctorActive === 1
                                    ? {color: '#31a031'}
                                    : {color: '#c23636'}
                                  }
                                >
                                  {doctor.isDoctorActive === 1 ? 'ordinuje' : 'v tuto chvíli neordinuje'}
                                </span>
                              </>
                            }
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
          checkDoctorResults(false);
          return (<></>);
        }
      }}
    </List>
  );
}