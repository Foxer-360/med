"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../partials/Button"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ExpertiseList = function ExpertiseList(props) {
  var _a = props.data,
      title = _a.title,
      expertiseList = _a.expertiseList;
  return React.createElement("section", {
    className: "expertiseList"
  }, title && React.createElement("h3", null, title), React.createElement("div", {
    className: "grid-container"
  }, expertiseList && expertiseList.map(function (item, index) {
    return React.createElement("a", {
      href: item.url,
      key: index
    }, React.createElement("div", {
      className: "expertiseList__element"
    }, item.image && React.createElement(_Media.default, {
      type: 'image',
      data: item.image
    }) || React.createElement("img", {
      src: '/assets/medicon/images/od-el-1.png',
      alt: "image"
    }), React.createElement("p", null, item.title)));
  })), React.createElement("div", {
    className: 'container'
  }, React.createElement(_Button.default, {
    classes: "btn--blueBkg btn--fullWidth"
  }, "vice info")));
};

var _default = ExpertiseList;
exports.default = _default;