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
      <div>{image && <Media type={'image'} data={image} />}</div>

      <div className={'viewsAboutUs__list__element__content'}>
        {cite && <cite>{cite}</cite>}
        <Link {...url}>
          Zdroj: <strong>{link}</strong>
        </Link>
      </div>
    </div>
  );
}
