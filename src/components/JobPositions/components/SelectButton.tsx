import * as React from 'react';

export interface SelectButtonProps {}

const SelectButton = (props: SelectButtonProps) => (
  <div className={'select-btn hCenterBlock'}>
    <select>
      <option value="Všechny polikliniky">Všechny polikliniky</option>
      <option value="saab">Poliklinika 1</option>
      <option value="mercedes">Poliklinika 2</option>
      <option value="audi">Poliklinika 3</option>
    </select>
    
    <span className="arrow" />
  </div>
);

export default SelectButton;
    