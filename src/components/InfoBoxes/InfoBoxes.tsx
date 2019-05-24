import * as React from 'react';

import List from '../List';
import InfoElement from './components/InfoElement';

interface Box {
  title: string;
  gradientColor: string;
  button: string;
  titleColor: string;
  image: LooseObject;
  link?: LooseObject;
}

export interface InfoBoxesProps {
  languageCode?: string;
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
          <List data={boxes}>
            {({ data }) => data &&
              data.map((box, i) => (
                <InfoElement
                  link={box.link}
                  gradientColor={box.gradientColor}
                  title={box.title}
                  image={box.image}
                  button={box.button}
                  titleColor={box.titleColor}
                  key={i}
                />))}
          </List>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
