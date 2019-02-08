import * as React from 'react';
import Link from '@source/partials/Link';

export interface ExpertiseDescriptionExaminationProps {
  title: string;
  examinations: Array<any>;
}

const ExpertiseDescriptionExamination = (props: ExpertiseDescriptionExaminationProps) => {
  const { title, examinations } = props;
  let lastLong = {};

  return (
    <div className={'examination'}>
      <div className="container">
        {title && <h3>{title}</h3>}

        <div className={'grid examination__blocks'}>
          
          {examinations && examinations.map((examination, i) => {
            if (examinations.length % 2 !== 0) {
              lastLong = {
                gridColumnStart: 'span 2'
              };
            }
            
            return (
              <Link
                key={i}
                className={'examination__block'}
                url={examination.url && examination.url.url}
                style={examinations.length - 1 === i ? lastLong : null}
              >
                {examination.title && <p>{examination.title}</p>}
              </Link>
            );
          })}

        </div>
      </div>
    </div> 
  );
};

export default ExpertiseDescriptionExamination;