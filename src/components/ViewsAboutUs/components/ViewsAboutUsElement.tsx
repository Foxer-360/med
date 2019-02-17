import * as React from 'react';
import Media from '@source/partials/Media';
import Link from '@source/partials/Link';

export interface ViewsAboutUsElementProps {
  url: LooseObject;
  link: string;
  cite: string;
  image: LooseObject;
}

export default function ViewsAboutUsElement(props: ViewsAboutUsElementProps) {
  const { url, link, cite, image } = props;

  return (
    <div className="viewsAboutUs__list__element">
      {image && <Media type={'image'} data={image} />}

      <div className={'viewsAboutUs__list__element__content'}>
        {cite && <cite>{cite}</cite>}
        <Link url={url && url.url}>Zdroj: <strong>{link}</strong></Link>
      </div>
    </div>
  );
}
