"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var InfoRectangles = function InfoRectangles(props) {
  return React.createElement("section", {
    className: "info-rectangles"
  }, React.createElement("div", {
    className: "grid-container"
  }, React.createElement("div", {
    className: "info-element",
    style: {
      backgroundImage: 'url(assets/medicon/images/rect-1.jpg'
    }
  }, React.createElement("div", null, React.createElement("h5", null, "\u0161irok\xFD v\xFDb\u011Br zdrav\xFDchpotravin"), React.createElement("button", {
    className: "btn btnThird"
  }, "vice info"))), React.createElement("div", {
    className: "info-element",
    style: {
      backgroundImage: 'url(assets/medicon/images/rect-2.jpg'
    }
  }, React.createElement("div", null, React.createElement("h5", null, "\u0161irok\xFD v\xFDb\u011Br zdrav\xFDchpotravin"), React.createElement("button", {
    className: "btn btnThird"
  }, "vice info")))));
};

var _default = InfoRectangles;
exports.default = _default;