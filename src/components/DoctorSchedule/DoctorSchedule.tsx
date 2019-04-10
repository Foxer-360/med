import * as React from 'react';
import DividerCircles from '../DividerCircles';
import Link from '../../partials/Link';
import moment from 'moment';
import gql from 'graphql-tag';
import { urlize } from 'urlize';
import { Query } from 'react-apollo';

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

  if (from.isSameOrAfter(moment(min, 'HH:mm')) && to.isSameOrBefore(moment(max, 'HH:mm'))) {
    return true;
  } else {
    return false;
  }
};

const categorizeTimeSlot = (from, to) => {
  if (withinTime(from, to, '00:00', '09:30')) {
    return 'morning';
  }
  if (withinTime(from, to, '10:00', '12:00')) {
    return 'noon';
  }
  if (withinTime(from, to, '12:00', '15:00')) {
    return 'afternoon';
  }
  if (withinTime(from, to, '15:00', '00:00')) {
    return 'lateAfternoon';
  } else {
    return null;
  }
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

  return structuredWeek;
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
