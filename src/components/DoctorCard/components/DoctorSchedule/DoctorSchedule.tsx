import * as React from 'react';
import DividerCircles from '../../../DividerCircles';

export interface DoctorScheduleProps {
  data: [
    {
      day: string;
      eveningHoursdescription: string;
      eveningOpeningHours: string;
      morningHoursdescription: string;
      morningOpeningHours: string;
    }
  ];
}

const DoctorSchedule = (props: DoctorScheduleProps) => {
  return (
    <div className="doctorSchedule">
      <table>
        <tbody>
          {props.data.map((item, index) => {
            return <>
                <tr className={'mobileHeading'}>
                  <td colSpan={3}>{item.day}</td>
                </tr>

                <tr className={'normalRow'}>
                  <td>{item.day}</td>
                  <td>
                    <p>{item.morningOpeningHours}</p>
                    <p>{item.morningHoursdescription}</p>
                  </td>
                  <td>
                    <DividerCircles />
                  </td>
                  <td>
                    <p>{item.eveningOpeningHours}</p>
                    <p>{item.eveningHoursdescription}</p>
                  </td>  
                </tr>
              </>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorSchedule;
