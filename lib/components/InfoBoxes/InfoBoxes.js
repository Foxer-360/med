"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _InfoElement = _interopRequireDefault(require("./components/InfoElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var InfoBoxes = function InfoBoxes(props) {
  var _a = props.data,
      title = _a.title,
      boxes = _a.boxes;
  return React.createElement("section", {
    className: 'info-boxes'
  }, title && React.createElement("h3", null, title), React.createElement("div", {
    className: 'container'
  }, React.createElement("div", {
    className: 'grid info-boxes__list'
  }, boxes && boxes.map(function (box, i) {
    return React.createElement(_InfoElement.default, {
      gradientColor: box.gradientColor,
      title: box.title,
      image: box.image,
      button: box.button,
      titleColor: box.titleColor,
      key: i
    });
  }))));
};

var _default = InfoBoxes;
exports.default = _default;