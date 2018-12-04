import * as React from 'react';
import DividerCircles from '../DividerCircles';
import ExpertiseDescriptionCare from './components/ExpertiseDescriptionCare';
import ExpertiseDescriptionInvestigation from './components/ExpertiseDescriptionInvestigation';
import ExpertiseDescriptionBoxes from './components/ExpertiseDescriptionBoxes';
var data = {
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
var Description = function (props) {
    return (React.createElement("div", { className: 'container' },
        React.createElement(ExpertiseDescriptionCare, { title: data.care.title, items: data.care.items }),
        React.createElement(ExpertiseDescriptionInvestigation, { title: data.investigationinves.title, items: data.investigationinves.items }),
        React.createElement(DividerCircles, null),
        React.createElement(ExpertiseDescriptionBoxes, null)));
};
export default Description;
//# sourceMappingURL=ExpertiseDescription.js.map