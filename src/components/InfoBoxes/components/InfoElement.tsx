import * as React from 'react';
import Button from '../../../partials/Button';

export interface InfoElementProps {
  title: string;
  color: string;
  img: string;
  btn: string;
  titleColor: string;
}

export default function InfoElement(props: InfoElementProps) {
  
  const { title, color, img, btn, titleColor } = props;

  return (
    <a className={'infoBoxes__element'} style={{ backgroundImage: `url(${img})`}}>
      <div className={'fullWidthContainer infoBoxes__element__content'}>
        <h5 style={{ color: `${titleColor}`}}>{title}</h5>
        <Button classes={btn}>vice info</Button>
      </div>

      <div 
        className={'infoBoxes__element--colorGradient'}
        style={{ background: `linear-gradient(to bottom, rgba(125, 185, 232, 0) 0%, ${color} 100%)`, }}
      />
    </a>
  );
}