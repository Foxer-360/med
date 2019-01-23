"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _DividerCircles = _interopRequireDefault(require("../DividerCircles"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Odbornost = function Odbornost(props) {
  var _a = props.data,
      image = _a.image,
      doctorName = _a.doctorName,
      cite = _a.cite;
  return React.createElement("div", {
    className: 'odbornost'
  }, React.createElement(_DividerCircles.default, null), React.createElement("div", {
    className: 'container'
  }, React.createElement("div", {
    className: 'odbornost__doctor'
  }, image && React.createElement(_Media.default, {
    type: 'image',
    data: image
  }) || React.createElement("img", {
    src: '/assets/medicon/images/odbornost-lekar.jpg',
    alt: "Doctor photo"
  }), React.createElement("div", {
    className: 'grid grid--vCenterBlock'
  }, React.createElement("div", null, React.createElement("div", {
    className: 'horizontal-line'
  }), doctorName && React.createElement("p", null, doctorName), cite && React.createElement("cite", null, cite))))));
};

var _default = Odbornost;
exports.default = _default;