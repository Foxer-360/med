"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ViewsAboutUsElement;

var React = _interopRequireWildcard(require("react"));

var _Media = _interopRequireDefault(require("../../../../lib/partials/Media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function ViewsAboutUsElement(props) {
  var url = props.url,
      link = props.link,
      cite = props.cite,
      image = props.image;
  return React.createElement("div", {
    className: "viewsAboutUs__list__element"
  }, image && React.createElement(_Media.default, {
    type: 'image',
    data: image
  }) || React.createElement("img", {
    src: '/assets/medicon/images/review-aboutus-1.jpg',
    alt: "review about us"
  }), React.createElement("div", {
    className: 'viewsAboutUs__list__element__content'
  }, React.createElement("cite", null, cite), React.createElement("a", {
    href: url
  }, "Zdroj: ", React.createElement("strong", null, link))));
}