"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _DividerCircles = _interopRequireDefault(require("../DividerCircles"));

var _ExpertiseDescriptionCare = _interopRequireDefault(require("./components/ExpertiseDescriptionCare"));

var _ExpertiseDescriptionInvestigation = _interopRequireDefault(require("./components/ExpertiseDescriptionInvestigation"));

var _ExpertiseDescriptionBoxes = _interopRequireDefault(require("./components/ExpertiseDescriptionBoxes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var data = {
  care: {
    title: 'Poskytovaná péče',
    items: [// tslint:disable-next-line:max-line-length
    '<strong>Diagnostika a léčba všech alergických onemocnění</strong> jako např. alergická rýma, alergický zánět spojivek, atopický ekzém, astma bronchiale na alergickém terénu, potravinové alergie, alergie na léky, hmyz nebo kožní alergie.', // tslint:disable-next-line:max-line-length
    '<strong>Diagnostika a léčba poruch imunity</strong> (recidivující infekce dýchacích cest, močových cest, opakované herpetické infekce).', 'Diagnostika <strong>autoimunních onemocnění.</strong>', 'Vyšetření provádíme u <strong>dětských i dospělých pacientů.</strong>']
  },
  investigationinves: {
    title: 'Typy vyšetření',
    items: ['Kožní prick testy', 'Krevní odběry k laboratornímu vyšetření', 'Vyšetření plicních funkcí (spirometrie) včetně zátěžových testů']
  }
};

var Description = function Description(props) {
  return React.createElement("div", {
    className: 'container'
  }, React.createElement(_ExpertiseDescriptionCare.default, {
    title: data.care.title,
    items: data.care.items
  }), React.createElement(_ExpertiseDescriptionInvestigation.default, {
    title: data.investigationinves.title,
    items: data.investigationinves.items
  }), React.createElement(_DividerCircles.default, null), React.createElement(_ExpertiseDescriptionBoxes.default, null));
};

var _default = Description;
exports.default = _default;