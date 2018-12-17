import * as React from 'react';
import Media from '@source/partials/Media';

interface Offer {
  title: string;
  url: string;
  image: LooseObject;
}

export interface JobOffersProps {
  data: {
    title: string;
    offers: Offer[];
  };
}

const jobOffers = (props: JobOffersProps) => {
  const { title, offers } = props.data;

  return (
    <div className={'container'}>
      <section className={'jobOffers'}>
        {title && <h3>{title}</h3>}

        <div className="grid offers">

          {offers && offers.map((item, index) => (
            <a href={item.url} key={index} className={'flexRow offers__element'}>
              
              {(item.image && 
                <Media 
                  type={'background-image'}
                  data={item.image}
                >
                  {item.title && 
                    <p className={'hCenterBlock'}>{item.title}</p>}
                </Media>) || (
                  <div style={{ backgroundImage: 'url(/assets/medicon/images/offers-lekar.png)' }}>
                    {item.title && <p className={'hCenterBlock'}>{item.title}</p>}
                  </div>
                )}

            </a>
          ))}

        </div>
      </section>
    </div>
  );
};

export default jobOffers;
