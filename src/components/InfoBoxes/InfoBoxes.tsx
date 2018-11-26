import * as React from 'react';

export interface InfoBoxesProps {}

const InfoBoxes = (props: InfoBoxesProps) => {
  return (
    <section className="infoBoxes">
      <h3>Z našich lékáren</h3>
      <div className="grid-container">
        <div className="info-element" style={{ backgroundImage: 'url(/assets/medicon/images/info-el-1.jpg)' }}>
          <div>
            <h5>široký výběr zdravýchpotravin</h5>
            <button className="btn btnSecond">vice info</button>
          </div>
        </div>
        <div className="info-element" style={{ backgroundImage: 'url(/assets/medicon/images/info-el-2.jpg)' }}>
          <div>
            <h5>široký výběr zdravýchpotravin</h5>
            <button className="btn btnSecond">vice info</button>
          </div>
        </div>
        <div className="info-element" style={{ backgroundImage: 'url(/assets/medicon/images/info-el-3.jpg)' }}>
          <div>
            <h5 className="light-blue">široký výběr zdravýchpotravin</h5>
            <button className="btn btnThird">vice info</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
