"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};
/* tslint:disable */


var ArrowIcon = function ArrowIcon(props) {
  return React.createElement("svg", __assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none"
  }, props, {
    className: "arrowIcon " + ('arrowIcon--' + props.name)
  }), React.createElement("path", {
    d: "M32.7,15.9c1.4-1.4,3.6-1.4,5,0c1.4,1.4,1.4,3.6,0,5L12.1,46.4h84.4c2,0,3.6,1.6,3.6,3.5s-1.6,3.6-3.6,3.6H12.1l25.6,25.5\n\tc1.4,1.4,1.4,3.7,0,5c-1.4,1.4-3.6,1.4-5,0L1,52.5c-1.4-1.4-1.4-3.6,0-5L32.7,15.9z"
  }));
};

var _default = ArrowIcon;
exports.default = _default;