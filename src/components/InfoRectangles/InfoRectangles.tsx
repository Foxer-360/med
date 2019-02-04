import * as React from 'react';
import Button from '@source/partials/Button';
import getImageUrl from '@source/helpers/getImageUrl';
import List from '../List';

interface InfoRectangles {
  image: LooseObject;
  title: string;
  url: LooseObject;
}

export interface InfoRectanglesProps {
  languageCode?: string;
  data: {
    infoRectangles: InfoRectangles[];
  };
}

const InfoRectangles = (props: InfoRectanglesProps) => {
  const { infoRectangles } = props.data;

  return (
    <section className="info-rectangles">
      <div className="container">
        <div className="grid-container">
          <List data={infoRectangles}>
          {({ data }) => data &&
            data.map((rectangle, index) => (
            <div
              key={index}
              className={'info-element'}
              style={{ backgroundImage: rectangle.image && `url(${getImageUrl(rectangle.image)})` }}
            >
              <div>
                <h5>{rectangle.title}</h5>
                <Button classes="btn--blueBorder" url={rectangle.url}>
                  vice info
                </Button>
              </div>
            </div>)
          )}
          </List>
        </div>
      </div>
    </section>
  );
};

export default InfoRectangles;
