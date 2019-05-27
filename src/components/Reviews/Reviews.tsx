import * as React from 'react';

import List from '../List';
import ReviewElement from './components/ReviewElement';

interface Reviews {
  cite: string;
  image: LooseObject;
  starCount: number;
}

export interface ReviewsProps {
  data: {
    title: string;
    reviews: Reviews[];
  };
}

const Reviews = (props: ReviewsProps) => {
  const { title, reviews } = props.data;

  return (
    <List data={reviews}>
      {({ data }) => (
        <section className={'reviews'}>
          <div className={'container'}>
            {title && <h3>{title}</h3>}

            <div className={'reviews__list row'}>
              {data && data.map((review, i) => (
                <ReviewElement 
                  key={i} 
                  image={review.image} 
                  cite={review.cite} 
                  starCount={review.starCount} 
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </List>
  );
};

export default Reviews;