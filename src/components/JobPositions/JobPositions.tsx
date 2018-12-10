import * as React from 'react';
import Button from '../../partials/Button';
import SelectButton from './components/index';

export interface JobPositionsProps {}

const data = {
  title: 'Výpis aktuálních pozic',

  items: [
    {
      position: 'Dermatolog',
      img: '/assets/medicon/images/positions-1.jpg',
    },
    {
      position: 'Gynekolog',
      img: '/assets/medicon/images/positions-2.jpg',
    },
    {
      position: 'Ortoped',
      img: '/assets/medicon/images/positions-3.jpg',
    },
  ],
};

const JobPositions = (props: JobPositionsProps) => {
  return (
    <div className={'container actual-positions'}>
      <h3>{data.title}</h3>

      <SelectButton />

      <div className={'grid positions'}>
        {data.items.map((item, index) => (
          <div className={'positions__element'} style={{ backgroundImage: `url(${item.img})` }} key={index}>
            <div className={'positions__element-content'}>
              <p>{item.position}</p>
              <Button classes={'btn--whiteBorder'}>Vice info</Button>
            </div>

            <div
              className={'positions__colorGradient'}
              style={{ background: `linear-gradient(to bottom, transparent 0%, #2473ba 100%)` }}
            />
          </div>
        ))}
      </div>

      <Button classes="hCenterBlock btn--blueBkg btn--down">další pozice</Button>
    </div>
  );
};

export default JobPositions;
