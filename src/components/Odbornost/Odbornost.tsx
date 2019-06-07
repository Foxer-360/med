import * as React from 'react';

import Media from '../../partials/Media';
import DividerCircles from '../DividerCircles';

export interface OdbornostProps {
  data: {
    image: LooseObject;
    doctorName: string;
    cite: string;
  };
}

const Odbornost = (props: OdbornostProps) => {
  const { image, doctorName, cite } = props.data;

  return (
    <div className={'odbornost'}>
      <DividerCircles />

      <div className={'container'}>
        <div className={'odbornost__doctor'}>
          <div className={'odbornost__doctor__imageWrapper'}>
            {image && <Media type={'image'} data={image} />}
          </div>

          <div className={'grid grid--vCenterBlock'}>
            <div>
              <div className={'horizontal-line'} />
              <p>{doctorName || ''}</p>
              <cite>{cite || ''}</cite>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Odbornost;