"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _DividerCircles = _interopRequireDefault(require("../DividerCircles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var WorkingHours = function WorkingHours(props) {
  console.log('%c Emilio: ', 'background: #222; color: #83FFFF', props);
  return React.createElement("div", {
    className: "workingHours"
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("table", null, React.createElement("tbody", null, props.data && props.data.items.length > 0 && props.data.items.map(function (item, index) {
    return React.createElement(React.Fragment, null, React.createElement("tr", {
      className: 'mobileHeading'
    }, React.createElement("td", {
      colSpan: 3
    }, item.day)), React.createElement("tr", {
      className: 'normalRow'
    }, React.createElement("td", null, item.day), React.createElement("td", null, React.createElement("p", null, item.morningHours), React.createElement("p", null, item.morningHoursDescription)), React.createElement("td", null, React.createElement(_DividerCircles.default, null)), React.createElement("td", null, React.createElement("p", null, item.eveningHours), React.createElement("p", null, item.eveningHoursDescription))));
  })))));
};

var _default = WorkingHours;
exports.default = _default;