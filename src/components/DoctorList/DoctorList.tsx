import * as React from 'react';

export interface DoctorListProps {}

// ! MOCK DATA ONLY
const data = {
  title: 'text',

  items: [
    {
      name: 'MUDr. Jana Pavluchová',
      field: 'Alergologie a Imunologie',
      clinic: 'Poliklinika Budějovická',
      img: '/assets/medicon/images/doctorlist1.png',
    },
    {
      name: 'MUDr. Michala Jakubíková, Ph.D.',
      field: 'Neurologie',
      clinic: 'Poliklinika Vysočany',
      img: '/assets/medicon/images/doctorlist1.png',
    },
    {
      name: 'MUDr. Michala Pelikánová',
      field: 'Diabetologie',
      clinic: ' Poliklinika Budějovická',
      img: '/assets/medicon/images/doctorlist1.png',
    },
    {
      name: 'MUDr. Petr Novák',
      field: 'Ortopedie',
      clinic: 'Poliklinika Zelený pruh',
      img: '/assets/medicon/images/doctorlist1.png',
    },
  ],
};

const DoctorList = (props: DoctorListProps) => {
  const { items, title } = data;

  return (
    <section className={'doctorList'}>
      <div className={'container'}>
        {title && <h3>{title}</h3>}

        <div className="doctorList__wrapper">
          {items &&
            items.map((item, index) => {
              return (
                <div className={'doctorList__item'} key={index}>
                  <div className={'doctorList__item__img'}>
                    <img src={item.img} alt="" />
                  </div>

                  <div className={'doctorList__item__info'}>
                    <h3>{item.name}</h3>

                    <p>{item.field}</p>

                    <a className={'doctorList__item__info__link'} href="">
                      {item.clinic}
                    </a>

                    <button className={'btn btnFirst btn--small'}>vice info</button>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="doctorList__btnHolder">
          <button className={'btn btnFirst'}>zobrazit vice</button>
        </div>
      </div>
    </section>
  );
};

export default DoctorList;
