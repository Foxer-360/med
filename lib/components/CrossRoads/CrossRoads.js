"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var CrossRoads = function CrossRoads(props) {
  var items = props.data.items;
  return React.createElement("section", {
    className: 'crossRoads'
  }, React.createElement("div", {
    className: 'container'
  }, React.createElement("div", {
    className: 'crossRoads__wrapper'
  }, items && items.map(function (item, index) {
    return React.createElement("a", {
      className: 'crossRoads__card',
      href: "",
      key: index
    }, React.createElement("div", {
      className: 'crossRoads__card__img'
    }, item.image && React.createElement(_Media.default, {
      type: "image",
      data: item.image
    }) || React.createElement("img", {
      src: "./assets/medicon/images/hospitalIcon.svg"
    })), item.text && React.createElement("p", null, item.text));
  }))));
};

var _default = CrossRoads;
exports.default = _default;