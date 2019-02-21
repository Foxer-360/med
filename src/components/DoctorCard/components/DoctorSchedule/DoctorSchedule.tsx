import * as React from 'react';
import DividerCircles from '../../../DividerCircles';

export interface DayItem {
  day: string;
  morningHours: {
    time?: string;
    description?: string;
  };
  noonHours: {
    time?: string;
    description?: string;
  };
  afternoonHours: {
    time?: string;
    description?: string;
  };
  lateAfternoonHours: {
    time?: string;
    description?: string;
  };
}

export interface DoctorScheduleProps {
  data: DayItem[];
  title?: String;
}

const DoctorSchedule = (props: DoctorScheduleProps) => {
  const { title, data } = props;
  return (
    <div className="doctorSchedule">
      <div className={'doctorSchedule__title'}>
        <h4>{title}</h4>
      </div>
      <table>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <>
                  <tr className={'mobileHeading'}>
                    <td colSpan={7}>{item.day}</td>
                  </tr>

                  <tr className={'normalRow'}>
                    <td>{item.day}</td>
                    <td>
                      <p>{item.morningHours.time}</p>
                      <p>{item.morningHours.description}</p>
                    </td>
                    <td className={'circleCell'}>
                      <DividerCircles />
                    </td>
                    <td>
                      <p>{item.noonHours.time}</p>
                      <p>{item.noonHours.description}</p>
                    </td>
                    <td className={'circleCell'}>
                      <DividerCircles />
                    </td>
                    <td>
                      <p>{item.afternoonHours.time}</p>
                      <p>{item.afternoonHours.description}</p>
                    </td>
                    <td className={'circleCell'}>
                      <DividerCircles />
                    </td>
                    <td>
                      <p>{item.lateAfternoonHours.time}</p>
                      <p>{item.lateAfternoonHours.description}</p>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorSchedule;
