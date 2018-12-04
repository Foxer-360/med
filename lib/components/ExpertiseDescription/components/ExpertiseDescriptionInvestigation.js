"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ExpertiseDescriptionInvestigation = function ExpertiseDescriptionInvestigation(props) {
  var title = props.title,
      items = props.items;
  return React.createElement("div", {
    className: 'investigation'
  }, React.createElement("h3", null, title), React.createElement("div", {
    className: 'grid investigation__blocks hCenterBlock'
  }, items && items.map(function (item, i) {
    return React.createElement("a", {
      href: "#",
      className: 'investigation__block'
    }, React.createElement("p", null, item));
  })));
};

var _default = ExpertiseDescriptionInvestigation;
exports.default = _default;