import * as React from 'react';

export interface PolyclinicBoxesProps {}

const PolyclinicBoxes = (props: PolyclinicBoxesProps) => {
  return (
    <div className="polyclinicBoxes container">
      <h3>Další polikliniky</h3>
      <ul className="flexRow">
        <li>
          <a href="#"><img src="/assets/medicon/images/poliklinika.png" alt="poliklinika" /></a>
        </li>
        <li>
          <a href="#"><img src="/assets/medicon/images/poliklinika.png" alt="poliklinika" /></a>
        </li>
        <li>
          <a href="#"><img src="/assets/medicon/images/poliklinika.png" alt="poliklinika" /></a>
        </li>
        <li>
          <a href="#"><img src="/assets/medicon/images/poliklinika.png" alt="poliklinika" /></a>
        </li>
      </ul>
    </div>
  );
};

export default PolyclinicBoxes;
