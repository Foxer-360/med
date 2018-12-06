"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Benefits = function Benefits(props) {
  return React.createElement("section", {
    className: 'benefits'
  }, React.createElement("div", {
    className: 'container'
  }, React.createElement("div", {
    className: 'grid benefits__list'
  }, React.createElement("div", {
    className: 'grid benefits__list__element'
  }, React.createElement("img", {
    src: "/assets/medicon/images/benefity1.png",
    alt: "out benefit"
  }), React.createElement("p", null, "P\u0159\xEDv\u011Btiv\xFD person\xE1l")), React.createElement("div", {
    className: 'grid benefits__list__element'
  }, React.createElement("img", {
    src: "/assets/medicon/images/benefity2.png",
    alt: "out benefit"
  }), React.createElement("p", null, "P\u0159\xEDv\u011Btiv\xFD person\xE1l")), React.createElement("div", {
    className: 'grid benefits__list__element'
  }, React.createElement("img", {
    src: "/assets/medicon/images/benefity3.png",
    alt: "out benefit"
  }), React.createElement("p", null, "P\u0159\xEDv\u011Btiv\xFD person\xE1l")), React.createElement("div", {
    className: 'grid benefits__list__element'
  }, React.createElement("img", {
    src: "/assets/medicon/images/benefity4.png",
    alt: "out benefit"
  }), React.createElement("p", null, "P\u0159\xEDv\u011Btiv\xFD person\xE1l")))));
};

var _default = Benefits;
exports.default = _default;