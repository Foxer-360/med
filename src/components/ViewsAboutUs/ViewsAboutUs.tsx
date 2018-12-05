import * as React from 'react';

export interface ViewsAboutUsPops {}

const ViewsAboutUs = (props: ViewsAboutUsPops) => {
  return (
    <div className={'viewsAboutUs'}>
      <div className={'container'}>
        <h3>Napsali o nás</h3>
        
        <div className={'grid viewsAboutUs__grid'}>
          <div className={'grid viewsAboutUs__grid__element'}>
            <img src="/assets/medicon/images/review-aboutus-1.jpg" alt="review about us"/>
            <div className={'viewsAboutUs__grid__element--cell'}>
              <cite>
                „Úryvek článku lorem ipsum dolor sit amet, consectetuer adipiscing elit.“
              </cite>
              <a href="#">Zdroj: <strong>Haló noviny</strong></a>
            </div>
          </div>
          <div className={'grid viewsAboutUs__grid__element'}>
            <img src="/assets/medicon/images/review-aboutus-1.jpg" alt="review about us"/>
            <div className={'viewsAboutUs__grid__element--cell'}>
              <cite>
                „Úryvek článku lorem ipsum dolor sit amet, consectetuer adipiscing elit.“
              </cite>
              <a href="#">Zdroj: <strong>Právo</strong></a>
            </div>
          </div>
          <div className={'grid viewsAboutUs__grid__element'}>
            <img src="/assets/medicon/images/review-aboutus-1.jpg" alt="review about us"/>
            <div className={'viewsAboutUs__grid__element--cell'}>
              <cite>
                „Úryvek článku lorem ipsum dolor sit amet, consectetuer adipiscing elit.“
              </cite>
              <a href="#">Zdroj: <strong>Haló noviny</strong></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewsAboutUs;