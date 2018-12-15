import * as React from 'react';
import Button from '../../partials/Button';
import Media from '@source/partials/Media';

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
            <Media type={'background-image'} classes={'info-element'} data={rectangle.image} key={index}>
              <div>
                <h5>{rectangle.title}</h5>
                <Button classes="btn--blueBorder">vice info</Button>
              </div>
            </Media>
          ))}
          
        </div>
      </div>
      
    </section>
  );
};

export default InfoRectangles;
