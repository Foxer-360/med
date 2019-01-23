import * as React from 'react';
import Media from '@source/partials/Media';

export interface ViewsAboutUsElementProps {
  url: string;
  link: string;
  cite: string;
  image: LooseObject;
}

export default function ViewsAboutUsElement(props: ViewsAboutUsElementProps) {
  const { url, link, cite, image } = props;

  return (
    <div className="viewsAboutUs__list__element">
      {(image && <Media type={'image'} data={image} />) || (
        <img src={'/assets/medicon/images/review-aboutus-1.jpg'} alt="review about us" />
      )}

      <div className={'viewsAboutUs__list__element__content'}>
        <cite>{cite}</cite>
        <a href={url}>Zdroj: <strong>{link}</strong></a>
      </div>
    </div>
  );
}
