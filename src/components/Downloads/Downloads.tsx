import * as React from 'react';

import List from '../List';
import SvgIcon from '../../partials/SvgIcon';
import DividerCircles from '../DividerCircles';
import getUrl from '../../helpers/getImageUrl';

interface Downloads {
  title: string;
  file?: LooseObject;
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
    <div className={'downloads'}>
      <div className={'container'}>
        {title && <h3>{title}</h3>}

        {description && <p>{description}</p>}

        <div className="downloads__list row">
          <List data={downloads}>
            {({ data }) => data && data.map((item, i) => (
              <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3" key={i}>
                <div className={'downloads__list__element'}>
                  {item.title && <p>{item.title}</p>}
                  {item.file &&
                    <a 
                      href={getUrl(item.file)}
                      download={true} 
                      target={'_blank'} 
                      className={'btn btn--blueBorder'}
                    >
                      Stáhnout
                      <SvgIcon name={'download'} type={'lightBlue'} />
                    </a>
                  }
                </div>
              </div>
            ))}
          </List>
        </div>
      </div>
      <DividerCircles />
    </div>
  );
};

export default Downloads;