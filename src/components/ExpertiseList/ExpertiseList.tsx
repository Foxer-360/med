import * as React from 'react';
import Button from '../../partials/Button';
import Media from '@source/partials/Media';
import Link from '@source/partials/Link';

interface Expertise {
  title: string;
  url: string;
  image: LooseObject;
}

export interface ExpertiseListProps {
  languageCode?: string;
  data: {
    title: string;
    expertiseList: Expertise[];
  };
}

const ExpertiseList = (props: ExpertiseListProps) => {
  const { title, expertiseList } = props.data;

  return (
    <section className="expertiseList">
      {title && <h3>{title}</h3>}

      <div className="grid-container">
        {expertiseList &&
          expertiseList.map((item, index) => (
            <Link url={item.url} key={index} languageCode={props.languageCode}>
              <div className="expertiseList__element">
                {(item.image && <Media type={'image'} data={item.image} />) || (
                  <img src={'/assets/medicon/images/od-el-1.png'} alt="image" />
                )}

                <p>{item.title}</p>
              </div>
            </Link>
          ))}
      </div>

      <div className={'container'}>
        <Button classes="btn--blueBkg btn--fullWidth">vice info</Button>
      </div>
    </section>
  );
};

export default ExpertiseList;
