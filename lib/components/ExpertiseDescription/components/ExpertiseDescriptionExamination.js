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
  var lastLong = {};
  return React.createElement("div", {
    className: 'examination'
  }, React.createElement("div", {
    className: "container"
  }, title && React.createElement("h3", null, title), React.createElement("div", {
    className: 'grid examination__blocks'
  }, examinations && examinations.map(function (examination, i) {
    if (examinations.length % 2 !== 0) {
      lastLong = {
        gridColumnStart: 'span 2'
      };
    }

    return React.createElement(_Link.default, {
      key: i,
      className: 'examination__block',
      url: examination.url && examination.url.url,
      style: examinations.length - 1 === i ? lastLong : null
    }, examination.title && React.createElement("p", null, examination.title));
  }))));
};

var _default = ExpertiseDescriptionExamination;
exports.default = _default;