"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InfoElement;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../../partials/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function InfoElement(props) {
  var title = props.title,
      color = props.color,
      img = props.img,
      btn = props.btn,
      titleColor = props.titleColor;
  return React.createElement("a", {
    className: "info-element",
    style: {
      backgroundImage: "url(" + img + ")"
    }
  }, React.createElement("div", null, React.createElement("h5", {
    style: {
      color: "" + titleColor
    }
  }, title), React.createElement(_Button.default, {
    classes: btn
  }, "vice info")), React.createElement("div", {
    className: 'info-element__colorGradient',
    style: {
      background: "linear-gradient(to bottom, rgba(125, 185, 232, 0) 0%, " + color + " 100%)"
    }
  }));
}