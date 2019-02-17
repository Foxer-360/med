"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _Media = _interopRequireDefault(require("../../partials/Media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var BlogArticle = function BlogArticle(props) {
  var _a = props.data,
      title = _a.title,
      text = _a.text,
      image = _a.image,
      textAlign = _a.textAlign;
  return React.createElement("section", {
    className: 'blogArticle'
  }, React.createElement("div", {
    className: "container"
  }, title && React.createElement("h1", {
    className: 'gradientHeading'
  }, title), image && React.createElement(_Media.default, {
    data: image,
    type: "image"
  }), React.createElement("div", {
    className: "blogArticle__content " + (textAlign || 'center')
  }, React.createElement(_reactMarkdown.default, {
    source: text,
    renderers: {
      paragraph: function paragraph(rProps) {
        return React.createElement("p", null, rProps.children);
      }
    }
  }))));
};

var _default = BlogArticle;
exports.default = _default;