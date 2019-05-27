import * as React from 'react';

import Button from '../../../partials/Button';
import getImageUrl from '../../../helpers/getImageUrl';

export interface InfoElementProps {
  title: string;
  gradientColor: string;
  button: string;
  titleColor: string;
  image: LooseObject;
  link?: LooseObject;
}

export default function InfoElement(props: InfoElementProps) {
  const { title, gradientColor, image, button, titleColor, link } = props;

  return (
    <div className={'col-sm-12 col-lg-6 col-xl-4'}>
      <div
        className={'info-boxes__list__element'}
        style={{ backgroundImage: image && `url(${getImageUrl(image)})` }}
      >
        <div className={'info-boxes__list__element__content'}>
          {title && <h5 style={{ color: `${titleColor}` }}>{title}</h5>}

          {button && 
            <Button url={link} classes={'btn--fullWidth ' + button}>
              více informací
            </Button>}
        </div>
        {gradientColor && (
          <div
            className={'info-boxes__list__element--colorGradient'}
            style={{ background: `linear-gradient(to bottom, rgba(125, 185, 232, 0) 0%, ${gradientColor} 100%)` }}
          />
        )}
      </div>
    </div>
  );
}
