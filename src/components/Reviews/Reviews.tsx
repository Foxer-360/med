import * as React from 'react';
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
    <section className="reviews">
      {title && <h3>{title}</h3>}
      <div className="container">
        <div className="grid reviews__list">
          {reviews && reviews.map((review, index) => (
            <ReviewElement key={index} image={review.image} cite={review.cite} starCount={review.starCount} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;