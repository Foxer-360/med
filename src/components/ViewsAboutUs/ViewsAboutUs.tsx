import * as React from 'react';
import ViewsAboutUsElement from './components/ViewsAboutUsElement';

export interface ViewsAboutUsPops {}

const data = {
  items: [
    {
      img: '/assets/medicon/images/review-aboutus-1.jpg',
      cite: '„Úryvek článku lorem ipsum dolor sit amet, consectetuer adipiscing elit.“',      
    },
    {
      img: '/assets/medicon/images/review-aboutus-1.jpg',
      cite: '„Úryvek článku lorem ipsum dolor sit amet, consectetuer adipiscing elit.“',      
    },
    {
      img: '/assets/medicon/images/review-aboutus-1.jpg',
      cite: '„Úryvek článku lorem ipsum dolor sit amet, consectetuer adipiscing elit.“',      
    },
  ]
};

const ViewsAboutUs = (props: ViewsAboutUsPops) => {
  return (
    <div className={'viewsAboutUs'}>
      <div className={'container'}>
        <h3>Napsali o nás</h3>
        
        <div className={'grid viewsAboutUs__list'}>
          {data.items.map((item, index) => (
            <ViewsAboutUsElement 
              key={index}
              img={item.img} 
              cite={item.cite} 
            />  
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewsAboutUs;