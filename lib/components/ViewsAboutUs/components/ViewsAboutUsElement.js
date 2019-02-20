"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ViewsAboutUsElement;

var React = _interopRequireWildcard(require("react"));

var _Media = _interopRequireDefault(require("../../../../lib/partials/Media"));

var _Link = _interopRequireDefault(require("../../../../lib/partials/Link"));

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

function ViewsAboutUsElement(props) {
  var url = props.url,
      link = props.link,
      cite = props.cite,
      image = props.image;
  return React.createElement("div", {
    className: "viewsAboutUs__list__element"
  }, React.createElement("div", null, image && React.createElement(_Media.default, {
    type: 'image',
    data: image
  })), React.createElement("div", {
    className: 'viewsAboutUs__list__element__content'
  }, cite && React.createElement("cite", null, cite), React.createElement(_Link.default, __assign({}, url), "Zdroj: ", React.createElement("strong", null, link))));
}