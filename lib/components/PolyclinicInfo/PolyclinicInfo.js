"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var PolyclinicInfo = function PolyclinicInfo(props) {
  var _a = props.data,
      geo = _a.geo,
      phone = _a.phone,
      transport = _a.transport,
      transportImage = _a.transportImage;
  return React.createElement("div", {
    className: 'policlinicInfo'
  }, React.createElement("div", {
    className: 'policlinicInfo__item'
  }, React.createElement("img", {
    src: '/assets/medicon/images/geo.svg',
    alt: "address"
  }), geo && React.createElement("p", null, geo)), React.createElement("div", {
    className: 'policlinicInfo__item'
  }, React.createElement("img", {
    src: '/assets/medicon/images/phone.svg',
    alt: "phone nubmer"
  }), phone && React.createElement("p", null, phone)), React.createElement("div", {
    className: 'policlinicInfo__item'
  }, transportImage && React.createElement(_Media.default, {
    type: 'image',
    data: transportImage
  }) || React.createElement("img", {
    src: '/assets/medicon/images/metro.svg',
    alt: "metro"
  }), transport && React.createElement("p", null, transport)));
};

var _default = PolyclinicInfo;
exports.default = _default;