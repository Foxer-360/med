"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var CrossRoads = function CrossRoads(props) {
  return React.createElement("section", {
    className: 'crossRoads'
  }, React.createElement("div", {
    className: 'container'
  }, React.createElement("div", {
    className: 'crossRoads__wrapper'
  }, React.createElement("a", {
    className: 'crossRoads__card',
    href: ""
  }, React.createElement("div", {
    className: 'crossRoads__card__img'
  }, React.createElement("img", {
    src: "./assets/medicon/images/polikliniky.png"
  })), React.createElement("p", null, "Hled\xE1m polikliniku ")), React.createElement("a", {
    className: 'crossRoads__card',
    href: ""
  }, React.createElement("div", {
    className: 'crossRoads__card__img'
  }, React.createElement("img", {
    src: "./assets/medicon/images/lekari.png"
  })), React.createElement("p", null, "Hled\xE1m l\xE9ka\u0159e")), React.createElement("a", {
    className: 'crossRoads__card',
    href: ""
  }, React.createElement("div", {
    className: 'crossRoads__card__img'
  }, React.createElement("img", {
    src: "./assets/medicon/images/rada.png"
  })), React.createElement("p", null, "Pot\u0159ebuji poradit")))));
};

var _default = CrossRoads;
exports.default = _default;