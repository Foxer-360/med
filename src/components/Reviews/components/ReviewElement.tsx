import * as React from 'react';

import Media from '../../../partials/Media';
import SvgIcon from '../../../partials/SvgIcon';

export interface ReviewElementProps {
  cite: string;
  image?: LooseObject;
  starCount: number;  
}

export default function ReviewElement(props: ReviewElementProps) {
  const { image, cite, starCount } = props;

  var rows = [];
  for (let i = 0; i < starCount; i++) {
    rows.push(<SvgIcon name="star" key={i} />);
  } // 5 stars by default
  
  if (starCount < 5) {
    rows.slice(-(5 - starCount), starCount);
  }

  return (
    <div className={'reviews__list__element col-sm-12 col-md-6 col-lg-4'}>
      <div style={{ height: '100%', display: 'table' }}>
        <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
        
          <div className={'row'}>
            <div className={'reviews__list__element__image col-3 col-md-4'}>
              {image && <Media type={'image'} data={image}/>}
            </div>

            <div className={'reviews__list__element__content col-8'}>
              {cite && <cite>{cite}</cite>}
              {rows && <div className={'stars'}>{rows}</div>}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}