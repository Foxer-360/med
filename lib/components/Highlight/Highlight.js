"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Highlight = function Highlight(props) {
  return React.createElement("div", {
    className: "fullWidthContainer"
  }, React.createElement("section", {
    className: 'highlight'
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "flexRow flexAlign--center"
  }, React.createElement("div", {
    className: 'highlight__info flexRow'
  }, React.createElement("img", {
    src: "/assets/medicon/images/info.png",
    alt: "info"
  }), React.createElement("p", null, "Poliklinika Zelen\xFD pruh je od 16.9. do 19.9. zav\u0159en\xE1")), React.createElement(_Button.default, {
    classes: "btn--whiteBorder"
  }, "vice info")))));
};

var _default = Highlight;
exports.default = _default;