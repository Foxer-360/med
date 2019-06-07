import * as React from 'react';

import List from '../List';
import DividerCircles from '../DividerCircles';

interface Item {
  day: string;
  eveningHoursDescription: string;
  eveningHours: string;
  morningHoursDescription: string;
  morningHours: string;
}

export interface WorkingHoursProps {
  data: {
    title: String;
    items: Array<Item>;
  };
}

const WorkingHours = (props: WorkingHoursProps) => {
  return (
    <List data={props.data.items}>
      {({ data }) => {
        
        return (
          <div className="workingHours">
            <div className="container">
              <div className={'workingHours__title'}>
                <h4>{(props && props.data && props.data.title) || ''}</h4>
              </div>

              <table>
                <tbody>
                  {data && data.map((item, index) => {
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
      }}
    </List>
  );
};

export default WorkingHours;
