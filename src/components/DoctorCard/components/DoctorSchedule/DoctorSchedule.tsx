import * as React from 'react';
import DividerCircles from '../../../DividerCircles';

export interface DoctorScheduleProps {}

const DoctorSchedule = (props: DoctorScheduleProps) => {
  return (
    <div className="doctorSchedule">
      <table>
        <tr className={'mobileHeading'}>
          <td colSpan={3}>Pondělí</td>
        </tr>

        <tr className={'normalRow'}>
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

        <tr className={'mobileHeading'}>
          <td colSpan={3}>Úterý</td>
        </tr>

        <tr className={'normalRow'}>
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

        <tr className={'mobileHeading'}>
          <td colSpan={3}>Středa</td>
        </tr>

        <tr className={'normalRow'}>
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

        <tr className={'mobileHeading'}>
          <td colSpan={3}>Čtvrtek</td>
        </tr>

        <tr className={'normalRow'}>
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

        <tr className={'mobileHeading'}>
          <td colSpan={3}>Pátek</td>
        </tr>

        <tr className={'normalRow'}>
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
