import * as React from 'react';

import List from '../List';
import Link from '../../partials/Link';
import getImageUrl from '../../helpers/getImageUrl';
import BckgImgWithFallback from '../../partials/Media/components/BckgImgWithFallback'

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

        <div className="jobOffers__list row">
          <List data={offers}>
            {({ data }) => data &&
              data.map((offer, index) => {
                return (
                  <div key={index} className={'col-md-12 col-lg-6'}>
                    <div className={'jobOffers__list__item'}>
                      <BckgImgWithFallback image={offer.image} sizes={{width: 120, height: 120}}>
                        {offer.title && 
                          <p 
                            className={'hCenterBlock'}
                            style={(offer.image && offer.image.filename) ? { paddingLeft: 60 } : {}}
                          >
                            {offer.title}
                          </p>}
                      </BckgImgWithFallback>
                      {offer.url && <Link 
                        {...offer.url} 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      />}
                    </div>
                  </div>
                );
              })}
          </List>
        </div>
      </section>
    </div>
  );
};

export default JobOffers;