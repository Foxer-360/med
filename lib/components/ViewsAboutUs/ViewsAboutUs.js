"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ViewsAboutUs = function ViewsAboutUs(props) {
  return React.createElement("div", {
    className: 'viewsAboutUs'
  }, React.createElement("div", {
    className: 'container'
  }, React.createElement("h3", null, "Napsali o n\xE1s"), React.createElement("div", {
    className: 'grid viewsAboutUs__grid'
  }, React.createElement("div", {
    className: 'grid viewsAboutUs__grid__element'
  }, React.createElement("img", {
    src: "/assets/medicon/images/review-aboutus-1.jpg",
    alt: "review about us"
  }), React.createElement("div", {
    className: 'viewsAboutUs__grid__element--cell'
  }, React.createElement("cite", null, "\u201E\xDAryvek \u010Dl\xE1nku lorem ipsum dolor sit amet, consectetuer adipiscing elit.\u201C"), React.createElement("a", {
    href: "#"
  }, "Zdroj: ", React.createElement("strong", null, "Hal\xF3 noviny")))), React.createElement("div", {
    className: 'grid viewsAboutUs__grid__element'
  }, React.createElement("img", {
    src: "/assets/medicon/images/review-aboutus-1.jpg",
    alt: "review about us"
  }), React.createElement("div", {
    className: 'viewsAboutUs__grid__element--cell'
  }, React.createElement("cite", null, "\u201E\xDAryvek \u010Dl\xE1nku lorem ipsum dolor sit amet, consectetuer adipiscing elit.\u201C"), React.createElement("a", {
    href: "#"
  }, "Zdroj: ", React.createElement("strong", null, "Pr\xE1vo")))), React.createElement("div", {
    className: 'grid viewsAboutUs__grid__element'
  }, React.createElement("img", {
    src: "/assets/medicon/images/review-aboutus-1.jpg",
    alt: "review about us"
  }), React.createElement("div", {
    className: 'viewsAboutUs__grid__element--cell'
  }, React.createElement("cite", null, "\u201E\xDAryvek \u010Dl\xE1nku lorem ipsum dolor sit amet, consectetuer adipiscing elit.\u201C"), React.createElement("a", {
    href: "#"
  }, "Zdroj: ", React.createElement("strong", null, "Hal\xF3 noviny")))))));
};

var _default = ViewsAboutUs;
exports.default = _default;