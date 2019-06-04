import * as React from 'react';
import Media from '../../../../partials/Media';

export interface ParagraphMediaProps {
  source: LooseObject;
  class?: string;
  styles?: object;
  width: string;
}

const ParagraphMedia = (props: ParagraphMediaProps) => {
  
  return (
    <div 
      style={props.styles}
      className={`paragraph__content__images ${props.class}`}
    >
      {props.source && 
        <Media
          type={'image'}
          data={props.source}
          width={props.width}
          height={'438'}
        />}
    </div>
  );
};

export default ParagraphMedia;