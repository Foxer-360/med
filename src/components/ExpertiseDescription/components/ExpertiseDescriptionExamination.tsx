import * as React from 'react';

import Examination from './components/Examination';

export interface ExpertiseDescriptionExaminationProps {
  title: string;
  // tslint:disable-next-line:no-any
  examinations: Array<any>;
}

export interface ExpertiseDescriptionExaminationState {}

// tslint:disable-next-line:max-line-length
class ExpertiseDescriptionExamination extends React.Component<ExpertiseDescriptionExaminationProps, ExpertiseDescriptionExaminationState> {
  constructor(props: ExpertiseDescriptionExaminationProps) {
    super(props);
  }

  public render() {
    const { title, examinations } = this.props;
    
    return (
      <div className={'examination'}>
        {title && <h3>{title}</h3>}

        {examinations && examinations.length > 0 && <div className={'examination__list row'}>
          {examinations.map((examination, i) => {
            return (
              <div 
                key={i}
                className={`col-12 ${i === 2 ? 'col-md-12' : 'col-md-6'}`}
              >
                <Examination 
                  url={examination.url}
                  title={examination.title}
                  description={examination.description} 
                />
              </div>
            );
          })}
        </div>}
      </div> 
    );
  }
}

export default ExpertiseDescriptionExamination;