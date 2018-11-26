import * as React from 'react';

export interface HighlightProps {}

const Highlight = (props: HighlightProps) => {
  return (
    <div className="fullWidthContainer">
      <section className={'highlight'}>
        <div className="container">
          <div className="flexRow flexAlign--center">
            <div className="info flexRow">
              <img src="assets/medicon/images/info.png" alt="info" />
              <p>Poliklinika Zelený pruh je od 16.9. do 19.9. zavřená</p>  
            </div>
            <button className="btn btnSecond">vice info</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Highlight;
