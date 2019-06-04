import * as React from 'react';
import * as ReactMarkdown from 'react-markdown/with-html';

export interface ParagraphTextProps {
  source: string;
  class?: string;
  styles?: object;
}

const ParagraphText = (props: ParagraphTextProps) => {
  return (
    <div 
      style={props.styles}
      className={`paragraph__content__text ${props.class}`}
    >
      {props.source && <ReactMarkdown
          source={props.source}
          skipHtml={false}
          escapeHtml={false}
      />}
    </div>
  );
};

export default ParagraphText;