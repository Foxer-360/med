import * as React from 'react';
import Media from '@source/partials/Media';

interface Polyclinic {
  url: string;
  image: LooseObject;
}

export interface PolyclinicBoxesProps {
  data: {
    title: string;
    polyclinics: Polyclinic[];
  };
}

const PolyclinicBoxes = (props: PolyclinicBoxesProps) => {
  const { title, polyclinics } = props.data;
  
  return (
    <section className={'polyclinicBoxes'}>
      <div className={'container'}>
        {title && <h3>{title}</h3>}

        <ul className={'grid'}>

          {polyclinics && polyclinics.map((polyclinic, index) => {
            return (
              <li key={index}>
                <a href="#">
                  {(polyclinic.image && polyclinic.image.filename && 
                    <Media data={polyclinic.image} type={'image'}/>) || (
                    <img 
                      src={'/assets/medicon/images/poliklinika.png'} 
                      alt="poliklinika"
                    />
                  )}
                  
                </a>
              </li>
            );
          })}

        </ul>
      </div>
    </section>
  );
};

export default PolyclinicBoxes;