import * as React from 'react';
import FbIcon from '@source/components/Svg/FbIcon/FbIcon';

export interface SocialProps {}

const Social = (props: SocialProps) => (
  <div className="social flexColumn">
    <a href="#">
      <FbIcon name={'white'} />
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
