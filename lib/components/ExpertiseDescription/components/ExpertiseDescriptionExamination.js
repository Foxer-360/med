"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Link = _interopRequireDefault(require("../../../../lib/partials/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ExpertiseDescriptionExamination = function ExpertiseDescriptionExamination(props) {
  var title = props.title,
      examinations = props.examinations;
  return React.createElement("div", {
    className: 'examination'
  }, title && React.createElement("h3", {
    style: {
      paddingTop: 45
    }
  }, title), React.createElement("div", {
    className: 'examination__list grid'
  }, examinations && examinations.map(function (examination, i) {
    var lastLong = examinations.length % 2 !== 0 && examinations.length - 1 === i;
    return React.createElement(_Link.default, {
      key: i,
      className: "examination__list__item " + (lastLong ? 'examination__list__item--last-long' : ''),
      url: examination.url && examination.url.url
    }, examination.title && examination.title);
  })));
};

var _default = ExpertiseDescriptionExamination;
exports.default = _default;