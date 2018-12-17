import * as React from 'react';
import TextBlock from '../TextBlock';
import DividerCircles from '../DividerCircles';
import Media from '@source/partials/Media';

export interface OdbornostProps {
  data: {
    image: LooseObject;
    doctor: string;
    cite: string;
  };
}

const Odbornost = (props: OdbornostProps) => {
  const { image, doctor, cite } = props.data;

  return (
    <div className={'odbornost'}>
      <DividerCircles />
      
      <div className={'container'}>
        <div className={'odbornost__doctor'}>
          {(image && <Media type={'image'} data={image} />) || (
            <img src={'/assets/medicon/images/odbornost-lekar.jpg'} alt="Doctor photo"/>
          )}

          <div className="grid grid--vCenterBlock">
            <div>
                <div className={'horizontal-line'} />
                {doctor && <p>{doctor}</p>}
                {cite && <cite>{cite}</cite>}
              </div>
            </div>
          </div>					
          
      </div>
    </div>
  );
};

export default Odbornost;