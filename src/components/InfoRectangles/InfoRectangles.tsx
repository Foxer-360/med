import * as React from 'react';
import Button from '../Button';

export interface InfoRectanglesProps {}

const InfoRectangles = (props: InfoRectanglesProps) => {
  return (
    <section className="info-rectangles">
      <div className="grid-container">
        <div className="info-element" style={{ backgroundImage: 'url(assets/medicon/images/rect-1.jpg' }}>
          <div>
            <h5>široký výběr zdravýchpotravin</h5>
            <Button classes="btn--blueBorder">vice info</Button>
          </div>
        </div>
        <div className="info-element">
          <div style={{ backgroundImage: 'url(assets/medicon/images/rect-2.jpg' }}>
            <h5>široký výběr zdravýchpotravin</h5>
            <Button classes="btn--blueBorder">vice info</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoRectangles;
