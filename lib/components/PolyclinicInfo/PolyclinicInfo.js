"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _DividerCircles = _interopRequireDefault(require("../DividerCircles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var PolyclinicInfo = function PolyclinicInfo(props) {
  var _a = props.data,
      geo = _a.geo,
      phone = _a.phone,
      transport = _a.transport,
      transportImage = _a.transportImage,
      clinic = _a.clinic,
      clinicColor = _a.clinicColor;
  return React.createElement("div", {
    className: 'policlinicInfo'
  }, React.createElement(_DividerCircles["default"], null), React.createElement("div", {
    className: 'policlinicInfo__wrapper'
  }, React.createElement("div", {
    className: 'policlinicInfo__item'
  }, React.createElement("img", {
    src: '/assets/medicon/images/geo.svg',
    alt: "address"
  }), React.createElement("div", null, React.createElement("p", {
    style: {
      display: 'block'
    }
  }, geo), clinic && React.createElement("p", {
    style: clinicColor ? {
      color: "" + clinicColor
    } : {}
  }, clinic))), React.createElement("div", {
    className: 'policlinicInfo__item'
  }, React.createElement("img", {
    src: '/assets/medicon/images/phone.svg',
    alt: "phone nubmer"
  }), React.createElement("p", null, phone)), React.createElement("div", {
    className: 'policlinicInfo__item'
  }, transportImage && React.createElement(_Media["default"], {
    type: 'image',
    data: transportImage
  }), React.createElement("p", null, transport))));
};

var _default = PolyclinicInfo;
exports["default"] = _default;