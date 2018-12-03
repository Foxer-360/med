import * as React from 'react';
import DividerCircles from '../../../DividerCircles';
 
export interface DoctorScheduleProps {}

const DoctorSchedule = (props: DoctorScheduleProps) => {
  return (
    <div className="doctorSchedule">
      <table>
        <tr>
          <td>Pondělí</td>
          <td>
            <p>13.00 - 18.00</p>
            <p>Pro objednané</p>
          </td>
          <td>  
            <DividerCircles />
          </td>
          <td>
            <p>13.00 - 18.00</p>
            <p>Pro objednané</p>
          </td>
        </tr>

        <tr>
          <td>Úterý</td>
          <td>
            <p>13.00 - 18.00</p>
            <p>Pro objednané</p>
          </td>
          <td>
            <DividerCircles />
          </td>
          <td>
            <p>13.00 - 18.00</p>
            <p>Pro objednané</p>
          </td>
        </tr>

        <tr>
          <td>Středa</td>
          <td>
            <p>13.00 - 18.00</p>
            <p>Pro objednané</p>
          </td>
          <td>
            <DividerCircles />
          </td>
          <td>
            <p>13.00 - 18.00</p>
            <p>Pro objednané</p>
          </td>
        </tr>

        <tr>
          <td>Čtvrtek</td>
          <td>
            <p>13.00 - 18.00</p>
            <p>Pro objednané</p>
          </td>
          <td>
            <DividerCircles />
          </td>
          <td>
            <p>13.00 - 18.00</p>
            <p>Pro objednané</p>
          </td>
        </tr>

        <tr>
          <td>Pátek</td>
          <td>
            <p>13.00 - 18.00</p>
            <p>Pro objednané</p>
          </td>
          <td>
            <DividerCircles />
          </td>
          <td>
            <p>13.00 - 18.00</p>
            <p>Pro objednané</p>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default DoctorSchedule;
