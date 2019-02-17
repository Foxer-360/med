import * as React from 'react';
import ViewsAboutUsElement from './components/ViewsAboutUsElement';
import List from '../List';

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
        
        <div className={'grid viewsAboutUs__list'}>
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