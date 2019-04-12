import * as React from 'react';
import moment from 'moment';
import gql from 'graphql-tag';
import { urlize } from 'urlize';
import { Query } from 'react-apollo';
import { cloneDeep } from 'lodash';

import Link from '../../partials/Link';
import DividerCircles from '../DividerCircles';

const GET_CONTEXT = gql`
  {
    languageData @client
    pageData @client
    websiteData @client
    languagesData @client
    navigationsData @client
  }
`;

export interface DoctorScheduleProps {
  data: {
    schedule: LooseObject;
    oddWeekTitle: String;
    evenWeekTitle: String;
    regularWeekTitle: String;
    absences: LooseObject[];
  };
}

const getDayOfWeek = day => {
  switch (day) {
    case 'mo':
      return 'pondělí';

    case 'tu':
      return 'úterý';

    case 'we':
      return 'středa';

    case 'th':
      return 'čtvrtek';

    case 'fr':
      return 'pátek';

    case 'st':
      return 'sobota';

    case 'su':
      return 'neděle';

    default:
      return 'neděle';
  }
};

const withinTime = (from, to, min, max) => {
  from = moment(from, 'HH:mm');
  to = moment(to, 'HH:mm');
  min = moment(min, 'HH:mm');
  max = moment(max, 'HH:mm');

  if (from.isBetween(min, max) && to.isBetween(min, max)) {
    return true;
  } else { return false; }
};

const categorizeTimeSlot = (from, to) => {
  if (withinTime(from, to, '00:00', '10:00')) {
    return 'morning';
  }
  if (withinTime(from, to, '10:01', '12:00')) {
    return 'noon';
  }
  if (withinTime(from, to, '12:01', '15:00')) {
    return 'afternoon';
  }
  if (withinTime(from, to, '15:01', '00:00')) {
    return 'lateAfternoon';
  }

  if (withinTime(from, to, '00:00', '12:01')) {
    return 'morningAndNoon';
  } 
  if (withinTime(from, to, '00:00', '15:01')) {
    return 'morningAndNoonAndAfternoon';
  }
  if (withinTime(from, to, '10:01', '15:01')) {
    return 'noonAndAfternon';
  }
  if (withinTime(from, to, '10:01', '23:59')) {
    return 'noonAndAfternonAndLateAfternoon';
  }
  if (withinTime(from, to, '12:01', '23:59')) {
    return 'afternoonAndLateAfternoon';
  } 
  
  return null;
};

const getWeekStructure = (week: LooseObject) => {
  let structuredWeek = [];
  
  let weekDays = Object.keys(week.days);
  
  weekDays.forEach(day => {
    let weekDay: LooseObject = {};

    weekDay.day = getDayOfWeek(day);

    if (week.days[day] && week.days[day].length > 0) {
      week.days[day].forEach(time => {
        let timeSlot = categorizeTimeSlot(time.from, time.to);

        if (timeSlot) {
          weekDay[categorizeTimeSlot(time.from, time.to) + 'Hours'] = {
            description: time.note || '',
            time: `${time.from} - ${time.to}`,
          };
        }
      });
    }

    structuredWeek.push(weekDay);
  });

  return splitSchedule(structuredWeek);
};

const splitSchedule = (week: LooseObject) => {
  let result = [];

  week.forEach(day => {
    let weekDay: LooseObject = {};

    weekDay = cloneDeep(day);

    // FIRST, SECOND COL
    if (day.morningAndNoonHours) {
      weekDay.morningHours = {
        description: day.morningAndNoonHours.time.note || '',
        time: day.morningAndNoonHours.time.slice(0, 8) + '10:00'
      };
      weekDay.noonHours = {
        description: day.morningAndNoonHours.time.note || '',
        time: '10:00 - ' + day.morningAndNoonHours.time.slice(-5)
      };
    }

    // FIRST, SECOND, THIRD COL
    if (day.morningAndNoonAndAfternoonHours) {
      weekDay.morningHours = {
        description: day.morningAndNoonAndAfternoonHours.time.note || '',
        time: day.morningAndNoonAndAfternoonHours.time.slice(0, 8) + '10:00'
      };
      weekDay.noonHours = {
        description: day.morningAndNoonAndAfternoonHours.time.note || '',
        time: '10:00 - 12:00'
      };
      weekDay.afternoonHours = {
        description: day.morningAndNoonAndAfternoonHours.time.note || '',
        time: '12:00 - ' + day.morningAndNoonAndAfternoonHours.time.slice(-5)
      };
    }

    // SECOND, THIRD COL
    if (day.noonAndAfternonHours) {
      weekDay.noonHours = {
        description: day.noonAndAfternonHours.time.note || '',
        time: day.noonAndAfternonHours.time.slice(0, 8) + '12:00'
      };
      weekDay.afternoonHours = {
        description: day.noonAndAfternonHours.time.note || '',
        time: '12:00 - ' + day.noonAndAfternonHours.time.slice(-5)
      };
    }

    // SECOND, THIRD, FOURTH COL
    if (day.noonAndAfternonAndLateAfternoonHours) {
      weekDay.noonHours = {
        description: day.noonAndAfternonAndLateAfternoonHours.time.note || '',
        time: day.noonAndAfternonAndLateAfternoonHours.time.slice(0, 8) + '12:00'
      };
      weekDay.afternoonHours = {
        description: day.noonAndAfternonAndLateAfternoonHours.time.note || '',
        time: '12:00 - 15:00'
      };
      weekDay.lateAfternoonHours = {
        description: day.noonAndAfternonAndLateAfternoonHours.time.note || '',
        time: '15:00 - ' + day.noonAndAfternonAndLateAfternoonHours.time.slice(-5)
      };
    }

    // THIRD, FOURHT COL
    if (day.afternoonAndLateAfternoonHours) {
      weekDay.afternoonHours = {
        description: day.afternoonAndLateAfternoonHours.time.note || '',
        time: day.afternoonAndLateAfternoonHours.time.slice(0, 8) + '15:00'
      };
      weekDay.lateAfternoonHours = {
        description: day.afternoonAndLateAfternoonHours.time.note || '',
        time: '15:00 - ' + day.afternoonAndLateAfternoonHours.time.slice(-5)
      };
    }

    result.push(weekDay);
  });
  
  return result;
};
 
const getScheduleTitle = (regularity, oddWeekTitle, evenWeekTitle, regularWeekTitle) => {
  if (regularity === 'regular' && regularWeekTitle) {
    return regularWeekTitle;
  }
  if (regularity === 'odd' && oddWeekTitle) {
    return oddWeekTitle;
  }
  if (regularity === 'even' && evenWeekTitle) {
    return evenWeekTitle;
  }

  return null;
};

const getAbsenceLink = (data, alternate) => {
  if (alternate && data) {
    const { firstName, lastName } = alternate;

    let doctorSlug = urlize(`${firstName}-${lastName}`);

    let link = `/${data.websiteData && data.websiteData.title.toLowerCase()}/${data.languageData &&
      data.languageData.code}/${doctorSlug}`;

    return link;
  }

  return null;
};

const DoctorSchedule = (props: DoctorScheduleProps) => {
  const { schedule, oddWeekTitle, evenWeekTitle, regularWeekTitle, absences } = props.data;

  return (
    <section className={'container doctorScheduleSection'}>
      {schedule &&
        schedule.weeks &&
        schedule.weeks.map((week, i) => (
          <div className="doctorSchedule" key={i}>
            <div className={'doctorSchedule__title'}>
              <h4>{getScheduleTitle(week.regularity, oddWeekTitle, evenWeekTitle, regularWeekTitle)}</h4>
            </div>
            <table>
              <tbody>
                {week &&
                  getWeekStructure(week).map((item, index) => {
                    if (item.day === 'sobota' || item.day === 'neděle') { return ''; }
                    
                    return (
                      <>
                        <tr className={'mobileHeading'}>
                          <td colSpan={7}>{item.day}</td>
                        </tr>

                        <tr className={'normalRow'}>
                          <td>{item.day}</td>
                          <td>
                            <p>{(item.morningHours && item.morningHours.time) || ' - '}</p>
                            {item.morningHours && item.morningHours.description && (
                              <p>{item.morningHours.description}</p>
                            )}
                          </td>
                          <td className={'circleCell'}>
                            <DividerCircles />
                          </td>
                          <td>
                            <p>{(item.noonHours && item.noonHours.time) || ' - '}</p>
                            {item.noonHours && item.noonHours.description && <p>{item.noonHours.description}</p>}
                          </td>
                          <td className={'circleCell'}>
                            <DividerCircles />
                          </td>
                          <td>
                            <p>{(item.afternoonHours && item.afternoonHours.time) || ' - '}</p>
                            {item.afternoonHours && item.afternoonHours.description && (
                              <p>{item.afternoonHours.description}</p>
                            )}
                          </td>
                          <td className={'circleCell'}>
                            <DividerCircles />
                          </td>
                          <td>
                            <p>{(item.lateAfternoonHours && item.lateAfternoonHours.time) || ' - '}</p>
                            {item.lateAfternoonHours && item.lateAfternoonHours.description && (
                              <p>{item.lateAfternoonHours.description}</p>
                            )}
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        ))}

      <Query query={GET_CONTEXT}>
        {({ data }) => (
          <>
            {absences && Array.isArray(absences) && absences.length > 0 && (
              <div className={'absences'}>
                <h4>Nepřítomnost</h4>
                <table>
                  <thead>
                    <tr>
                      <td>Od</td>
                      <td>Do</td>
                      <td>Zastupuje</td>
                    </tr>
                  </thead>
                  <tbody>
                    {absences.map((absence, i) => {
                      if (absence) {
                        return (
                          <tr key={i}>
                            <td>{(absence.fromDate && moment(absence.fromDate.date).format('DD-MM-YYYY')) || ''}</td>
                            <td>{(absence.toDate.date && moment(absence.toDate.date).format('DD-MM-YYYY')) || ''}</td>
                            <td>
                              <Link dynamic={true} url={getAbsenceLink(data, absence.alternate)}>
                                {`${(absence.alternate && absence.alternate.firstName) || ''} ${(absence.alternate &&
                                  absence.alternate.lastName) ||
                                  ''}`}
                              </Link>
                            </td>
                          </tr>
                        );
                      }
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </Query>
    </section>
  );
};

export default DoctorSchedule;
