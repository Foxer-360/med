"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _List = _interopRequireDefault(require("../List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var PolyclinicBoxes = function PolyclinicBoxes(props) {
  var _a = props.data,
      title = _a.title,
      polyclinics = _a.polyclinics;
  return React.createElement("section", {
    className: 'polyclinicBoxes'
  }, React.createElement("div", {
    className: 'container'
  }, title && React.createElement("h3", null, title), React.createElement("ul", {
    className: 'grid'
  }, React.createElement(_List.default, {
    data: polyclinics
  }, function (_a) {
    var data = _a.data;
    return data && data.map(function (polyclinic, index) {
      return React.createElement("li", {
        key: index
      }, React.createElement(_Link.default, {
        url: polyclinic.url && polyclinic.url.url
      }), React.createElement("div", {
        className: 'colorGradient'
      }), polyclinic.image && polyclinic.image.filename && React.createElement(_Media.default, {
        data: polyclinic.image,
        type: 'image'
      }) || React.createElement("img", {
        src: '/assets/medicon/images/poliklinika.png',
        alt: "poliklinika"
      }), React.createElement("div", {
        className: 'pcTitle'
      }, React.createElement("img", {
        src: "/assets/medicon/images/logo.svg",
        alt: "Medicon Logo"
      }), React.createElement("div", {
        className: 'pcTitle__title'
      }, React.createElement("h3", null, "Poliklinika"), React.createElement("div", {
        className: 'pcTitle__title__subtitle'
      }, React.createElement("span", null, 'test'), React.createElement("span", {
        className: 'pcTitle__title__subtitle__circles'
      }, React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null), React.createElement("div", null))))));
    });
  }))));
};

var _default = PolyclinicBoxes;
exports.default = _default;