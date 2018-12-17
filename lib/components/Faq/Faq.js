"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../../lib/partials/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var data = {
  items: [{
    title: 'Lorem ipsum dolor sit amet?',
    // tslint:disable-next-line:max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu bibendum nulla, ac efficitur odio. Maecenas eu ligula eget ipsum scelerisque posuere. Integer rutrum tristique nisl hendrerit fringilla. Etiam interdum nunc nec scelerisque pulvinar. Phasellus iaculis commodo dui, non aliquet est egestas eget. Nullam arcu enim, laoreet non consectetur in, sodales eu risus.'
  }, {
    title: 'Lorem ipsum dolor sit amet?',
    // tslint:disable-next-line:max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu bibendum nulla, ac efficitur odio. Maecenas eu ligula eget ipsum scelerisque posuere. Integer rutrum tristique nisl hendrerit fringilla. Etiam interdum nunc nec scelerisque pulvinar. Phasellus iaculis commodo dui, non aliquet est egestas eget. Nullam arcu enim, laoreet non consectetur in, sodales eu risus.'
  }, {
    title: 'Lorem ipsum dolor sit amet?',
    // tslint:disable-next-line:max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu bibendum nulla, ac efficitur odio. Maecenas eu ligula eget ipsum scelerisque posuere. Integer rutrum tristique nisl hendrerit fringilla. Etiam interdum nunc nec scelerisque pulvinar. Phasellus iaculis commodo dui, non aliquet est egestas eget. Nullam arcu enim, laoreet non consectetur in, sodales eu risus.'
  }, {
    title: 'Lorem ipsum dolor sit amet?',
    // tslint:disable-next-line:max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu bibendum nulla, ac efficitur odio. Maecenas eu ligula eget ipsum scelerisque posuere. Integer rutrum tristique nisl hendrerit fringilla. Etiam interdum nunc nec scelerisque pulvinar. Phasellus iaculis commodo dui, non aliquet est egestas eget. Nullam arcu enim, laoreet non consectetur in, sodales eu risus.'
  }]
};

var Faq = function Faq(props) {
  var items = data.items;
  return React.createElement("div", {
    className: 'faq'
  }, React.createElement("div", {
    className: 'container'
  }, items && items.map(function (item, index) {
    return React.createElement("div", {
      key: index,
      className: 'faq__element'
    }, React.createElement("h3", null, item.title), React.createElement("p", null, item.description));
  }), React.createElement(_Button.default, {
    classes: 'hCenterBlock btn--blueBkg btn--down btn--fullWidth'
  }, "v\xEDce info")));
};

var _default = Faq;
exports.default = _default;