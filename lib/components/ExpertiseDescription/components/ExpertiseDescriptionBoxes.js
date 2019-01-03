"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../../partials/Button"));

var _getImageUrl = _interopRequireDefault(require("../../../helpers/getImageUrl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ExpertiseDescriptionBoxes = function ExpertiseDescriptionBoxes(props) {
  var boxes = props.boxes;
  return React.createElement("section", {
    className: "info"
  }, React.createElement("div", {
    className: "grid-container"
  }, boxes && boxes.map(function (box, i) {
    return React.createElement("div", {
      key: i,
      className: 'info__element',
      style: {
        backgroundImage: box.image && "url(" + (0, _getImageUrl.default)(box.image) + ")"
      }
    }, React.createElement("div", {
      className: 'info__element--cell'
    }, box.title && React.createElement("h5", null, box.title), React.createElement(_Button.default, {
      classes: 'btn--whiteBorder'
    }, "vice info")), React.createElement("div", {
      className: 'info__element--colorGradient'
    }));
  })));
};

var _default = ExpertiseDescriptionBoxes;
exports.default = _default;