import * as React from 'react';
import getImageUrl from '@source/helpers/getImageUrl';
import Link from '@source/partials/Link';

interface Offer {
  title: string;
  url: LooseObject;
  image: LooseObject;
}

export interface JobOffersProps {
  languageCode?: string;
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
          {offers &&
            offers.map((offer, index) => (
              <Link
                url={offer.url.url}
                languageCode={props.languageCode}
                key={index}
                className={'flexRow offers__element'}
              >
                {offer.image && (
                  <div style={{ backgroundImage: offer.image && `url(${getImageUrl(offer.image)})` }}>
                    {offer.title && <p className={'hCenterBlock'}>{offer.title}</p>}
                  </div>
                )}
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
};

export default jobOffers;
