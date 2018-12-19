import * as React from 'react';
import Button from '@source/partials/Button';
import getImageUrl from '@source/helpers/getImageUrl';
import SelectButton from './components/index';

interface Position {
  name: string;
  url: string;
  polyclinic: string;
  image: LooseObject;
}

export interface JobPositionsProps {
  data: {
    title: string;
    positions: Position[];
  };
}

const JobPositions = (props: JobPositionsProps) => {
  const { title, positions } = props.data;

  let polyclinics = [];
  if (positions && positions.length > 0) {
    positions.map((position, i) => {
      polyclinics.push(position.polyclinic);
    });
  }
  
  return (
    <div className={'container actual-positions'}>
      {title && <h3>{title}</h3>}

      <SelectButton polyclinics={polyclinics} />

      <div className={'grid positions'}>
        {positions && positions.map((position, index) => (
          <div 
            className={'positions__element'} 
            style={{ backgroundImage: position.image && `url(${getImageUrl(position.image)})` }}
            key={index}
          >
            <div className={'positions__element-content'}>
              <p>{position.name}</p>
              <Button classes={'btn--whiteBorder btn--fullWidth'}>Vice info</Button>
            </div>

            <div
              className={'positions__colorGradient'}
              style={{ background: `linear-gradient(to bottom, transparent 0%, #2473ba 100%)` }}
            />
          </div>
        ))}
      </div>

      <Button classes="hCenterBlock btn--blueBkg btn--down btn--fullWidth">další pozice</Button>
    </div>
  );
};

export default JobPositions;
