import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import SvgIcon from '@source/partials/SvgIcon';

const Social = (props: any) => {
  const { icons, info } = props;

  return (
    <div className="social flexColumn">

      {icons && icons.map((icon, i) => (
        <a href={icon.url} key={i}>
          <SvgIcon type={'white'} name={icon.name} />
        </a>
      ))}
      
      {info && 
        <ReactMarkdown className={'social__text'} source={info} />
      }

  </div>
  );
};

export default Social;