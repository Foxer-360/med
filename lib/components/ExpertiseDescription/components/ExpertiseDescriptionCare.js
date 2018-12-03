"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ExpertiseDescriptionCare = function ExpertiseDescriptionCare(props) {
  var title = props.title;
  return React.createElement("div", {
    className: 'care'
  }, React.createElement("h3", null, title), React.createElement("div", {
    className: 'hCenterBlock'
  }, React.createElement("p", null, React.createElement("strong", null, "Diagnostika a l\xE9\u010Dba v\u0161ech alergick\xFDch onemocn\u011Bn\xED"), " jako nap\u0159. alergick\xE1 r\xFDma, alergick\xFD z\xE1n\u011Bt spojivek, atopick\xFD ekz\xE9m, astma bronchiale na alergick\xE9m ter\xE9nu, potravinov\xE9 alergie, alergie na l\xE9ky, hmyz nebo ko\u017En\xED alergie."), React.createElement("p", null, React.createElement("strong", null, "Diagnostika a l\xE9\u010Dba poruch imunity"), " (recidivuj\xEDc\xED infekce d\xFDchac\xEDch cest, mo\u010Dov\xFDch cest, opakovan\xE9 herpetick\xE9 infekce)."), React.createElement("p", null, "Diagnostika ", React.createElement("strong", null, "autoimunn\xEDch onemocn\u011Bn\xED.")), React.createElement("p", null, "Vy\u0161et\u0159en\xED prov\xE1d\xEDme u ", React.createElement("strong", null, "d\u011Btsk\xFDch i dosp\u011Bl\xFDch pacient\u016F."))));
};

var _default = ExpertiseDescriptionCare;
exports.default = _default;