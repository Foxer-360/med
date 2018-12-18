import * as React from 'react';
import Button from '../../../partials/Button';

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
            style={{ backgroundImage: 'url("/assets/medicon/images/rect-1.jpg' }}
          >
            <div className={'info__element--cell'}>
              {box.title && <h5>{box.title}</h5>}
              <Button classes={'btn--whiteBorder'}>vice info</Button>
            </div>
            <div className={'info__element--colorGradient'} />
          </div>
        ))}

      </div>
    </section>
  );  
};

export default ExpertiseDescriptionBoxes;
