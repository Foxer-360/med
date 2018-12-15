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
  if (starCount > 0) {
    for (let index = 0; index < starCount; index++) {
      rows.push(<SvgIcon name="star" key={index} />);
    }
  } else {
    for (let index = 0; index < 5; index++) {
      rows.push(<SvgIcon name="star" key={index} />);
    }
  }
  
  console.log(`Review :: ` + props);

  return (
    <div className="reviews__list__element">
      <Media type={'image'} data={image}/>

      <div className="reviews__list__element__content">
        <cite>{cite}</cite>
        <div className="stars">{rows}</div>
      </div>
    </div>
  );
}