import * as React from 'react';

export interface InvestigationProps {
  title: string;
  items: Array<string>;
}

const Investigation = (props: InvestigationProps) => {
  const {title, items} = props;
  
  return (

    <div className={'investigation'}>
      <h3>{title}</h3>

      <div className={'grid investigation__blocks hCenterBlock'}>

        {items && items.map((item, i) => (
          <a href="#" className={'investigation__block'}>
            <p>{item}</p>
          </a>
        ))}

      </div>
    </div> 
  );
};

export default Investigation;
