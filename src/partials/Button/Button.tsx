import * as React from 'react';

export interface ButtonProps {
  classes?: string;
  children: string;
}

const Button = (props: ButtonProps) => (
  <button className={`btn ${props.classes}`}>
    {props.children}
    <span className="arrow" />
  </button>  
);

export default Button;
    