import * as React from 'react';
import SvgIcon from '@source/partials/SvgIcon';
import Media from '@source/partials/Media';

export interface ReviewElementProps {
  cite: string;
  image: LooseObject;
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
    <div className={'reviews__list__element'}>
      {image && <Media type={'image'} data={image}/>}

      <div className={'reviews__list__element__content'}>
        {cite && <cite>{cite}</cite>}
        {rows && <div className={'stars'}>{rows}</div>}
      </div>
    </div>
  );
}
