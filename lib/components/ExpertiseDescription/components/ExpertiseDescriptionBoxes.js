"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Link = _interopRequireDefault(require("../../../../lib/partials/Link"));

var _Button = _interopRequireDefault(require("../../../../lib/partials/Button"));

var _getImageUrl = _interopRequireDefault(require("../../../../lib/helpers/getImageUrl"));

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
    }, box.title && React.createElement("h5", null, box.title), !box.url2 && !box.url3 && React.createElement("div", null, React.createElement(_Button.default, {
      url: box.url1,
      classes: 'btn--whiteBorder'
    }, box.url1Title ? box.url1Title : 'více informací')), (box.url2 || box.url3) && React.createElement("div", {
      style: {
        paddingLeft: 20
      }
    }, box.url1 && (box.url2 || box.url3) && React.createElement(_Link.default, __assign({}, box.url1, {
      className: 'downloadLink'
    }), box.url1Title ? box.url1Title : 'více informací'), box.url2 && React.createElement(_Link.default, __assign({}, box.url2, {
      className: 'downloadLink'
    }), box.url2Title ? box.url2Title : 'více informací'), box.url3 && React.createElement(_Link.default, __assign({}, box.url3, {
      className: 'downloadLink'
    }), box.url3Title ? box.url3Title : 'více informací'))), React.createElement("div", {
      className: 'info__element--colorGradient'
    }));
  })));
};

var _default = ExpertiseDescriptionBoxes;
exports.default = _default;