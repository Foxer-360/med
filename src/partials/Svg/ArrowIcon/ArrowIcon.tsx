/* tslint:disable */
import * as React from 'react';

interface IArrowIconProps {
  name?: string;
}

const ArrowIcon: React.SFC<IArrowIconProps> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    {...props}
    className={`arrowIcon ${'arrowIcon--' + props.name}`}
  >
    <path
      d="M32.7,15.9c1.4-1.4,3.6-1.4,5,0c1.4,1.4,1.4,3.6,0,5L12.1,46.4h84.4c2,0,3.6,1.6,3.6,3.5s-1.6,3.6-3.6,3.6H12.1l25.6,25.5
	c1.4,1.4,1.4,3.7,0,5c-1.4,1.4-3.6,1.4-5,0L1,52.5c-1.4-1.4-1.4-3.6,0-5L32.7,15.9z"
    />
  </svg>
);

export default ArrowIcon;
