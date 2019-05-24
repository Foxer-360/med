import * as React from 'react';

import List from '../List';
import Link from '../../partials/Link';
import getImageUrl from '../../helpers/getImageUrl';

interface Offer {
  title: string;
  url: LooseObject;
  image?: LooseObject;
}

export interface JobOffersProps {
  languageCode?: string;
  data: {
    title: string;
    offers: Offer[];
  };
}

const JobOffers = (props: JobOffersProps) => {
  const { title, offers } = props.data;

  return (
    <div className={'container'}>
      <section className={'jobOffers'}>
        {title && <h3>{title}</h3>}

        <div className="grid offers">
          <List data={offers}>
            {({ data }) => data &&
              data.map((offer, index) => (
                <Link
                  key={index}
                  {...offer.url}
                  className={'flexRow offers__element'}
                >
                  <div 
                    style={{ 
                      backgroundImage: (offer.image && offer.image.filename) && `url(${getImageUrl(offer.image)})` 
                    }}
                  >
                    {offer.title && 
                      <p 
                        className={'hCenterBlock'}
                        style={(offer.image && offer.image.filename) ? { paddingLeft: 60 } : {}}
                      >
                        {offer.title}
                      </p>}
                  </div>
                </Link>
              ))}
          </List>
        </div>
      </section>
    </div>
  );
};

export default JobOffers;