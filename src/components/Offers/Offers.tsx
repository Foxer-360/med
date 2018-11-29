import * as React from 'react';

export interface OffersProps {};

const Offers = (props: OffersProps) => {
   

  return (
    <div className={'container'}>
      <h3>Aktuální nabídky</h3>
      
      <div className="grid offers">
        
        <a href="#" className={'flexRow offers__element'} style={{ backgroundImage: 'url(/assets/medicon/images/offers-lekar.png)' }}>
          <p className={'hCenterBlock'}>Lékařské pozice</p>
        </a>

        <a href="#" className={'flexRow offers__element'} style={{ backgroundImage: 'url(/assets/medicon/images/offers-ostatni.png)' }}>
          <p className={'hCenterBlock'}>Ostatní pozice</p>
        </a>

      </div>

    </div>
  );
};

export default Offers;