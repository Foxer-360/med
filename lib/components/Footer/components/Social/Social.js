"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _SvgIcon = _interopRequireDefault(require("../../../../../lib/partials/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Social = function Social(props) {
  return React.createElement("div", {
    className: "social flexColumn"
  }, React.createElement("a", {
    href: "#"
  }, React.createElement(_SvgIcon.default, {
    type: 'white',
    name: "fb"
  })), React.createElement("p", null, React.createElement("strong", null, "MEDICON a.s."), React.createElement("br", null), "Antala Sta\u0161ka 1670/80 ", React.createElement("br", null), "140 00 Praha 4 ", React.createElement("br", null)));
};

var _default = Social;
exports.default = _default;