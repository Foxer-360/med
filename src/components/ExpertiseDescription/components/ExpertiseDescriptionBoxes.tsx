import * as React from 'react';

import Link from '../../../partials/Link';
import Button from '../../../partials/Button';
import getImageUrl from '../../../helpers/getImageUrl';

export interface ExpertiseDescriptionBoxesProps {
  // tslint:disable-next-line:no-any
  boxes: Array<any>;
}

const ExpertiseDescriptionBoxes = (props: ExpertiseDescriptionBoxesProps) => {
  const { boxes } = props;

  return (
    <section className="info">
      <div className="row">
        
        {boxes && boxes.map((box, i) => (
          <div key={i} className="col-sm-12 col-md-6">
            <div
              className={'info__element'} 
              style={{ backgroundImage: box.image && `url(${getImageUrl(box.image)})` }}
            >
              <div className={'info__element--cell'}>
                {box.title && <h5 style={box.textColor ? { color: box.textColor} : {}}>{box.title}</h5>}
                
                {!box.url2 && !box.url3 && 
                  <div style={{ maxWidth: 260 }}>
                    <Button url={box.url1} classes={'btn--whiteBorder'}>
                      {box.url1Title ? box.url1Title : 'více informací'}
                    </Button>
                  </div>}
                
                {(box.url2 || box.url3) &&
                  <div style={{ paddingLeft: 20 }}>
                    {box.url1 && (box.url2 || box.url3) && 
                      <Link 
                        {...box.url1} 
                        className={'downloadLink'} 
                        style={box.textColor ? { color: box.textColor} : {}}
                      >
                        {box.url1Title ? box.url1Title : 'více informací'}
                      </Link>}
                      {box.url2 && 
                        <Link 
                          {...box.url2} 
                          className={'downloadLink'} 
                          style={box.textColor ? { color: box.textColor} : {}}
                        >
                          {box.url2Title ? box.url2Title : 'více informací'}
                        </Link>
                      }
                      {box.url3 && 
                      <Link 
                        {...box.url3} 
                        className={'downloadLink'} 
                        style={box.textColor ? { color: box.textColor} : {}}
                      >
                        {box.url3Title ? box.url3Title : 'více informací'}
                      </Link>}
                  </div>}
              
              </div>
              <div className={'info__element--colorGradient'} />
            </div>
          </div>
        ))}

      </div>
    </section>
  );  
};

export default ExpertiseDescriptionBoxes;