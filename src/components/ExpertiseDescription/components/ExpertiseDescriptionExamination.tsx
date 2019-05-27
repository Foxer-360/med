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
            return examination.url ? (
              <Link 
                key={i}
                {...examination.url}
                className={`examination__list__item`}
                style={examination.url ? { fontWeight: 500 } : { cursor: 'default' }}
              >
                {examination.title}
              </Link>) : (
              <Examination 
                key={i}
                index={i}
                title={examination.title}
                description={examination.description} 
              />);
          })}
        </div>
      </div> 
    );
  }
}

export default ExpertiseDescriptionExamination;