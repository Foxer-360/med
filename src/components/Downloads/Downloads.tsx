import * as React from 'react';
import DividerCircles from '../DividerCircles';
import SvgIcon from '@source/partials/SvgIcon';

export interface DownloadsProps {}

const Downloads = (props: DownloadsProps) => {
  return (
    <div className={'container'}>
      <div className={'downloads'}>
      
        <h3>Dokumenty ke stažení</h3>

        <p>Zde si můžete stáhnout potřebné dokumenty</p>

        <div className="grid downloads__list">
          <div className="downloads__list__element">
            <p>Jak podat stížnost</p>
            <a className={'btn btn--blueBorder'}>
              Stáhnout
              <SvgIcon name={'download'} type={'lightBlue'} />
            </a>
          </div>
          <div className="downloads__list__element">
            <p>Lorem ipsum dolor</p>
            <a className={'btn btn--blueBorder'}>
              Stáhnout
              <SvgIcon name={'download'} type={'lightBlue'} />
            </a>
          </div>
          <div className="downloads__list__element">
            <p>Lorem ipsum dolor</p>
            <a className={'btn btn--blueBorder'}>
              Stáhnout
              <SvgIcon name={'download'} type={'lightBlue'} />
            </a>
          </div>
          <div className="downloads__list__element">
            <p>Lorem ipsum dolor</p>
            <a className={'btn btn--blueBorder'}>
              Stáhnout
              <SvgIcon name={'download'} type={'lightBlue'} />
            </a>
          </div>
        </div>
      </div>
      <DividerCircles />
    </div>
  );
};

export default Downloads;
