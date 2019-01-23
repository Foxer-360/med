import * as React from 'react';
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
        
        <div className={'grid viewsAboutUs__list'}>
          {views && views.map((item, i) => (
            <ViewsAboutUsElement 
              key={i}
              url={item.url}
              link={item.link}
              cite={item.cite}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewsAboutUs;