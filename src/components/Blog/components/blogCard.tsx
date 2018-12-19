import * as React from 'react';
import SvgIcon from '@source/partials/SvgIcon';

export interface BlogCardProps {
  title: string;
  text: string;
  color: string;
  img: string;
  special?: boolean;
}

export function BlogCard(props: BlogCardProps) {
  const { title, text, color, img, special } = props;

  if (special) {
    return (
      <a href="" className={'blogCard blogCard--special'}>
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
      </a>
    );
  }

  return (
    <a href="" className={'blogCard'}>
      {title && <h3>{title}</h3>}

      {text && <p>{text}</p>}

      <img src={img} alt="" />

      <div
        className={'blogCard__colorGradient'}
        style={{ background: `linear-gradient( to bottom,rgba(125, 185, 232, 0) 0%,${color} 100%)` }}
      />
    </a>
  );
}
