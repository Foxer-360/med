import * as React from 'react';
import Button from '../../Button';

export interface BoxesProps {}

const Boxes = (props: BoxesProps) => {
  
  return (
    <section className="info">
      <div className="grid-container">
        
        <div 
          className="info__element" 
          style={{ backgroundImage: 'url("/assets/medicon/images/rect-1.jpg' }}>

          <div className={'info__element--cell'}>
            <h5>Doklady které pro vyšetření potřebujete</h5>
            <Button classes="btn--whiteBorder">vice info</Button>
          </div>
          <div className={'info__element--colorGradient'}/>

        </div>

        <div 
          className="info__element"
          style={{ backgroundImage: 'url("/assets/medicon/images/rect-2.jpg' }}>

          <div className={'info__element--cell'}>
            <h5>Jak vyšetření probíhá</h5>
            <Button classes="btn--whiteBorder">vice info</Button>
          </div>
          <div className={'info__element--colorGradient'}/>

        </div>

      </div>
    </section>
  );
};

export default Boxes;