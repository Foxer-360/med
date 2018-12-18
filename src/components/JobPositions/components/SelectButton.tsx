import * as React from 'react';

export interface SelectButtonProps {
  polyclinics: any[];
}

const SelectButton = (props: SelectButtonProps) => {
  const { polyclinics } = props;

  return (
    <div className={'select-btn hCenterBlock'}>
      <select>
        <option value="Všechny polikliniky">Všechny polikliniky</option>
        {polyclinics && polyclinics.map((polyclinic, i) => (
          <option value={polyclinic} key={i}>{polyclinic}</option>
        ))}
      </select>
      
      <span className="arrow" />
    </div>
  );
};

export default SelectButton;
    