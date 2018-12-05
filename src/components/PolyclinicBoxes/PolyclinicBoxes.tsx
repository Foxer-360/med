import * as React from 'react';

export interface PolyclinicBoxesProps {}

const PolyclinicBoxes = (props: PolyclinicBoxesProps) => {
  return (
    <div className={'polyclinicBoxes'}>
      <div className={'container'}>
        <h3>Další polikliniky</h3>

        <ul className={'grid'}>
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
    </div>
  );
};

export default PolyclinicBoxes;