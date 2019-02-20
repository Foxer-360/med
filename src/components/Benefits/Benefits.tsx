import * as React from 'react';
import Media from '@source/partials/Media';
import List from '../List';
import Link from '@source/partials/Link';

interface Benefits {
  text: string;
  image: LooseObject;
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
            <div className={'benefits__list grid'}>
              {data &&
                data.map((benefit, index) => {
                  return benefit.url ? (
                    <Link key={index} url={benefit.url.url} className={'benefits__list__element grid'}>
                      {benefit.image && benefit.image.filename && <Media type={'image'} data={benefit.image} />}

                      {benefit.text && <p>{benefit.text}</p>}
                    </Link>
                  ) : (
                    <div key={index} className={'benefits__list__element grid'}>
                      <div>
                        {benefit.image && benefit.image.filename && <Media type={'image'} data={benefit.image} />}
                      </div>

                      {benefit.text && <p>{benefit.text}</p>}
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      )}
    </List>
  );
};

export default Benefits;
