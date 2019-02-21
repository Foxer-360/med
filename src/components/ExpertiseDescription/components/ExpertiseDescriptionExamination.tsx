import * as React from 'react';
import Link from '@source/partials/Link';
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
        {title && <h3 style={{ paddingTop: 45 }}>{title}</h3>}
  
        <div className={'examination__list grid'}>
          {examinations && examinations.map((examination, i) => {
            
            let lastLong = examinations.length % 2 !== 0 && examinations.length - 1 === i;

            return examination.url ? (
              <Link 
                key={i} 
                style={examination.url ? { fontWeight: 500 } : { cursor: 'default' }}
                className={`examination__list__item ${lastLong ? 'examination__list__item--last-long' : ''}`} 
                url={examination.url && examination.url.url}
              >
                {examination.title && examination.title}
              </Link>) : (
              <Examination 
                key={i} 
                description={examination.description} 
                title={examination.title}
                lastLong={lastLong}
              />);
          })}
        </div>
      </div> 
    );
  }
}

export default ExpertiseDescriptionExamination;