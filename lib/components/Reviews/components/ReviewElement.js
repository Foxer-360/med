"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReviewElement;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function ReviewElement(props) {
  var rows = [];

  for (var i = 0; i < props.starCount; i++) {
    rows.push(React.createElement("img", {
      src: "/assets/medicon/images/star.png",
      alt: "star"
    }));
  }

  return React.createElement("div", {
    className: "review-el"
  }, React.createElement("img", {
    className: "review-img",
    src: props.img,
    alt: "photo"
  }), React.createElement("div", {
    className: "el"
  }, React.createElement("cite", null, props.cite), React.createElement("div", {
    className: "stars"
  }, rows)));
}