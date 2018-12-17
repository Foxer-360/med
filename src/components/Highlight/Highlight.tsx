import * as React from 'react';
import Button from '../../partials/Button';

export interface HighlightProps {
  data: {
    text: string;
    url: string;
  };
}

const Highlight = (props: HighlightProps) => {
  const {text, url} = props.data;
  
  return (
    <div className="fullWidthContainer">
      <section className={'highlight'}>
        <div className="container">
          <div className="flexRow flexAlign--center">
            <div className={'highlight__info flexRow'}>
              <img src="/assets/medicon/images/info.png" alt="info" />
              {text && <p>{text}</p>}  
            </div>
            
            <Button classes="btn--whiteBorder btn--fullWidth">vice info</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Highlight;