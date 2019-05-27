import * as React from 'react';

import List from '../List';
import Link from '../../partials/Link';
import Media from '../../partials/Media';
import DividerCircles from '../DividerCircles';

interface Polyclinic {
  url?: LooseObject;
  image?: LooseObject;
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
      <DividerCircles />

      <div className={'container'}>
        {title && <h3>{title}</h3>}

        <div className={'polyclinicBoxes__list row'}>
          <List data={polyclinics}>
            {({ data }) =>
              data && data.map((polyclinic, index) => {
                const { url, name, image } = polyclinic;

                return (
                  <div key={index} className={'col-sm-12 col-lg-6 col-xl-3'}>
                    <div className={'polyclinicBoxes__list__item'}>
                      <Link {...url} />
                      <div className={'colorGradient'} />
                      {image && image.filename && <Media data={image} type={'image'} />}

                      {name && (
                        <div className={'pcTitle'}>
                          <img src="/assets/medicon/images/logo.svg" alt="Medicon Logo" />

                          <div className={'pcTitle__title'}>
                            <h3>Poliklinika</h3>
                            <div className={'pcTitle__title__subtitle'}>
                              <span>{name}</span>
                              <span className={'pcTitle__title__subtitle__circles'}>
                                <div />
                                <div />
                                <div />
                                <div />
                                <div />
                                <div />
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </List>
        </div>
      </div>
    </section>
  );
};

export default PolyclinicBoxes;
