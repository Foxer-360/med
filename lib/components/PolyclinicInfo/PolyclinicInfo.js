"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var PolyclinicInfo = function PolyclinicInfo(props) {
  return React.createElement("div", {
    className: "policlinicInfo"
  }, React.createElement("div", {
    className: "policlinicInfo__item",
    style: {
      backgroundImage: 'url(/assets/medicon/images/geo.png)'
    }
  }, React.createElement("p", null, "Antala Sta\u0161ka 1670/80", React.createElement("br", null), "140 00 Praha 4")), React.createElement("div", {
    className: "policlinicInfo__item",
    style: {
      backgroundImage: 'url(/assets/medicon/images/phone.png)'
    }
  }, React.createElement("p", null, "+420 261 006 111")), React.createElement("div", {
    className: "policlinicInfo__item",
    style: {
      backgroundImage: 'url(/assets/medicon/images/metro.png)'
    }
  }, React.createElement("p", null, "Metro C ", React.createElement("br", null), "stanice Bud\u011Bjovick\xE1")));
};

var _default = PolyclinicInfo;
exports.default = _default;