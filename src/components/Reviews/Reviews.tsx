import * as React from 'react';
import ReviewElement from './components/ReviewElement';

export interface ReviewsProps {}

const data = {
  items: [
    {
      img: '/assets/medicon/images/photo-1.jpg',
      cite: '„Jedna z nejlepších poliklinik v Praze, od recepčních po lékaře.“',
      starCount: 5,
    },
    {
      img: '/assets/medicon/images/photo-2.jpg',
      cite: '„Jedna z nejlepších poliklinik v Praze, od recepčních po lékaře.“',
      starCount: 5,
    },
    {
      img: '/assets/medicon/images/photo-3.jpg',
      cite: '„Jedna z nejlepších poliklinik v Praze, od recepčních po lékaře.“',
      starCount: 5,
    },
  ],
};

class Reviews extends React.Component<any, any> {
  public render() {
    return (
      <section className="reviews">
        <h3>řekli o nás</h3>
        <div className="container">
          <div className="grid reviews__list">
            {data.items.map((item, index) => (
              <ReviewElement key={index} img={item.img} cite={item.cite} starCount={item.starCount} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Reviews;
