import * as React from 'react';
import Button from '@source/partials/Button';

export interface FaqProps {}

const data = {
  items: [
    {
      title: 'Lorem ipsum dolor sit amet?',
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu bibendum nulla, ac efficitur odio. Maecenas eu ligula eget ipsum scelerisque posuere. Integer rutrum tristique nisl hendrerit fringilla. Etiam interdum nunc nec scelerisque pulvinar. Phasellus iaculis commodo dui, non aliquet est egestas eget. Nullam arcu enim, laoreet non consectetur in, sodales eu risus.',
    },
    {
      title: 'Lorem ipsum dolor sit amet?',
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu bibendum nulla, ac efficitur odio. Maecenas eu ligula eget ipsum scelerisque posuere. Integer rutrum tristique nisl hendrerit fringilla. Etiam interdum nunc nec scelerisque pulvinar. Phasellus iaculis commodo dui, non aliquet est egestas eget. Nullam arcu enim, laoreet non consectetur in, sodales eu risus.',
    },
    {
      title: 'Lorem ipsum dolor sit amet?',
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu bibendum nulla, ac efficitur odio. Maecenas eu ligula eget ipsum scelerisque posuere. Integer rutrum tristique nisl hendrerit fringilla. Etiam interdum nunc nec scelerisque pulvinar. Phasellus iaculis commodo dui, non aliquet est egestas eget. Nullam arcu enim, laoreet non consectetur in, sodales eu risus.',
    },
    {
      title: 'Lorem ipsum dolor sit amet?',
      // tslint:disable-next-line:max-line-length
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu bibendum nulla, ac efficitur odio. Maecenas eu ligula eget ipsum scelerisque posuere. Integer rutrum tristique nisl hendrerit fringilla. Etiam interdum nunc nec scelerisque pulvinar. Phasellus iaculis commodo dui, non aliquet est egestas eget. Nullam arcu enim, laoreet non consectetur in, sodales eu risus.',
    }
  ]
};

const Faq = (props: FaqProps) => {
  const { items } = data;

  return (
    <div className={'faq'}>
      <div className={'container'}>

        {items && items.map((item, index) => {
          return (
            <div key={index} className={'faq__element'}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
        <Button classes={'hCenterBlock btn--blueBkg btn--down btn--fullWidth'}>více info</Button>
      
      </div>
    </div>
    
  );
};

export default Faq;