import * as React from 'react';
import Media from '@source/partials/Media';

interface Benefits {
  text: string;
  image: LooseObject;
}

export interface BenefitsProps {
  data: {
    items: Benefits[];
  };
}

const Benefits = (props: BenefitsProps) => {
  const { items } = props.data;

  return (
    <section className={'benefits'}>
      <div className={'container'}>
        <div className={'grid benefits__list'}>
          {items &&
            items.map((benefit, index) => {
              return (
                <div key={index} className={'grid benefits__list__element'}>
                  {(benefit.image && benefit.image.filename && <Media type={'image'} data={benefit.image} />) || (
                    <img src={'/assets/medicon/images/doctorIcon.svg'} alt="Our benefit" />
                  )}
                  <p>{benefit.text}</p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
