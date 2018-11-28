/* tslint:disable */
import * as React from 'react';

interface IFbIconProps {
  name?: string;
}

const FbIcon: React.SFC<IFbIconProps> = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    preserveAspectRatio="none"
    {...props}
    className={`fbIcon ${'fbIcon--' + props.name}`}
  >
    <path d="M0,0v455.73h242.704V279.691h-59.33v-71.864h59.33v-60.353c0-43.893,35.582-79.475,79.475-79.475h62.025v64.622h-44.382  c-13.947,0-25.254,11.307-25.254,25.254v49.953h68.521l-9.47,71.864h-59.051V455.73H455.73V0H0z" />
  </svg>
);

export default FbIcon;