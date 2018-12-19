import * as React from 'react';
import InfoElement from './components/InfoElement';

interface Box {
  title: string;
  gradientColor: string;
  button: string;
  titleColor: string;
  image: LooseObject;
}

export interface InfoBoxesProps {
  data: {
    title: string;
    boxes: Box[];
  };
}

const InfoBoxes = (props: InfoBoxesProps) => {
  const { title, boxes } = props.data;

  return (
    <section className={'info-boxes'}>
      {title && <h3>{title}</h3>}

      <div className={'container'}>
        <div className={'grid info-boxes__list'}>
          {boxes && boxes.map((box, i) => (
            <InfoElement
              gradientColor={box.gradientColor}
              title={box.title}
              image={box.image}
              button={box.button}
              titleColor={box.titleColor}
              key={i}
            />
          ))}

        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;