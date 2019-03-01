import * as React from 'react';
import DividerCircles from '../DividerCircles';

export interface WorkingHoursProps {
  data: {
    items: Array<{
      day: string;
      eveningHoursDescription: string;
      eveningHours: string;
      morningHoursDescription: string;
      morningHours: string;
    }>;
  };
}

const WorkingHours = (props: WorkingHoursProps) => {
  console.log('%c Emilio: ', 'background: #222; color: #83FFFF', props);
  return (
    <div className="workingHours">
      <div className="container">
        <table>
          <tbody>
            {props.data &&
              props.data.items.length > 0 &&
              props.data.items.map((item, index) => {
                return (
                  <>
                    <tr className={'mobileHeading'}>
                      <td colSpan={3}>{item.day}</td>
                    </tr>

                    <tr className={'normalRow'}>
                      <td>{item.day}</td>
                      <td>
                        <p>{item.morningHours}</p>
                        <p>{item.morningHoursDescription}</p>
                      </td>
                      <td>
                        <DividerCircles />
                      </td>
                      <td>
                        <p>{item.eveningHours}</p>
                        <p>{item.eveningHoursDescription}</p>
                      </td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkingHours;
