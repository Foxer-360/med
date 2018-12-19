import * as React from 'react';
import getImageUrl from '@source/helpers/getImageUrl';

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

          {offers && offers.map((offer, index) => (
            <a href={offer.url} key={index} className={'flexRow offers__element'}>

              {(offer.image && 
                <div style={{ backgroundImage: offer.image && `url(${getImageUrl(offer.image)})` }}>
                  {offer.title && <p className={'hCenterBlock'}>{offer.title}</p>}
                </div>)}

            </a>
          ))}

        </div>
      </section>
    </div>
  );
};

export default jobOffers;
