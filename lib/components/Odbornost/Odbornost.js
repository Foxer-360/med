"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _TextBlock = _interopRequireDefault(require("../TextBlock"));

var _DividerCircles = _interopRequireDefault(require("../DividerCircles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var data = {
  title: 'Alergologie a Imunologie',
  img: '/assets/medicon/images/odbornost-lekar.jpg',
  doctor: 'MUDr. Hana Kocherová',
  cite: 'Na našem oddělení Lorem ipsum dolor sit amet, consectetur adipiscingelit. Vivamus eu bibendum nulla, ac efficitur odio.'
};

var Odbornost = function Odbornost(props) {
  return React.createElement("div", {
    className: 'odbornost'
  }, React.createElement(_TextBlock.default, {
    data: data
  }), React.createElement(_DividerCircles.default, null), React.createElement("div", {
    className: 'container'
  }, React.createElement("div", {
    className: 'odbornost__doctor'
  }, React.createElement("img", {
    src: data.img,
    alt: "photo"
  }), React.createElement("div", {
    className: "grid grid--vCenterBlock"
  }, React.createElement("div", null, React.createElement("div", {
    className: 'horizontal-line'
  }), React.createElement("p", null, data.doctor), React.createElement("cite", null, data.cite))))));
};

var _default = Odbornost;
exports.default = _default;