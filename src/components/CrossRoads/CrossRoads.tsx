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
        <div className={'crossRoads__wrapper row'}>
          <List data={items}>
            {({ data }) => data &&
              data.map((item, index) => {
                return (
                  <div className={'col-md-12 col-lg-4'} key={index}>
                    <div className={'crossRoads__card'}>
                      <div className={'crossRoads__card__img'}>
                        {item.image && <Media type="image" data={item.image} width={'90'} height={'90'} />}
                      </div>
                      {item.text && <p>{item.text}</p>}
                      {item.link && <Link 
                        {...item.link}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                      />}
                    </div>
                  </div>
                );
            })}
          </List>
        </div>
      </div>
    </section>
  );
};

export default CrossRoads;