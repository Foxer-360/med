"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _DividerCircles = _interopRequireDefault(require("../DividerCircles"));

var _SvgIcon = _interopRequireDefault(require("../../../lib/partials/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Downloads = function Downloads(props) {
  return React.createElement("div", {
    className: 'container'
  }, React.createElement("div", {
    className: 'downloads'
  }, React.createElement("h3", null, "Dokumenty ke sta\u017Een\xED"), React.createElement("p", null, "Zde si m\u016F\u017Eete st\xE1hnout pot\u0159ebn\xE9 dokumenty"), React.createElement("div", {
    className: "grid downloads__list"
  }, React.createElement("div", {
    className: "downloads__list__element"
  }, React.createElement("p", null, "Jak podat st\xED\u017Enost"), React.createElement("a", {
    className: 'btn btn--blueBorder'
  }, "St\xE1hnout", React.createElement(_SvgIcon.default, {
    name: 'download',
    type: 'lightBlue'
  }))), React.createElement("div", {
    className: "downloads__list__element"
  }, React.createElement("p", null, "Lorem ipsum dolor"), React.createElement("a", {
    className: 'btn btn--blueBorder'
  }, "St\xE1hnout", React.createElement(_SvgIcon.default, {
    name: 'download',
    type: 'lightBlue'
  }))), React.createElement("div", {
    className: "downloads__list__element"
  }, React.createElement("p", null, "Lorem ipsum dolor"), React.createElement("a", {
    className: 'btn btn--blueBorder'
  }, "St\xE1hnout", React.createElement(_SvgIcon.default, {
    name: 'download',
    type: 'lightBlue'
  }))), React.createElement("div", {
    className: "downloads__list__element"
  }, React.createElement("p", null, "Lorem ipsum dolor"), React.createElement("a", {
    className: 'btn btn--blueBorder'
  }, "St\xE1hnout", React.createElement(_SvgIcon.default, {
    name: 'download',
    type: 'lightBlue'
  }))))), React.createElement(_DividerCircles.default, null));
};

var _default = Downloads;
exports.default = _default;