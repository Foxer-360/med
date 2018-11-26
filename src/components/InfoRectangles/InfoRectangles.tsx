import * as React from 'react';

export interface InfoRectanglesProps {}

const InfoRectangles = (props: InfoRectanglesProps) => {
  return (
    <section className="info-rectangles">
      <div className="grid-container">
        <div className="info-element" style={{ backgroundImage: 'url(/assets/medicon/images/rect-1.jpg' }}>
          <div>
            <h5>široký výběr zdravýchpotravin</h5>
            <button className="btn btnThird">vice info</button>
          </div>
        </div>
        <div className="info-element">
          <div style={{ backgroundImage: 'url(/assets/medicon/images/rect-2.jpg' }}>
            <h5>široký výběr zdravýchpotravin</h5>
            <button className="btn btnThird">vice info</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoRectangles;
