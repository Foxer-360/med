import * as React from 'react';

import Link from '../../../partials/Link';
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
  
        <div className={'examination__list row'}>
          {examinations && examinations.map((examination, i) => {
            return (
              <div 
                key={i}
                className={`col-12 ${i === 2 ? 'col-md-12' : 'col-md-6'}`}
              >
                {examination.url ? (
                  <Link 
                    {...examination.url}
                    className={'examination__list__item '}
                    style={examination.url ? { fontWeight: 500 } : { cursor: 'default' }}
                  >
                    {examination.title}
                  </Link>) : (
                  <Examination 
                    title={examination.title}
                    description={examination.description} 
                  />
                )}
              </div>
            );
          })}
        </div>
      </div> 
    );
  }
}

export default ExpertiseDescriptionExamination;