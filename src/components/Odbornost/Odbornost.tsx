import * as React from 'react';

import Media from '../../partials/Media';
import DividerCircles from '../DividerCircles';

export interface OdbornostProps {
  data: {
    image?: LooseObject;
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
        <div className="row">

          <div className="col-md-12 col-lg-6">
            {image && <Media type={'image'} data={image} width={'420'} height={'290'} />}
          </div>

          <div className="col-md-12 col-lg-6">
            <div className={'odbornost__contentWrapper'}>
              <div className={'odbornost__content'}>
                <div className={'horizontal-line'} />
                <p>{doctorName || ''}</p>
                <cite>{cite || ''}</cite>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Odbornost;