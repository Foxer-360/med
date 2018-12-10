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
  return React.createElement("div", {
    className: "doctorSchedule"
  }, React.createElement("table", null, React.createElement("tr", {
    className: 'mobileHeading'
  }, React.createElement("td", {
    colSpan: 3
  }, "Pond\u011Bl\xED")), React.createElement("tr", {
    className: 'normalRow'
  }, React.createElement("td", null, "Pond\u011Bl\xED"), React.createElement("td", null, React.createElement("p", null, "13.00 - 18.00"), React.createElement("p", null, "Pro objednan\xE9")), React.createElement("td", null, React.createElement(_DividerCircles.default, null)), React.createElement("td", null, React.createElement("p", null, "13.00 - 18.00"), React.createElement("p", null, "Pro objednan\xE9"))), React.createElement("tr", {
    className: 'mobileHeading'
  }, React.createElement("td", {
    colSpan: 3
  }, "\xDAter\xFD")), React.createElement("tr", {
    className: 'normalRow'
  }, React.createElement("td", null, "\xDAter\xFD"), React.createElement("td", null, React.createElement("p", null, "13.00 - 18.00"), React.createElement("p", null, "Pro objednan\xE9")), React.createElement("td", null, React.createElement(_DividerCircles.default, null)), React.createElement("td", null, React.createElement("p", null, "13.00 - 18.00"), React.createElement("p", null, "Pro objednan\xE9"))), React.createElement("tr", {
    className: 'mobileHeading'
  }, React.createElement("td", {
    colSpan: 3
  }, "St\u0159eda")), React.createElement("tr", {
    className: 'normalRow'
  }, React.createElement("td", null, "St\u0159eda"), React.createElement("td", null, React.createElement("p", null, "13.00 - 18.00"), React.createElement("p", null, "Pro objednan\xE9")), React.createElement("td", null, React.createElement(_DividerCircles.default, null)), React.createElement("td", null, React.createElement("p", null, "13.00 - 18.00"), React.createElement("p", null, "Pro objednan\xE9"))), React.createElement("tr", {
    className: 'mobileHeading'
  }, React.createElement("td", {
    colSpan: 3
  }, "\u010Ctvrtek")), React.createElement("tr", {
    className: 'normalRow'
  }, React.createElement("td", null, "\u010Ctvrtek"), React.createElement("td", null, React.createElement("p", null, "13.00 - 18.00"), React.createElement("p", null, "Pro objednan\xE9")), React.createElement("td", null, React.createElement(_DividerCircles.default, null)), React.createElement("td", null, React.createElement("p", null, "13.00 - 18.00"), React.createElement("p", null, "Pro objednan\xE9"))), React.createElement("tr", {
    className: 'mobileHeading'
  }, React.createElement("td", {
    colSpan: 3
  }, "P\xE1tek")), React.createElement("tr", {
    className: 'normalRow'
  }, React.createElement("td", null, "P\xE1tek"), React.createElement("td", null, React.createElement("p", null, "13.00 - 18.00"), React.createElement("p", null, "Pro objednan\xE9")), React.createElement("td", null, React.createElement(_DividerCircles.default, null)), React.createElement("td", null, React.createElement("p", null, "13.00 - 18.00"), React.createElement("p", null, "Pro objednan\xE9")))));
};

var _default = DoctorSchedule;
exports.default = _default;