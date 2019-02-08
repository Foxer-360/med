import * as React from 'react';
import Link from '@source/partials/Link';

export interface ExpertiseDescriptionExaminationProps {
  title: string;
  examinations: Array<any>;
}

const ExpertiseDescriptionExamination = (props: ExpertiseDescriptionExaminationProps) => {
  const { title, examinations } = props;

  return (
    <div className={'examination'}>
      {title && <h3 style={{ paddingTop: 45 }}>{title}</h3>}

      <div className={'examination__list grid'}>
        {examinations && examinations.map((examination, i) => {
          
          let lastLong = examinations.length % 2 !== 0 && examinations.length - 1 === i;
          
          return (
            <Link 
              key={i} 
              className={`examination__list__item ${lastLong ? 'examination__list__item--last-long' : ''}`} 
              url={examination.url && examination.url.url}
            >
              {examination.title && examination.title}
            </Link>
          );
        })}
      </div>
    </div> 
  );
};

export default ExpertiseDescriptionExamination;