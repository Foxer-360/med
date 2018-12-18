import * as React from 'react';
import DividerCircles from '../DividerCircles';
import ExpertiseDescriptionCare from './components/ExpertiseDescriptionCare';
import ExpertiseDescriptionInvestigation from './components/ExpertiseDescriptionInvestigation';
import ExpertiseDescriptionBoxes from './components/ExpertiseDescriptionBoxes';

interface Investigation {
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
    titleInvestigation: string;
    investigations: Investigation[];
    boxes: Box[];
  };
}

const Description = (props: DescriptionProps) => {
  const { 
    titleCare, 
    text, 
    titleInvestigation, 
    investigations, 
    boxes 
  } = props.data;

  return (
    <div className={'container'}>
    <section className={'expertiseDescription'}>
      <ExpertiseDescriptionCare title={titleCare} text={text} />
      <ExpertiseDescriptionInvestigation 
        title={titleInvestigation} 
        investigations={investigations} 
      />
      <DividerCircles />
      <ExpertiseDescriptionBoxes boxes={boxes} />
      </section>
    </div>
  );
};

export default Description;