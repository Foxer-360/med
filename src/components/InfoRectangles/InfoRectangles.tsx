import * as React from 'react';
import Button from '@source/partials/Button';
import getImageUrl from '@source/helpers/getImageUrl';

interface InfoRectangles {
  image: LooseObject;
  title: string;
  url: string;
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
        <div className="grid-container">

          {infoRectangles && infoRectangles.map((rectangle, index) => (
            <div 
              key={index}
              className={'info-element'} 
              style={{ backgroundImage: rectangle.image && `url(${getImageUrl(rectangle.image)})` }}>
              <div>
                <h5>{rectangle.title}</h5>
                <Button classes="btn--blueBorder">vice info</Button>
              </div>
            </div>
          ))}
          
        </div>
      </div>
      
    </section>
  );
};

export default InfoRectangles;
