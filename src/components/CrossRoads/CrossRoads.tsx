import * as React from 'react';

import List from '../List';
import Link from '../../partials/Link';
import Media from '../../partials/Media';

export interface CrossRoadsProps {
  languageCode?: string;
  data: {
    items: [
      {
        text: string;
        image: object;
        link: LooseObject;
      }
    ];
  };
}

const CrossRoads = (props: CrossRoadsProps) => {
  const { items } = props.data;
  return (
    <section className={'crossRoads'}>
      <div className={'container'}>
        <div className={'crossRoads__wrapper'}>
          <List data={items}>
            {({ data }) => data &&
              data.map((item, index) => {
                return (
                  <Link
                    {...item.link}
                    className={'crossRoads__card'}
                    key={index}
                  >
                    <div className={'crossRoads__card__img'}>
                      {item.image && <Media type="image" data={item.image} />}
                    </div>
                    {item.text && <p>{item.text}</p>}
                  </Link>
                );
            })}
          </List>
        </div>
      </div>
    </section>
  );
};

export default CrossRoads;