import * as React from 'react';
import Button from '../../partials/Button';
import Media from '@source/partials/Media';
import Link from '@source/partials/Link';
import List from '../List';

interface Expertise {
  title: string;
  url: LooseObject;
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
        <List data={expertiseList}>
          {({ data }) =>
            data &&
            data.map((item, index) => (
              <Link {...item.url} key={index}>
                <div className="expertiseList__element">
                  <div>{item.image && <Media type={'image'} data={item.image} />}</div>

                  {item.title && <p>{item.title}</p>}
                </div>
              </Link>
            ))
          }
        </List>
      </div>

      {expertiseList.length > 0 && (
        <div className={'container'}>
          <Button classes="btn--blueBkg btn--fullWidth">zobrazit dalši odbornosti</Button>
        </div>
      )}
    </section>
  );
};

export default ExpertiseList;
