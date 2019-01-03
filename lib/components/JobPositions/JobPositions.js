"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../../lib/partials/Button"));

var _getImageUrl = _interopRequireDefault(require("../../../lib/helpers/getImageUrl"));

var _index = _interopRequireDefault(require("./components/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var JobPositions = function JobPositions(props) {
  var _a = props.data,
      title = _a.title,
      positions = _a.positions;
  var polyclinics = [];

  if (positions && positions.length > 0) {
    positions.map(function (position, i) {
      polyclinics.push(position.polyclinic);
    });
  }

  return React.createElement("div", {
    className: 'container actual-positions'
  }, title && React.createElement("h3", null, title), React.createElement(_index.default, {
    polyclinics: polyclinics
  }), React.createElement("div", {
    className: 'grid positions'
  }, positions && positions.map(function (position, index) {
    return React.createElement("div", {
      className: 'positions__element',
      style: {
        backgroundImage: position.image && "url(" + (0, _getImageUrl.default)(position.image) + ")"
      },
      key: index
    }, React.createElement("div", {
      className: 'positions__element-content'
    }, React.createElement("p", null, position.name), React.createElement(_Button.default, {
      classes: 'btn--whiteBorder btn--fullWidth'
    }, "Vice info")), React.createElement("div", {
      className: 'positions__colorGradient',
      style: {
        background: "linear-gradient(to bottom, transparent 0%, #2473ba 100%)"
      }
    }));
  })), React.createElement(_Button.default, {
    classes: "hCenterBlock btn--blueBkg btn--down btn--fullWidth"
  }, "dal\u0161\xED pozice"));
};

var _default = JobPositions;
exports.default = _default;