
import * as React from 'react';
import DividerCircles from '../DividerCircles';
import ExpertiseDescriptionCare from './components/ExpertiseDescriptionCare';
import ExpertiseDescriptionBoxes from './components/ExpertiseDescriptionBoxes';
import List from '../List';
import ExpertiseDescriptionExamination from './components/ExpertiseDescriptionExamination';

interface Examination {
  title: string;
  url: LooseObject;
  description: string;
}

interface Box {
  title: string;
  url: LooseObject;
  image: LooseObject;
}

export interface DescriptionProps {
  data: {
    titleCare: string;
    firstText: string;
    secondText: string;
    titleExamination: string;
    examinations: Examination[];
    boxes: Box[];
  };
}

const Description = (props: DescriptionProps) => {
  const { 
    titleCare, 
    firstText,
    secondText,
    titleExamination, 
    examinations, 
    boxes 
  } = props.data;

  return (
    <div className={'container'}>
    <section className={'expertiseDescription'}>
      <ExpertiseDescriptionCare title={titleCare} firstText={firstText} secondText={secondText} />
      <List data={examinations}>
        {({ data }) => data && 
        <ExpertiseDescriptionExamination 
          title={titleExamination} 
          examinations={data} 
        />}
      </List>
      <DividerCircles />
      <List data={boxes}>
        {({ data }) => data && 
        <ExpertiseDescriptionBoxes 
          boxes={data} 
        />}
      </List>
    </section>
    </div>
  );
};

export default Description;