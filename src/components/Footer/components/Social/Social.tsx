import * as React from 'react';
import SvgIcon from '@source/partials/SvgIcon';

export interface SocialProps {}

const Social = (props: SocialProps) => (
  <div className="social flexColumn">
    <a href="#">
      <SvgIcon type={'white'} name="fb" />
    </a>
    <p>
      <strong>MEDICON a.s.</strong>
      <br />
      Antala Staška 1670/80 <br />
      140 00 Praha 4 <br />
    </p>
  </div>
);

export default Social;
