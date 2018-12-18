import * as React from 'react';

export interface ExpertiseDescriptionInvestigationProps {
  title: string;
  investigations: Array<any>;
}

const ExpertiseDescriptionInvestigation = (props: ExpertiseDescriptionInvestigationProps) => {
  const { title, investigations } = props;
  
  return (

    <div className={'investigation'}>
      {title && <h3>{title}</h3>}

      <div className={'grid investigation__blocks hCenterBlock'}>

        {investigations && investigations.map((investigation, i) => (
          <a href={investigation.url} className={'investigation__block'} key={i}>
            <p>{investigation.title}</p>
          </a>
        ))}

      </div>
    </div> 
  );
};

export default ExpertiseDescriptionInvestigation;
