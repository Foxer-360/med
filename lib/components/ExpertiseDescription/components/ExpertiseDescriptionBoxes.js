"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../../partials/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ExpertiseDescriptionBoxes = function ExpertiseDescriptionBoxes(props) {
  return React.createElement("section", {
    className: "info"
  }, React.createElement("div", {
    className: "grid-container"
  }, React.createElement("div", {
    className: "info__element",
    style: {
      backgroundImage: 'url("/assets/medicon/images/rect-1.jpg'
    }
  }, React.createElement("div", {
    className: 'info__element--cell'
  }, React.createElement("h5", null, "Doklady kter\xE9 pro vy\u0161et\u0159en\xED pot\u0159ebujete"), React.createElement(_Button.default, {
    classes: "btn--whiteBorder"
  }, "vice info")), React.createElement("div", {
    className: 'info__element--colorGradient'
  })), React.createElement("div", {
    className: "info__element",
    style: {
      backgroundImage: 'url("/assets/medicon/images/rect-2.jpg'
    }
  }, React.createElement("div", {
    className: 'info__element--cell'
  }, React.createElement("h5", null, "Jak vy\u0161et\u0159en\xED prob\xEDh\xE1"), React.createElement(_Button.default, {
    classes: "btn--whiteBorder"
  }, "vice info")), React.createElement("div", {
    className: 'info__element--colorGradient'
  }))));
};

var _default = ExpertiseDescriptionBoxes;
exports.default = _default;