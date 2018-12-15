import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import SvgIcon from '@source/partials/SvgIcon';

const Social = (props: any) => {
  const { icons, information } = props.data;

  return (
    <div className="social flexColumn">

      {icons && icons.map((icon, index) => (
        <a href={icon.url} key={index}>
          <SvgIcon type={'white'} name={icon.name} />
        </a>
      ))}
      
      {information && 
        <ReactMarkdown className={'social__text'} source={information} />
      }

  </div>
  );
};

export default Social;