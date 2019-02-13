import * as React from 'react';
import Button from '../../partials/Button';

export interface HighlightProps {
  data: {
    text: string;
    url: LooseObject;
  };
  languageCode?: string;
}

const Highlight = (props: HighlightProps) => {
  const { text, url } = props.data;

  return (
    <div className={'highlight'}>
      <div className={'container'}>
        <div className={'highlight__content grid'}>
          <img src="/assets/medicon/images/info.png" alt="info" />
          {text && <p>{text}</p>}
          
          <Button classes={'btn--whiteBorder'} url={url && url}>
            vice info
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
