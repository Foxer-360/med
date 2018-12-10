import * as React from 'react';
import SvgIcon from '@source/partials/SvgIcon';

export interface ReviewElementProps {
  img: string;
  cite: string;
  starCount: number;  
}

export default function ReviewElement(props: ReviewElementProps) {
  var rows = [];
  for (var i = 0; i < props.starCount; i++) {
    rows.push(<SvgIcon name="star" key={i} />);
  }

  return (
    <div className="reviews__list__element">
      <img src={props.img} alt="photo" />

      <div className="reviews__list__element__content">
        <cite>{props.cite}</cite>
        <div className="stars">{rows}</div>
      </div>
    </div>
  );
}
