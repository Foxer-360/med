import * as React from 'react';

class Reviews extends React.Component<any, any> {
  public render() {
    return (
      <section className="reviews">
        <h3>řekli o nás</h3>
        <div className="container">
          <div className="grid-container">
            <div className="review-el">
              <img className="review-img" src="/assets/medicon/images/photo-1.jpg" alt="photo" />
              <div className="el">
                <cite>„Jedna z nejlepších poliklinik v Praze, od recepčních po lékaře.“</cite>
                <div className="stars">
                  <img src="/assets/medicon/images/star.png" alt="star" />
                  <img src="/assets/medicon/images/star.png" alt="star" />
                  <img src="/assets/medicon/images/star.png" alt="star" />
                  <img src="/assets/medicon/images/star.png" alt="star" />
                  <img src="/assets/medicon/images/star.png" alt="star" />
                </div>
              </div>
            </div>
            {/* end */}
            <div className="review-el">
              <img className="review-img" src="/assets/medicon/images/photo-2.jpg" alt="photo" />
              <div className="el">
                <cite>„Jedna z nejlepších poliklinik v Praze, od recepčních po lékaře.“</cite>
                <div className="stars">
                  <img src="/assets/medicon/images/star.png" alt="star" />
                  <img src="/assets/medicon/images/star.png" alt="star" />
                  <img src="/assets/medicon/images/star.png" alt="star" />
                  <img src="/assets/medicon/images/star.png" alt="star" />
                  <img src="/assets/medicon/images/star.png" alt="star" />
                </div>
              </div>
            </div>
            {/* end */}
            <div className="review-el">
              <img className="review-img" src="/assets/medicon/images/photo-3.jpg" alt="photo" />
              <div className="el">
                <cite>„Jedna z nejlepších poliklinik v Praze, od recepčních po lékaře.“</cite>
                <div className="stars">
                  <img src="/assets/medicon/images/star.png" alt="star" />
                  <img src="/assets/medicon/images/star.png" alt="star" />
                  <img src="/assets/medicon/images/star.png" alt="star" />
                  <img src="/assets/medicon/images/star.png" alt="star" />
                  <img src="/assets/medicon/images/star.png" alt="star" />
                </div>
              </div>
            </div>
            {/* end */}
          </div>
        </div>
      </section>
    );
  }
}

export default Reviews;
