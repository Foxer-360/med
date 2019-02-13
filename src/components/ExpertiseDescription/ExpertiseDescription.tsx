import * as React from 'react';
import DividerCircles from '../DividerCircles';
import ExpertiseDescriptionCare from './components/ExpertiseDescriptionCare';
import ExpertiseDescriptionExamination from './components/ExpertiseDescriptionExamination';
import ExpertiseDescriptionBoxes from './components/ExpertiseDescriptionBoxes';
import List from '../List';

interface Examination {
  title: string;
  url: LooseObject;
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
    hideBtn: string;
    showHiddenText: boolean;
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
    hideBtn,
    showHiddenText,
    titleExamination,
    examinations,
    boxes
  } = props.data;

  return (
    <div className={'container'}>
      <section className={'expertiseDescription'}>
        <ExpertiseDescriptionCare 
          title={titleCare}
          firstText={firstText}
          secondText={secondText}
          hideBtn={hideBtn}
          showHiddenText={showHiddenText}
        />
        <List data={examinations}>
          {({ data }) => data && 
          <ExpertiseDescriptionExamination 
            title={titleExamination} 
            examinations={data} 
          />}
        </List>
        {boxes && boxes.length > 0 && <DividerCircles />}
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