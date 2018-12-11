import * as React from 'react';

export interface ViewsAboutUsElementProps {
  img: string;
  cite: string; 
}

export default function ViewsAboutUsElement(props: ViewsAboutUsElementProps) {

  return (
    <div className="viewsAboutUs__list__element">
      <img src={props.img} alt="review about us" />

      <div className="viewsAboutUs__list__element__content">
        <cite>{props.cite}</cite>
        <a href="#">Zdroj: <strong>Haló noviny</strong></a>
      </div>
    </div>
  );
}
