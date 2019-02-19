"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _ViewsAboutUsElement = _interopRequireDefault(require("./components/ViewsAboutUsElement"));

var _List = _interopRequireDefault(require("../List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ViewsAboutUs = function ViewsAboutUs(props) {
  var _a = props.data,
      title = _a.title,
      views = _a.views;
  return React.createElement("div", {
    className: 'viewsAboutUs'
  }, React.createElement("div", {
    className: 'container'
  }, title && React.createElement("h3", null, title), React.createElement("div", {
    className: 'grid viewsAboutUs__list'
  }, React.createElement(_List.default, {
    data: views
  }, function (_a) {
    var data = _a.data;
    return data && data.map(function (item, i) {
      return React.createElement(_ViewsAboutUsElement.default, {
        key: i,
        url: item.url,
        link: item.link,
        cite: item.cite,
        image: item.image
      });
    });
  }))));
};

var _default = ViewsAboutUs;
exports.default = _default;