import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import SvgIcon from '@source/partials/SvgIcon';
import Link from '@source/partials/Link';

const Social = (props: any) => {
  const { icons, info } = props;

  return (
    <div className="social flexColumn">
      {icons &&
        icons.map((icon, i) => (
          <Link {...icon.url} key={i}>
            <SvgIcon type={'white'} name={icon.name} />
          </Link>
        ))}

      {info && <ReactMarkdown className={'social__text'} source={info} />}
    </div>
  );
};

export default Social;
