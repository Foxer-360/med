import * as React from 'react';
import Button from '../Button';
export interface ExpertiseListProps {}

const ExpertiseList = (props: ExpertiseListProps) => {
  return (
    <section className="expertiseList">
      <h3>Odbornosti</h3>  
      
      <div className="grid-container">
        <div className="expertiseList__element">
          <img src="/assets/medicon/images/od-el-1.png" alt="image" />
          <p>Alergologie</p>
        </div>
        <div className="expertiseList__element">
          <img src="/assets/medicon/images/od-el-2.png" alt="image" />
          <p>gynekologie</p>
        </div>
        <div className="expertiseList__element">
          <img src="/assets/medicon/images/od-el-3.png" alt="image" />
          <p>chirurgie</p>
        </div>
        <div className="expertiseList__element">
          <img src="/assets/medicon/images/od-el-4.png" alt="image" />
          <p>CT/MR</p>
        </div>
        <div className="expertiseList__element">
          <img src="/assets/medicon/images/od-el-5.png" alt="image" />
          <p>eeg</p>
        </div>
        <div className="expertiseList__element">
          <img src="/assets/medicon/images/od-el-6.png" alt="image" />
          <p>foniatrie</p>
        </div>
        <div className="expertiseList__element">
          <img src="/assets/medicon/images/od-el-7.png" alt="image" />
          <p>neurologie</p>
        </div>
        <div className="expertiseList__element">
          <img src="/assets/medicon/images/od-el-8.png" alt="image" />
          <p>gyneorlkologie</p>
        </div>
      </div>
      <Button classes="btn--blueBkg">vice info</Button>
    </section>
  );
};

export default ExpertiseList;