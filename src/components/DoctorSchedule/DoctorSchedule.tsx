import * as React from 'react';
import * as moment from 'moment';
import * as ReactMarkdown from 'react-markdown/with-html';
import gql from 'graphql-tag';
import { urlize } from 'urlize';
import { Query } from 'react-apollo';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import Link from '../../partials/Link';
import DividerCircles from '../DividerCircles';
import Highlight from '../Highlight';

const GET_CONTEXT = gql`
  {
    languageData @client
    pageData @client
    websiteData @client
    languagesData @client
    navigationsData @client
  }
`;

export interface DoctorScheduleProps extends RouteComponentProps {
  data: {
    schedule: LooseObject;
    oddWeekTitle: String;
    evenWeekTitle: String;
    regularWeekTitle: String;
    absences: LooseObject[];
    extraAbsenceSettings: string;
    doctor: string;
    defaultAbsenceMessage: string;
    doctorName: string;
    employmentFrom: string;
    phone: string;
    polyclinicSlug: string;
    expertiseSlug: string;
  };
  Helmet: Function;
  info: LooseObject;
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
    const { firstName, lastName, id } = alternate;
    
    let doctorSlug = urlize(`${firstName}-${lastName}-${id}`);

    let link = `/${data.languageData && data.languageData.code}/${doctorSlug}`;

    return link;
  }
  
  return null;
};

const getClinicLink = (polyclinic) => {
  return (
    <Query query={GET_CONTEXT}>
      {({ data }) => {
        return (
          polyclinic.url !== undefined ?
          <Link 
            url={`/${data.languageData && data.languageData.code}/${polyclinic.url}`}
            className={'doctorSchedule__title__link'}
          >
            poliklinika {polyclinic.name}
          </Link> :
          `poliklinika ${polyclinic.name}`
        );
      }}
    </Query>
  );
};

const highlightAbsence = (defaultAbsenceMessage, absences, absenceMessage) => {
  const props = {
    text: defaultAbsenceMessage || 'Dnes lékař neordinuje',
    description: null,
    urlTitle: Array.isArray(absenceMessage) ? absenceMessage[3] : null,
    url: Array.isArray(absenceMessage) ? { url: absenceMessage[4] } : null
  };

  for (let absence of absences) {
    if (absence.fromDate && absence.toDate
        && moment(absence.fromDate.date) < moment()
        && moment(absence.toDate.date) > moment()) {
      return (<Highlight data={props} />);
    }
    return null;
  }
};

const absenceSettings = (extraAbsenceSettings, doctor) => {
  if (extraAbsenceSettings) {
    let absenceDict = extraAbsenceSettings.split('\n');
    doctor = doctor.trim();
  
    for (let i = 0; i < absenceDict.length; i++) {
      absenceDict[i] = absenceDict[i].split(/(\d+\,\w+):(\[(.*)\]\((.*)\))/);
      if (absenceDict[i][1] === doctor) {
        return absenceDict[i];
      }
    }
  }
  return null;
};

const getPolyclinicPhone = (phones, doctor) => {
  const polyclinicPhones = phones.split(',').map(i => {
    const item = i.split(':');
    return {'polyclinicName': item[0], 'polyclinicPhone': item[1]};
  });
  const phone = polyclinicPhones.find(i => {return i.polyclinicName.trim() === doctor.trim(); });

  return phone && phone.polyclinicPhone || null;
};

const futureEmployee = (date) => {
  return moment(date) > moment();
};

const hasSchedule = (schedule) => {
  return schedule && schedule.weeks && schedule.weeks
    .some(week => Object.keys(week.days)
      .some(day => week.days[day].length > 0)
    );
};

const getDoctorUrl = (polylinicsSlug, expertiseSlug, doctorSlug, data) => {
  let polyclinicUrl = polylinicsSlug ? `/${polylinicsSlug.split(',')[0]}` : '';
  let expertiseUrl = expertiseSlug ? `/${expertiseSlug.split(',')[0]}` : '';
  let doctorUrl = doctorSlug ? `/${doctorSlug}` : '';
  let url = `/${data.languageData && data.languageData.code}${polyclinicUrl}${expertiseUrl}${doctorUrl}`;
  
  return url;
};

const DoctorSchedule = (props: DoctorScheduleProps) => {
  const { schedule, oddWeekTitle, evenWeekTitle, regularWeekTitle, absences, extraAbsenceSettings,
    doctor, defaultAbsenceMessage, doctorName, employmentFrom, phone, polyclinicSlug, expertiseSlug } = props.data;

  const { Helmet } = props;

  const absenceMessage = absenceSettings(extraAbsenceSettings, doctor);

  let doctorUrl;

  React.useEffect(() => {
    if (props.info && props.location && props.location.pathname !== doctorUrl) {
      props.history.push(doctorUrl);
    }
  // tslint:disable-next-line: align
  }, [props.info]);

  return (
    <section className={'container doctorScheduleSection'}>
      <Query query={GET_CONTEXT}>
        {({ data }) => {
          doctorUrl = getDoctorUrl(
            polyclinicSlug,
            expertiseSlug,
            props.info 
              && props.info.datasources
              && props.info.datasources.doctor[0],
            data);
          return (
            <Helmet>
              <link rel="canonical" href={`https://mediconas.cz${doctorUrl}`} />
            </Helmet>
          );
        }}
      </Query>

      {futureEmployee(employmentFrom)
      && doctorName
      ? <Highlight
        data={{
          text: 
          <React.Fragment>
            {doctorName} začíná ordinovat od {moment(employmentFrom).format('DD.MM.YYYY')}.
            <br/>Již nyní se ale k němu můžete objednávat.
          </React.Fragment>,
          description: null, 
          urlTitle: null, 
          url: null
        }}
      />
      : ''}

      {Array.isArray(absences)
      && hasSchedule(schedule) 
      && highlightAbsence(defaultAbsenceMessage, absences, absenceMessage)}

      {schedule
      && schedule.weeks
      && schedule.weeks.map((week, i) => (
          <div className="doctorSchedule" key={week.regularity}>
            <div className={'doctorSchedule__title'}>
              <h4>{getScheduleTitle(week.regularity, oddWeekTitle, evenWeekTitle, regularWeekTitle)}
              {' - '}
              {getClinicLink(week.polyclinic)}
              </h4>
            </div>
            <table>
              <tbody>
                {week
                && getWeekStructure(week).map((item, j) => {
                    if (item.day === 'sobota' || item.day === 'neděle') { return null; }
                    
                    return (
                      <React.Fragment key={j}>
                        <tr key={j} className={'mobileHeading'}>
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
                      </React.Fragment>
                    );
                  })}
              </tbody>
            </table>
            {schedule.note && <b>{schedule.note}</b>}
            <br/>
            {phone
            && getPolyclinicPhone(phone, week.polyclinic.shortName)
            && <b>V urgentních případech volejte {getPolyclinicPhone(phone, week.polyclinic.shortName)}.</b>}
          </div>
        ))}

      {hasSchedule(schedule)
      && <Query query={GET_CONTEXT}>
        {({ data }) => {
          const nextMonthAbsences = Array.isArray(absences) && absences.filter((absence) => {
            return absence && moment(absence.fromDate.date) < moment().add(1, 'M') 
            && moment(absence.toDate.date) > moment();
          })
          return (<>
            {nextMonthAbsences && Array.isArray(nextMonthAbsences) && nextMonthAbsences.length > 0 && (
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
                    {nextMonthAbsences.map((absence, i) => (
                      <tr key={i}>
                        <td>
                          {(absence.fromDate && moment(absence.fromDate.date).format('DD.MM.YYYY')) || ''}
                        </td>
                        <td>
                          {(absence.toDate.date && absence.subcategory.id !== 31
                          && moment(absence.toDate.date).format('DD.MM.YYYY')) || ''}
                        </td>
                        <td>
                          {Array.isArray(absenceMessage) ? (<ReactMarkdown
                            skipHtml={false}
                            escapeHtml={false}
                            source={absenceMessage[2]}
                          />) :
                          <Link dynamic={true} url={getAbsenceLink(data, absence.alternate)}>
                            {`${(absence.alternate && absence.alternate.firstName) || ''} 
                            ${(absence.alternate && absence.alternate.lastName) || ''}`}
                          </Link>
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}}
      </Query>}
    </section>
  );
};

export default withRouter(DoctorSchedule);
