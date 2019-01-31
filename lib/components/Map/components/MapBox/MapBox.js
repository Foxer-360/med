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
  }, React.createElement("div", {
    className: 'mapBox__close',
    onClick: function onClick() {
      return props.close();
    }
  }, React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 52 52"
  }, React.createElement("g", null, React.createElement("path", {
    d: "M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z"
  }), React.createElement("path", {
    d: "M35.707 16.293a.999.999 0 0 0-1.414 0L26 24.586l-8.293-8.293a.999.999 0 1 0-1.414 1.414L24.586 26l-8.293 8.293a.999.999 0 1 0 1.414 1.414L26 27.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L27.414 26l8.293-8.293a.999.999 0 0 0 0-1.414z"
  })))), React.createElement("img", {
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
    src: '/assets/medicon/images/phoneIcon.svg'
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