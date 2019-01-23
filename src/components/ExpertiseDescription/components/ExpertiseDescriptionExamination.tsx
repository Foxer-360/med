import * as React from 'react';

export interface ExpertiseDescriptionExaminationProps {
  title: string;
  examinations: Array<any>;
}

const ExpertiseDescriptionExamination = (props: ExpertiseDescriptionExaminationProps) => {
  const { title, examinations } = props;
  let lastLong = {};

  return (
    <div className={'examination'}>
      {title && <h3>{title}</h3>}

      <div className={'grid examination__blocks hCenterBlock'}>
        
        {examinations && examinations.map((examination, i) => {
          if (examinations.length % 2 !== 0) {
            lastLong = {
              gridColumnStart: 'span 2'
            };
          }
          
          return (
            <a 
              style={examinations.length - 1 === i ? lastLong : null} 
              href={examination.url} 
              className={'examination__block'} 
              key={i}
            >
              <p>{examination.title}</p>
            </a>
          );
        })}

      </div>
    </div> 
  );
};

export default ExpertiseDescriptionExamination;