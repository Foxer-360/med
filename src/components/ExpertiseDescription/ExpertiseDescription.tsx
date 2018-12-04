import * as React from 'react';
import DividerCircles from '../DividerCircles';
import ExpertiseDescriptionCare from './components/ExpertiseDescriptionCare';
import ExpertiseDescriptionInvestigation from './components/ExpertiseDescriptionInvestigation';
import ExpertiseDescriptionBoxes from './components/ExpertiseDescriptionBoxes';

export interface DescriptionProps {}

const data = {
  care: {
    title: 'Poskytovaná péče',

    items: [
      // tslint:disable-next-line:max-line-length
      '<strong>Diagnostika a léčba všech alergických onemocnění</strong> jako např. alergická rýma, alergický zánět spojivek, atopický ekzém, astma bronchiale na alergickém terénu, potravinové alergie, alergie na léky, hmyz nebo kožní alergie.',

      // tslint:disable-next-line:max-line-length
      '<strong>Diagnostika a léčba poruch imunity</strong> (recidivující infekce dýchacích cest, močových cest, opakované herpetické infekce).',

      'Diagnostika <strong>autoimunních onemocnění.</strong>',

      'Vyšetření provádíme u <strong>dětských i dospělých pacientů.</strong>',
    ],
  },

  investigationinves: {
    title: 'Typy vyšetření',

    items: [
      'Kožní prick testy',
      'Krevní odběry k laboratornímu vyšetření',
      'Vyšetření plicních funkcí (spirometrie) včetně zátěžových testů',
    ],
  },
};

const Description = (props: DescriptionProps) => {
  return (
    <div className={'container'}>
    <section className={'expertiseDescription'}>
      <ExpertiseDescriptionCare title={data.care.title} items={data.care.items} />
      <ExpertiseDescriptionInvestigation title={data.investigationinves.title} items={data.investigationinves.items} />
      <DividerCircles />
      <ExpertiseDescriptionBoxes />
      </section>
    </div>
  );
};

export default Description;
