import * as React from 'react';

export interface ButtonProps {
  classes?: string;
  children: string;
  noArrow?: boolean;
}

const Button = (props: ButtonProps) => (
  <button className={`btn ${props.classes}`}>
    {props.children}
    {!props.noArrow && <span className="arrow" />}
  </button>
);

export default Button;
