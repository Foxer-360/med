import * as React from 'react';
import Media from '@source/partials/Media';
import Link from '@source/partials/Link';
import List from '../List';

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
                    url={item.link && item.link.url}
                    className={'crossRoads__card'}
                    key={index}
                  >
                    <div className={'crossRoads__card__img'}>
                      {(item.image && <Media type="image" data={item.image} />) || (
                        <img src="./assets/medicon/images/hospitalIcon.svg" />
                      )}
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