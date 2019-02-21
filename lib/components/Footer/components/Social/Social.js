"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _SvgIcon = _interopRequireDefault(require("../../../../../lib/partials/SvgIcon"));

var _Link = _interopRequireDefault(require("../../../../../lib/partials/Link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Social = function Social(props) {
  var icons = props.icons,
      info = props.info;
  return React.createElement("div", {
    className: "social flexColumn"
  }, icons && icons.map(function (icon, i) {
    return React.createElement(_Link.default, __assign({}, icon.url, {
      key: i
    }), React.createElement(_SvgIcon.default, {
      type: 'white',
      name: icon.name
    }));
  }), info && React.createElement(_reactMarkdown.default, {
    className: 'social__text',
    source: info
  }));
};

var _default = Social;
exports.default = _default;