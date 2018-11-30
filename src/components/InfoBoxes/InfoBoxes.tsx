import * as React from 'react';
import InfoElement from './components/InfoElement';
export interface InfoBoxesProps {}

const data = {
  items: [
    {
      title: 'široký výběr zdravýchpotravin',
      img: '/assets/medicon/images/info-el-1.jpg',
      color: '#5a2a20',
      btn: 'btn--whiteBorder',
      titleColor: '#ffffff',
    },
    {
      title: 'široký výběr zdravýchpotravin',
      img: '/assets/medicon/images/info-el-3.jpg',
      color: '# ',
      btn: 'btn--blueBorder',
      titleColor: '#2eac6c',
    },
    {
      title: 'široký výběr zdravýchpotravin',
      img: '/assets/medicon/images/info-el-2.jpg',
      color: '#ffffff',
      btn: 'btn--whiteBorder',
      titleColor: '#ffffff',
    },
  ]
};

const InfoBoxes = (props: InfoBoxesProps) => {
  return (
    <section className="infoBoxes">
      <h3>Z našich lékáren</h3>

      <div className="grid-container">

        {data.items.map((item, index) => (
          <InfoElement
            color={item.color}  
            title={item.title}
            img={item.img}
            btn={item.btn}
            titleColor={item.titleColor}
            key={index}
          />
        ))}

      </div>
    </section>
  );
};

export default InfoBoxes;
