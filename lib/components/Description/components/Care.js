"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Care = function Care(props) {
  var title = props.title,
      items = props.items;
  return React.createElement("div", {
    className: 'care'
  }, React.createElement("h3", null, title), React.createElement("div", {
    className: 'hCenterBlock'
  }, items && items.map(function (item, i) {
    return React.createElement("p", {
      key: i,
      dangerouslySetInnerHTML: {
        __html: item
      }
    });
  })));
};

var _default = Care;
exports.default = _default;