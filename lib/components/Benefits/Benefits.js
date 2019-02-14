"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _List = _interopRequireDefault(require("../List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Benefits = function Benefits(props) {
  var items = props.data.items;
  return React.createElement(_List.default, {
    data: items
  }, function (_a) {
    var data = _a.data;
    return React.createElement("section", {
      className: 'benefits'
    }, React.createElement("div", {
      className: 'container'
    }, React.createElement("div", {
      className: 'benefits__list grid'
    }, data && data.map(function (benefit, index) {
      return React.createElement("div", {
        key: index,
        className: 'benefits__list__element grid'
      }, benefit.image && benefit.image.filename && React.createElement(_Media.default, {
        type: 'image',
        data: benefit.image
      }), benefit.text && React.createElement("p", null, benefit.text));
    }))));
  });
};

var _default = Benefits;
exports.default = _default;