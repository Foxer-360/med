import * as React from 'react';

export interface ExpertiseDescriptionCareProps {
  title: string;
  items: Array<string>;
}

const ExpertiseDescriptionCare = (props: ExpertiseDescriptionCareProps) => {
  const { title } = props;

  return (
    <div className={'care'}>
      <h3>{title}</h3>
      <div className={'hCenterBlock'}>
        <p>
          <strong>Diagnostika a léčba všech alergických onemocnění</strong> jako např. alergická rýma, alergický zánět
          spojivek, atopický ekzém, astma bronchiale na alergickém terénu, potravinové alergie, alergie na léky, hmyz
          nebo kožní alergie.
        </p>
        <p>
          <strong>Diagnostika a léčba poruch imunity</strong> (recidivující infekce dýchacích cest, močových cest,
          opakované herpetické infekce).
        </p>
        <p>
          Diagnostika <strong>autoimunních onemocnění.</strong>
        </p>
        <p>
          Vyšetření provádíme u <strong>dětských i dospělých pacientů.</strong>
        </p>
      </div>
    </div>
  );
};

export default ExpertiseDescriptionCare;
