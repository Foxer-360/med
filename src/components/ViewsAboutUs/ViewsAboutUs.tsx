import * as React from 'react';

import List from '../List';
import ViewsAboutUsElement from './components/ViewsAboutUsElement';

interface View {
  url: string;
  link: string;
  cite: string;
  image: LooseObject;
}

export interface ViewsAboutUsPops {
  data: {
    title: string;
    views: View[];
  };
}

const ViewsAboutUs = (props: ViewsAboutUsPops) => {
  const { title, views } = props.data;

  return (
    <div className={'viewsAboutUs'}>
      <div className={'container'}>
        {title && <h3>{title}</h3>}
        
        <div className={'viewsAboutUs__list row'}>
          <List data={views}>
            {({ data }) => data && data.map((item, i) => {
              
              return (
                <ViewsAboutUsElement 
                  key={i}
                  url={item.url}
                  link={item.link}
                  cite={item.cite}
                  image={item.image}
                />
              );
            })}
          </List>
        </div>
      </div>
    </div>
  );
};

export default ViewsAboutUs;