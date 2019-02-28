import * as React from 'react';
import DividerCircles from '../DividerCircles';
import SvgIcon from '@source/partials/SvgIcon';
import Link from '@source/partials/Link';
import List from '../List';

interface Downloads {
  title: string;
  url: string;
}

export interface DownloadsProps {
  data: {
    title: string;
    description: string;
    downloads: Downloads[];
  };
}

const Downloads = (props: DownloadsProps) => {
  const { title, description, downloads } = props.data;

  return (
    <div className={'container'}>
      <div className={'downloads'}>
        {title && <h3>{title}</h3>}

        {description && <p>{description}</p>}

        <div className="grid downloads__list">
          <List data={downloads}>
            {({ data }) =>
              data &&
              data.map((item, i) => (
                <div className={'downloads__list__element'} key={i}>
                  {item.title && <p>{item.title}</p>}
                  {item.url && item.url.url && (
                    <Link url={item.url.url} className={'btn btn--blueBorder'}>
                      Stáhnout
                      <SvgIcon name={'download'} type={'lightBlue'} />
                    </Link>
                  )}
                </div>
              ))
            }
          </List>
        </div>
      </div>
      <DividerCircles />
    </div>
  );
};

export default Downloads;
