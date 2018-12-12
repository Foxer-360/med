"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ViewsAboutUsElement;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function ViewsAboutUsElement(props) {
  return React.createElement("div", {
    className: "viewsAboutUs__list__element"
  }, React.createElement("img", {
    src: props.img,
    alt: "review about us"
  }), React.createElement("div", {
    className: "viewsAboutUs__list__element__content"
  }, React.createElement("cite", null, props.cite), React.createElement("a", {
    href: "#"
  }, "Zdroj: ", React.createElement("strong", null, "Hal\xF3 noviny"))));
}