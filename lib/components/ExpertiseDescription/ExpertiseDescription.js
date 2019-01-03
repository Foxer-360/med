"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _DividerCircles = _interopRequireDefault(require("../DividerCircles"));

var _ExpertiseDescriptionCare = _interopRequireDefault(require("./components/ExpertiseDescriptionCare"));

var _ExpertiseDescriptionExamination = _interopRequireDefault(require("./components/ExpertiseDescriptionExamination"));

var _ExpertiseDescriptionBoxes = _interopRequireDefault(require("./components/ExpertiseDescriptionBoxes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Description = function Description(props) {
  var _a = props.data,
      titleCare = _a.titleCare,
      text = _a.text,
      titleExamination = _a.titleExamination,
      examinations = _a.examinations,
      boxes = _a.boxes;
  return React.createElement("div", {
    className: 'container'
  }, React.createElement("section", {
    className: 'expertiseDescription'
  }, React.createElement(_ExpertiseDescriptionCare.default, {
    title: titleCare,
    text: text
  }), React.createElement(_ExpertiseDescriptionExamination.default, {
    title: titleExamination,
    examinations: examinations
  }), React.createElement(_DividerCircles.default, null), React.createElement(_ExpertiseDescriptionBoxes.default, {
    boxes: boxes
  })));
};

var _default = Description;
exports.default = _default;