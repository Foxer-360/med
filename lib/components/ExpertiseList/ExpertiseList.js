"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../partials/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ExpertiseList = function ExpertiseList(props) {
  return React.createElement("section", {
    className: "expertiseList"
  }, React.createElement("h3", null, "Odbornosti"), React.createElement("div", {
    className: "grid-container"
  }, React.createElement("div", {
    className: "expertiseList__element"
  }, React.createElement("img", {
    src: "/assets/medicon/images/od-el-1.png",
    alt: "image"
  }), React.createElement("p", null, "Alergologie")), React.createElement("div", {
    className: "expertiseList__element"
  }, React.createElement("img", {
    src: "/assets/medicon/images/od-el-2.png",
    alt: "image"
  }), React.createElement("p", null, "gynekologie")), React.createElement("div", {
    className: "expertiseList__element"
  }, React.createElement("img", {
    src: "/assets/medicon/images/od-el-3.png",
    alt: "image"
  }), React.createElement("p", null, "chirurgie")), React.createElement("div", {
    className: "expertiseList__element"
  }, React.createElement("img", {
    src: "/assets/medicon/images/od-el-4.png",
    alt: "image"
  }), React.createElement("p", null, "CT/MR")), React.createElement("div", {
    className: "expertiseList__element"
  }, React.createElement("img", {
    src: "/assets/medicon/images/od-el-5.png",
    alt: "image"
  }), React.createElement("p", null, "eeg")), React.createElement("div", {
    className: "expertiseList__element"
  }, React.createElement("img", {
    src: "/assets/medicon/images/od-el-6.png",
    alt: "image"
  }), React.createElement("p", null, "foniatrie")), React.createElement("div", {
    className: "expertiseList__element"
  }, React.createElement("img", {
    src: "/assets/medicon/images/od-el-7.png",
    alt: "image"
  }), React.createElement("p", null, "neurologie")), React.createElement("div", {
    className: "expertiseList__element"
  }, React.createElement("img", {
    src: "/assets/medicon/images/od-el-8.png",
    alt: "image"
  }), React.createElement("p", null, "gyneorlkologie"))), React.createElement(_Button.default, {
    classes: "btn--blueBkg"
  }, "vice info"));
};

var _default = ExpertiseList;
exports.default = _default;