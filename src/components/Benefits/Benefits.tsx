import * as React from 'react';
import Media from '@source/partials/Media';

export interface BenefitsProps { 
  data: {
    items: [
      {
        text: string;
        image: object;
      }
    ];
  };
}

const Benefits = (props: BenefitsProps) => {
  const { items } = props.data;

  return (
    <section className={'benefits'}>
      <div className={'container'}>
        <div className={'grid benefits__list'}>
          
          {/* /assets/medicon/images/benefity1.png */}
          {items && items.map((item, index) => {
            return (
              <div key={index} className={'grid benefits__list__element'}>
                <Media type={'image'} data={item.image} />
                <p>{item.text}</p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Benefits;
