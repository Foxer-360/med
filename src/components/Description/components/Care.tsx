import * as React from 'react';

export interface CareProps {
  title: string;
  items: Array<string>;
}

const Care = (props: CareProps) => {
  const {title, items} = props;
  
  return (
    <div className={'care'}>
      <h3>{title}</h3>
      <div className={'hCenterBlock'}>
        {items && items.map( (item, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: item }} /> ))}
      </div>
    </div>
  );
};

export default Care;