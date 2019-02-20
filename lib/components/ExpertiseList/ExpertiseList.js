"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../partials/Button"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _List = _interopRequireDefault(require("../List"));

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

var ExpertiseList = function ExpertiseList(props) {
  var _a = props.data,
      title = _a.title,
      expertiseList = _a.expertiseList;
  return React.createElement("section", {
    className: "expertiseList"
  }, title && React.createElement("h3", null, title), React.createElement("div", {
    className: "grid-container"
  }, React.createElement(_List.default, {
    data: expertiseList
  }, function (_a) {
    var data = _a.data;
    return data && data.map(function (item, index) {
      return React.createElement(_Link.default, __assign({}, item.url, {
        key: index
      }), React.createElement("div", {
        className: "expertiseList__element"
      }, React.createElement("div", null, item.image && React.createElement(_Media.default, {
        type: 'image',
        data: item.image
      })), item.title && React.createElement("p", null, item.title)));
    });
  })), expertiseList.length > 0 && React.createElement("div", {
    className: 'container'
  }, React.createElement(_Button.default, {
    classes: "btn--blueBkg btn--fullWidth"
  }, "zobrazit dal\u0161i odbornosti")));
};

var _default = ExpertiseList;
exports.default = _default;