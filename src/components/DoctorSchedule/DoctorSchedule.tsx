import * as React from 'react';
import DividerCircles from '../DividerCircles';
import moment from 'moment';

export interface DoctorScheduleProps {
  data: {
    schedule: LooseObject;
    oddWeekTitle: String;
    evenWeekTitle: String;
    regularWeekTitle: String;
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
      return 'pondělí';

    case 'fr':
      return 'čtvrtek';

    case 'st':
      return 'pátek';

    case 'su':
      return 'sobota';

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

const DoctorSchedule = (props: DoctorScheduleProps) => {
  const { schedule, oddWeekTitle, evenWeekTitle, regularWeekTitle } = props.data;

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
                            <p>{(item.morningHours && item.morningHours.description) || ''}</p>
                          </td>
                          <td className={'circleCell'}>
                            <DividerCircles />
                          </td>
                          <td>
                            <p>{(item.noonHours && item.noonHours.time) || ' - '}</p>
                            <p>{(item.noonHours && item.noonHours.description) || ''}</p>
                          </td>
                          <td className={'circleCell'}>
                            <DividerCircles />
                          </td>
                          <td>
                            <p>{(item.afternoonHours && item.afternoonHours.time) || ' - '}</p>
                            <p>{(item.afternoonHours && item.afternoonHours.description) || ''}</p>
                          </td>
                          <td className={'circleCell'}>
                            <DividerCircles />
                          </td>
                          <td>
                            <p>{(item.lateAfternoonHours && item.lateAfternoonHours.time) || ' - '}</p>
                            <p>{(item.lateAfternoonHours && item.lateAfternoonHours.description) || ''}</p>
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        ))}
    </section>
  );
};

export default DoctorSchedule;
