import * as React from 'react';

import List from '../List';
import Link from '../../partials/Link';
import Media from '../../partials/Media';

interface Benefits {
  text: string;
  image?: LooseObject;
  url?: LooseObject;
}

export interface BenefitsProps {
  data: {
    items: Benefits[];
  };
}

const Benefits = (props: BenefitsProps) => {
  const { items } = props.data;

  return (
    <List data={items}>
      {({ data }) => (
        <section className={'benefits'}>
          <div className={'container'}>
            <div className={'benefits__list row'}>
              {data && data.map((benefit, i) => (
                <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
                
                  <Link {...benefit.url} className={'benefits__list__element'}>
                    {benefit.image && benefit.image.filename && 
                    <Media type={'image'} data={benefit.image} width={'65'} height={'66'} />}
                    {benefit.text && <p className={benefit.url && 'elBenefitHover'}>{benefit.text}</p>}
                  </Link>

                </div>))}
            </div>
          </div>
        </section>
      )}
    </List>
  );
};

export default Benefits;
