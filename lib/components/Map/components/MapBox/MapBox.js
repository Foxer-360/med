"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../../../partials/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var MapBox = function MapBox(props) {
  return React.createElement("div", {
    className: 'mapBox'
  }, React.createElement("img", {
    src: '/assets/medicon/images/mapbox.png'
  }), React.createElement("div", {
    className: 'pcTitle'
  }, React.createElement("img", {
    src: "/assets/medicon/images/logo.svg",
    alt: "Medicon Logo"
  }), React.createElement("div", {
    className: 'pcTitle__title'
  }, React.createElement("h3", null, "Poliklinika"), React.createElement("div", {
    className: 'pcTitle__title__subtitle'
  }, React.createElement("span", null, "Budejovicka"), React.createElement("span", {
    className: 'pcTitle__title__subtitle__circles'
  }, React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null))))), React.createElement("div", {
    className: 'mapBox__contacts'
  }, React.createElement("div", {
    className: 'mapBox__contacts__item'
  }, React.createElement("img", {
    src: '/assets/medicon/images/geoIcon.svg'
  }), React.createElement("div", null, React.createElement("p", null, "Sokolovsk\xE1 304 "), React.createElement("p", null, " 190 00 Praha 9"))), React.createElement("div", {
    className: 'mapBox__contacts__item'
  }, React.createElement("img", {
    src: '/assets/medicon/images/phone.png'
  }), React.createElement("div", null, React.createElement("p", null, "+420 266 006 211")))), React.createElement("div", {
    className: 'mapBox__buttons'
  }, React.createElement(_Button.default, {
    classes: "btn--small btn--blueBkg",
    noArrow: true
  }, "ambulance"), React.createElement(_Button.default, {
    classes: "btn--small btn--blueBorder"
  }, "kuddy k nam")));
};

var _default = MapBox;
exports.default = _default;