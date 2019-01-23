"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _ReviewElement = _interopRequireDefault(require("./components/ReviewElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Reviews = function Reviews(props) {
  var _a = props.data,
      title = _a.title,
      reviews = _a.reviews;
  return React.createElement("section", {
    className: "reviews"
  }, title && React.createElement("h3", null, title), React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: "grid reviews__list"
  }, reviews && reviews.map(function (review, index) {
    return React.createElement(_ReviewElement.default, {
      key: index,
      image: review.image,
      cite: review.cite,
      starCount: review.starCount
    });
  }))));
};

var _default = Reviews;
exports.default = _default;