"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var TextBlock = function TextBlock(props) {
  var title = props.data.title;
  return React.createElement("section", {
    className: 'textBlock'
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: 'textBlock__container'
  }, title && React.createElement("h2", {
    className: 'gradientHeading'
  }, title), React.createElement("div", {
    className: "textBlock__container__text"
  }, "Skupina ", React.createElement("strong", null, "MEDICON"), " pat\u0159\xED mezi nejv\u011Bt\u0161\xED provozovatele ambulantn\xEDch za\u0159\xEDzen\xED v Praze.", React.createElement("br", null), " Jej\xED pracovi\u0161t\u011B senach\xE1z\xED v lokalit\xFDch ", React.createElement("strong", null, "Praha 4, Praha 9 a Praha 10."), React.createElement("br", null), " Poskytuje komletn\xED spectrum ambulantn\xEDch specializac\xED a v ka\u017Ed\xE9 z poliklinik i navazuj\xEDc\xED l\xE9ka\u0159sk\xE9 slu\u017Eby."))));
};

var _default = TextBlock;
exports.default = _default;