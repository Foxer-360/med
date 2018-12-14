import * as React from 'react';
import Button from '../../partials/Button';

export interface HighlightProps {
  data: {
    text: string;
    url: string;
  };
}

const Highlight = (props: HighlightProps) => {
  return (
    <div className="fullWidthContainer">
      <section className={'highlight'}>
        <div className="container">
          <div className="flexRow flexAlign--center">
            <div className={'highlight__info flexRow'}>
              <img src="/assets/medicon/images/info.png" alt="info" />
              <p>Poliklinika Zelený pruh je od 16.9. do 19.9. zavřená</p>  
            </div>
            
            <Button classes="btn--whiteBorder btn--fullWidth">vice info</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Highlight;