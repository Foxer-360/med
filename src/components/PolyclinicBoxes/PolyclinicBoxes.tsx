import * as React from 'react';
import Media from '@source/partials/Media';
import Link from '@source/partials/Link';
import List from '../List';

interface Polyclinic {
  url: LooseObject;
  image: LooseObject;
}

export interface PolyclinicBoxesProps {
  languageCode?: string;
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
          <List data={polyclinics}>
          {({ data }) => data &&
            data.map((polyclinic, index) => {
              return (
                <li key={index}>
                  <Link url={polyclinic.url && polyclinic.url.url}>
                    {(polyclinic.image && polyclinic.image.filename && (
                      <Media data={polyclinic.image} type={'image'} />
                    )) || <img src={'/assets/medicon/images/poliklinika.png'} alt="poliklinika" />}
                  </Link>
                </li>
              );
            })}
          </List>
        </ul>
      </div>
    </section>
  );
};

export default PolyclinicBoxes;
