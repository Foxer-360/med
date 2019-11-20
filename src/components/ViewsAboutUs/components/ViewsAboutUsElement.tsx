import * as React from 'react';

import Link from '../../../partials/Link';
import Media from '../../../partials/Media';

export interface ViewsAboutUsElementProps {
  url: LooseObject;
  link: string;
  cite: string;
  image: LooseObject;
}

export default function ViewsAboutUsElement(props: ViewsAboutUsElementProps) {
  const { url, link, cite, image } = props;

  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="viewsAboutUs__list__element">
        <div className="row">

          <div className="col-4 col-md-5">
            <div>{image && <Media type={'image'} data={image} width={'106'} height={'124'} />}</div>
          </div>

          <div className="col-8 col-md-7">
            <div className={'viewsAboutUs__list__element__content'}>
              <div style={{ display: 'table-cell', verticalAlign: 'middle' }}>
                <div className="row">
                  {cite && <cite>{cite}</cite>}
                </div>
                <div className="row">
                  <Link {...url}>Zdroj: <strong>{link}</strong></Link>
                </div>
              </div>
            </div>
          </div>

          <Link className={'viewsAboutUs__list__element__link'} {...url}/>
        </div>
      </div>
    </div>
  );
}
