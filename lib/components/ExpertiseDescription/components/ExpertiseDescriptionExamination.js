"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ExpertiseDescriptionExamination = function ExpertiseDescriptionExamination(props) {
  var title = props.title,
      examinations = props.examinations;
  return React.createElement("div", {
    className: 'examination'
  }, title && React.createElement("h3", null, title), React.createElement("div", {
    className: 'grid examination__blocks hCenterBlock'
  }, examinations && examinations.map(function (examination, i) {
    return React.createElement("a", {
      href: examination.url,
      className: 'examination__block',
      key: i
    }, React.createElement("p", null, examination.title));
  })));
};

var _default = ExpertiseDescriptionExamination;
exports.default = _default;