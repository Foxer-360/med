"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _DividerCircles = _interopRequireDefault(require("../../../DividerCircles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var DoctorSchedule = function DoctorSchedule(props) {
  var title = props.title,
      data = props.data;
  return React.createElement("div", {
    className: "doctorSchedule"
  }, React.createElement("div", {
    className: 'doctorSchedule__title'
  }, React.createElement("h4", null, title)), React.createElement("table", null, React.createElement("tbody", null, data && data.map(function (item, index) {
    return React.createElement(React.Fragment, null, React.createElement("tr", {
      className: 'mobileHeading'
    }, React.createElement("td", {
      colSpan: 7
    }, item.day)), React.createElement("tr", {
      className: 'normalRow'
    }, React.createElement("td", null, item.day), React.createElement("td", null, React.createElement("p", null, item.morningHours.time), React.createElement("p", null, item.morningHours.description)), React.createElement("td", {
      className: 'circleCell'
    }, React.createElement(_DividerCircles.default, null)), React.createElement("td", null, React.createElement("p", null, item.noonHours.time), React.createElement("p", null, item.noonHours.description)), React.createElement("td", {
      className: 'circleCell'
    }, React.createElement(_DividerCircles.default, null)), React.createElement("td", null, React.createElement("p", null, item.afternoonHours.time), React.createElement("p", null, item.afternoonHours.description)), React.createElement("td", {
      className: 'circleCell'
    }, React.createElement(_DividerCircles.default, null)), React.createElement("td", null, React.createElement("p", null, item.lateAfternoonHours.time), React.createElement("p", null, item.lateAfternoonHours.description))));
  }))));
};

var _default = DoctorSchedule;
exports.default = _default;