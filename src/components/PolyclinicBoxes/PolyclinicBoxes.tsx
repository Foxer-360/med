import * as React from 'react';

export interface PolyclinicBoxesProps {}

const PolyclinicBoxes = (props: PolyclinicBoxesProps) => {
  return (
    <div className="polyclinicBoxes">
      <h3>Další polikliniky</h3>
      <div className="grid-container">   
        <a href="#">
          <img src="/assets/medicon/images/poliklinika.png" alt="poliklinika" />
        </a>
        <a href="#">
          <img src="/assets/medicon/images/poliklinika.png" alt="poliklinika" />
        </a>
        <a href="#">
          <img src="/assets/medicon/images/poliklinika.png" alt="poliklinika" />
        </a>
        <a href="#">
          <img src="/assets/medicon/images/poliklinika.png" alt="poliklinika" />
        </a>
      </div>
    </div>
  );
};

export default PolyclinicBoxes;
