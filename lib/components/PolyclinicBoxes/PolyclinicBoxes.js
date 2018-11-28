"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var PolyclinicBoxes = function PolyclinicBoxes(props) {
  return React.createElement("div", {
    className: "polyclinicBoxes container"
  }, React.createElement("h3", null, "Dal\u0161\xED polikliniky"), React.createElement("ul", {
    className: "flexRow"
  }, React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, React.createElement("img", {
    src: "/assets/medicon/images/poliklinika.png",
    alt: "poliklinika"
  }))), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, React.createElement("img", {
    src: "/assets/medicon/images/poliklinika.png",
    alt: "poliklinika"
  }))), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, React.createElement("img", {
    src: "/assets/medicon/images/poliklinika.png",
    alt: "poliklinika"
  }))), React.createElement("li", null, React.createElement("a", {
    href: "#"
  }, React.createElement("img", {
    src: "/assets/medicon/images/poliklinika.png",
    alt: "poliklinika"
  })))));
};

var _default = PolyclinicBoxes;
exports.default = _default;