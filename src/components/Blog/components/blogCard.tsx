import * as React from 'react';
import SvgIcon from '@source/partials/SvgIcon';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';

export interface BlogCardProps {
  id: string;
  title: string;
  text: string;
  color: string;
  img: string;
  special?: boolean;
}

export function BlogCard(props: BlogCardProps) {
  const { id, title, text, color, img, special } = props;

  if (special) {
    return (
      <Link pageId={id} className={'blogCard blogCard--special'}>
        {title && <h3>{title}</h3>}

        <ul>
          <li>
            <span>
              <SvgIcon name={'arrow'} type={'white'} />
            </span>
            Lékaře ORL
          </li>
          <li>
            <span>
              <SvgIcon name={'arrow'} type={'white'} />
            </span>
            Lékař pracovně - lékařské služby
          </li>
          <li>
            <span>
              <SvgIcon name={'arrow'} type={'white'} />
            </span>
            Dentální hygienista/ka
          </li>
        </ul>
      </Link>
    );
  }

  return (
    <Link pageId={id} className={'blogCard'}>
      {title && <h3>{title}</h3>}

      {text && <p>{text}</p>}

      {console.log('%c Emilio: ', 'background: #222; color: #bada55', img)}
      {img && <Media data={img} type="image" />}

      <div
        className={'blogCard__colorGradient'}
        style={{ background: `linear-gradient( to bottom,rgba(125, 185, 232, 0) 0%,${color} 100%)` }}
      />
    </Link>
  );
}
