import * as React from 'react';
import ReactMarkdown from 'react-markdown';

export interface ExpertiseDescriptionCareProps {
  title: string;
  text: string;
}

const ExpertiseDescriptionCare = (props: ExpertiseDescriptionCareProps) => {
  const { title, text } = props;

  return (
    <div className={'care'}>
      {title && <h3>{title}</h3>}
      <div className={'hCenterBlock'}>
        {text && <ReactMarkdown source={text} />}
      </div>
    </div>
  );
};

export default ExpertiseDescriptionCare;
