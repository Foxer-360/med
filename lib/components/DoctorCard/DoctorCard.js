"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var DoctorCard = function DoctorCard(props) {
  return React.createElement("div", {
    className: "container"
  }, React.createElement("section", {
    className: 'doctorCard'
  }, React.createElement("div", {
    className: 'doctorCard__main'
  }, React.createElement("img", {
    src: "/assets/medicon/images/lekari.png"
  }), React.createElement("h3", null, "mudr. jana pavluchov\xE1"), React.createElement("p", null, "Alergologie a imunologie"), React.createElement("p", null, "Sestra: ", React.createElement("strong", null, "Ji\u0159ina Slez\xE1kov\xE1"))), React.createElement("div", {
    className: 'doctorCard__btnHolder'
  }, React.createElement("button", {
    className: 'btn  btnFirst'
  }, "objednat"))));
};

var _default = DoctorCard;
exports.default = _default;