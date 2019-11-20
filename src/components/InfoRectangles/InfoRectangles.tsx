import * as React from 'react';

import List from '../List';
import Button from '../../partials/Button';
import getImageUrl from '../../helpers/getImageUrl';
import BckgImgWithFallback from '../../partials/Media/components/BckgImgWithFallback'

interface InfoRectangles {
  title: string;
  url?: LooseObject;
  image?: LooseObject;
}

export interface InfoRectanglesProps {
  data: {
    infoRectangles: InfoRectangles[];
  };
}

const InfoRectangles = (props: InfoRectanglesProps) => {
  const { infoRectangles } = props.data;

  return (
    <section className="info-rectangles">
      <div className="container">
        <div className="row">
          <List data={infoRectangles}>
            {({ data }) => data && data.map((rectangle, i) => (
              <div key={i} className="col-sm-12 col-md-6">
                <BckgImgWithFallback classes={'info-rectangles__item'} sizes={{width: '386', height: '350'}} image={rectangle.image}>
                  <div>
                    {rectangle.title && <h5>{rectangle.title}</h5>}
                    <Button classes="btn--blueBorder" url={rectangle.url}>
                      více informací
                    </Button>
                  </div>
                </BckgImgWithFallback>
              </div>)
            )}
          </List>
        </div>
      </div>
    </section>
  );
};

export default InfoRectangles;