import * as React from 'react';

export interface SelectButtonProps {}

const SelectButton = (props: SelectButtonProps) => (
  <div className={'select-btn hCenterBlock'}>
    <select>
      <option value="Všechny polikliniky">Všechny polikliniky</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
    
    <span className="arrow" />
  </div>
);

export default SelectButton;
    