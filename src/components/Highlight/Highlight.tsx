import * as React from 'react';
import Button from '../../partials/Button';
import ReactMarkdown from 'react-markdown';

export interface HighlightProps {
  data: {
    text: string;
    description: string;
    urlTitle: string;
    url: LooseObject;
  };
  languageCode?: string;
}

const Highlight = (props: HighlightProps) => {
  const { text, url, description, urlTitle } = props.data;

  return (
    <div className={'highlight'}>
      <div className={'container'}>
        <div className={'highlight__content grid'}>
          <img src="/assets/medicon/images/info.png" alt="info" />
          <div>
            {text && <p>{text}</p>}
            {description && 
              <ReactMarkdown className={'highlight__content--description'} source={description} />}
          </div>
          
          {url && <Button classes={'btn--whiteBorder'} url={url}>
            {urlTitle && urlTitle || 'more info'}
          </Button>}
        </div>
      </div>
    </div>
  );
};

export default Highlight;