import * as React from 'react';

import Link from '../../../partials/Link';
import Media from '../../../partials/Media';

export interface BlogCardProps {
  url?: LooseObject;
  title: string;
  text: string;
  color: string;
  img?: LooseObject;
}

export function BlogCard(props: BlogCardProps) {
  const { url, title, text, color, img } = props;

  return (
    <Link className={'blogCard'} {...url}>
      <h3>{title}</h3>
      <p>{text && text.length > 80 ? text.slice(0, 80) + ' ..' : text}</p>

      {img && <Media type={'image'} data={img} width={'393'} height={'400'} />}
      <div
        className={'blogCard__colorGradient'}
        style={{ background: `linear-gradient( to bottom,rgba(125, 185, 232, 0) 0%,${color} 100%)` }}
      />
    </Link>
  );
}