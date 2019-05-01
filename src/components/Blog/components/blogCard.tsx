import * as React from 'react';

import Link from '@source/partials/Link';
import Media from '@source/partials/Media';

export interface BlogCardProps {
  url?: LooseObject;
  title: string;
  text: string;
  color: string;
  img?: LooseObject;
  special?: boolean;
}

export function BlogCard(props: BlogCardProps) {
  const { url, title, text, color, img, special } = props;

  if (special) {
    return (
      <Link className={'blogCard blogCard--special'}>
        <h3>{title}</h3>
        <p>{text}</p>
      </Link>
    );
  }

  return (
    <Link className={'blogCard'} {...url}>
      <h3>{title}</h3>
      <p>{text}</p>

      {img && <Media type={'image'} data={img} />}
      <div
        className={'blogCard__colorGradient'}
        style={{ background: `linear-gradient( to bottom,rgba(125, 185, 232, 0) 0%,${color} 100%)` }}
      />
    </Link>
  );
}