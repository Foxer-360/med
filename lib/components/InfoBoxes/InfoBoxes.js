"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var InfoBoxes = function InfoBoxes(props) {
  return React.createElement("section", {
    className: "infoBoxes"
  }, React.createElement("h3", null, "Z na\u0161ich l\xE9k\xE1ren"), React.createElement("div", {
    className: "grid-container"
  }, React.createElement("div", {
    className: "info-element",
    style: {
      backgroundImage: 'url(assets/medicon/images/info-el-1.jpg)'
    }
  }, React.createElement("div", null, React.createElement("h5", null, "\u0161irok\xFD v\xFDb\u011Br zdrav\xFDchpotravin"), React.createElement(_Button.default, {
    classes: "btn--blueBorder"
  }, "vice info"))), React.createElement("div", {
    className: "info-element",
    style: {
      backgroundImage: 'url(assets/medicon/images/info-el-2.jpg)'
    }
  }, React.createElement("div", null, React.createElement("h5", null, "\u0161irok\xFD v\xFDb\u011Br zdrav\xFDchpotravin"), React.createElement(_Button.default, {
    classes: "btn--blueBorder"
  }, "vice info"))), React.createElement("div", {
    className: "info-element",
    style: {
      backgroundImage: 'url(assets/medicon/images/info-el-3.jpg)'
    }
  }, React.createElement("div", null, React.createElement("h5", {
    className: "light-blue"
  }, "\u0161irok\xFD v\xFDb\u011Br zdrav\xFDchpotravin"), React.createElement(_Button.default, {
    classes: "btn--blueBorder"
  }, "vice info")))));
};

var _default = InfoBoxes;
exports.default = _default;