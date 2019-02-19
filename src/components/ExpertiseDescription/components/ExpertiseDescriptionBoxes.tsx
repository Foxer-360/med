import * as React from 'react';
import getImageUrl from '../../../helpers/getImageUrl';
import Button from '@source/partials/Button';

export interface ExpertiseDescriptionBoxesProps {
  boxes: Array<any>;
}

const ExpertiseDescriptionBoxes = (props: ExpertiseDescriptionBoxesProps) => {
  const { boxes } = props;

  return (
    <section className="info">
      <div className="grid-container">
        
        {boxes && boxes.map((box, i) => (
          <div
            key={i} 
            className={'info__element'} 
            style={{ backgroundImage: box.image && `url(${getImageUrl(box.image)})` }}
          >
            <div className={'info__element--cell'}>
              {box.title && <h5>{box.title}</h5>}
                <div>
                  <Button url={box.url} classes={'btn--whiteBorder'}>
                    vice info
                  </Button>
                </div>
            </div>
            <div className={'info__element--colorGradient'} />
          </div>
        ))}

      </div>
    </section>
  );  
};

export default ExpertiseDescriptionBoxes;
