import * as React from 'react';
import Link from '../Link';

export interface ButtonProps {
  classes?: string;
  children: string;
  noArrow?: boolean;
  url?: LooseObject;
  languageCode?: string;
}

const Button = (props: ButtonProps) => {
  // Button with link
  if (props.url) {
    return (
      <Link className={`btn ${props.classes}`} url={props.url && props.url.url} languageCode={props.languageCode}>
        {props.children}
        {!props.noArrow && <span className="arrow" />}
      </Link>
    );
  } else {
    return (
      // button with no link
      <button className={`btn ${props.classes}`}>
        {props.children}
        {!props.noArrow && <span className="arrow" />}
      </button>
    );
  }
};

export default Button;
