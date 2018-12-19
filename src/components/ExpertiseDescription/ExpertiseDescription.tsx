import * as React from 'react';
import DividerCircles from '../DividerCircles';
import ExpertiseDescriptionCare from './components/ExpertiseDescriptionCare';
import ExpertiseDescriptionExamination from './components/ExpertiseDescriptionExamination';
import ExpertiseDescriptionBoxes from './components/ExpertiseDescriptionBoxes';

interface Examination {
  title: string;
  url: string;
}

interface Box {
  title: string;
  url: string;
  image: LooseObject;
}

export interface DescriptionProps {
  data: {
    titleCare: string;
    text: string;
    titleExamination: string;
    examinations: Examination[];
    boxes: Box[];
  };
}

const Description = (props: DescriptionProps) => {
  const { 
    titleCare, 
    text, 
    titleExamination, 
    examinations, 
    boxes 
  } = props.data;

  return (
    <div className={'container'}>
    <section className={'expertiseDescription'}>
      <ExpertiseDescriptionCare title={titleCare} text={text} />
      <ExpertiseDescriptionExamination 
        title={titleExamination} 
        examinations={examinations} 
      />
      <DividerCircles />
      <ExpertiseDescriptionBoxes boxes={boxes} />
      </section>
    </div>
  );
};

export default Description;