import * as React from 'react';
import moment from 'moment';
import gql from 'graphql-tag';
import { urlize } from 'urlize';
import { Query } from 'react-apollo';

import Link from '@source/partials/Link';
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

const getWeekStructure = (week: LooseObject) => {
  let structuredWeek = [];
  let weekDays = Object.keys(week.days);
  
  weekDays.forEach(day => {
    let weekDay: LooseObject = {};

    weekDay.day = getDayOfWeek(day);

    if (week.days[day] && week.days[day].length > 0) {
      for (let i = 0; i < week.days[day].length; i++) {
        week.days[day].map((time, index) => {
          weekDay[index] = {
            note: time.note || '',
            time: `${time.from} - ${time.to}`, 
          };
        });
      }
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
          <div className="doctorSchedule" key={'1'}>
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
                            <p>{(item['0'] && item['0'].time) || ' - '}</p>
                            {item['0'] && item['0'].note && <p>{item['0'].note}</p>}
                          </td>
                          <td className={'circleCell'}>
                            <DividerCircles />
                          </td>
                          <td>
                            <p>{(item['1'] && item['1'].time) || ' - '}</p>
                            {item['1'] && item['1'].note && <p>{item['1'].note}</p>}
                          </td>
                          <td className={'circleCell'}>
                            <DividerCircles />
                          </td>
                          <td>
                            <p>{(item['2'] && item['2'].time) || ' - '}</p>
                            {item['2'] && item['2'].note && <p>{item['2'].note}</p>}
                          </td>
                          <td className={'circleCell'}>
                            <DividerCircles />
                          </td>
                          <td>
                            <p>{(item['3'] && item['3'].time) || ' - '}</p>
                            {item['3'] && item['3'].note && <p>{item['3'].note}</p>}
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
                            <td>
                              {(absence.fromDate && moment(absence.fromDate.date).format('DD-MM-YYYY')) || ''}
                            </td>
                            <td>
                              {(absence.toDate.date && moment(absence.toDate.date).format('DD-MM-YYYY')) || ''}
                            </td>
                            <td>
                              <Link dynamic={true} url={getAbsenceLink(data, absence.alternate)}>
                                {`${(absence.alternate && absence.alternate.firstName) || ''} 
                                ${(absence.alternate && absence.alternate.lastName) || ''}`}
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
