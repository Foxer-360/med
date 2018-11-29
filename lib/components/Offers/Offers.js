"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

;

var Offers = function Offers(props) {
  return React.createElement("div", {
    className: 'container'
  }, React.createElement("h3", null, "Aktu\xE1ln\xED nab\xEDdky"), React.createElement("div", {
    className: "grid offers"
  }, React.createElement("a", {
    href: "#",
    className: 'flexRow offers__element',
    style: {
      backgroundImage: 'url(/assets/medicon/images/offers-lekar.png)'
    }
  }, React.createElement("p", {
    className: 'hCenterBlock'
  }, "L\xE9ka\u0159sk\xE9 pozice")), React.createElement("a", {
    href: "#",
    className: 'flexRow offers__element',
    style: {
      backgroundImage: 'url(/assets/medicon/images/offers-ostatni.png)'
    }
  }, React.createElement("p", {
    className: 'hCenterBlock'
  }, "Ostatn\xED pozice"))));
};

var _default = Offers;
exports.default = _default;