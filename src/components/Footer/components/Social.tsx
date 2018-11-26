import * as React from 'react';

export interface SocialProps {}

const Social = (props: SocialProps) => (
  <div className="social flexColumn">
		<a href="#"><img src="/assets/images/facebook.png" alt="facebook" /></a>
		<p>
			<strong>MEDICON a.s.</strong>
			<br />
			Antala Staška 1670/80 <br />
			140 00 Praha 4 <br />
		</p>
	</div>
);

export default Social;