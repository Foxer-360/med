"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _ViewsAboutUsElement = _interopRequireDefault(require("./components/ViewsAboutUsElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var data = {
  items: [{
    img: '/assets/medicon/images/review-aboutus-1.jpg',
    cite: '„Úryvek článku lorem ipsum dolor sit amet, consectetuer adipiscing elit.“'
  }, {
    img: '/assets/medicon/images/review-aboutus-1.jpg',
    cite: '„Úryvek článku lorem ipsum dolor sit amet, consectetuer adipiscing elit.“'
  }, {
    img: '/assets/medicon/images/review-aboutus-1.jpg',
    cite: '„Úryvek článku lorem ipsum dolor sit amet, consectetuer adipiscing elit.“'
  }]
};

var ViewsAboutUs = function ViewsAboutUs(props) {
  return React.createElement("div", {
    className: 'viewsAboutUs'
  }, React.createElement("div", {
    className: 'container'
  }, React.createElement("h3", null, "Napsali o n\xE1s"), React.createElement("div", {
    className: 'grid viewsAboutUs__list'
  }, data.items.map(function (item, index) {
    return React.createElement(_ViewsAboutUsElement.default, {
      key: index,
      img: item.img,
      cite: item.cite
    });
  }))));
};

var _default = ViewsAboutUs;
exports.default = _default;