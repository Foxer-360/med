import * as React from 'react';

import List from '../List';
import InfoElement from './components/InfoElement';

interface Box {
  title: string;
  button: string;
  titleColor: string;
  gradientColor: string;
  image: LooseObject;
  link?: LooseObject;
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
      <div className={'container'}>
        {title && <h3>{title}</h3>}

          <div className={'info-boxes__list row'}>
            <List data={boxes}>
              {({ data }) => data &&
                data.map((box, i) => (
                  <InfoElement
                    key={i}
                    link={box.link}
                    title={box.title}
                    image={box.image}
                    button={box.button}
                    titleColor={box.titleColor}
                    gradientColor={box.gradientColor}
                  />))}
            </List>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
