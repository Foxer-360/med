"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _InfoElement = _interopRequireDefault(require("./components/InfoElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var data = {
  items: [{
    title: 'široký výběr zdravýchpotravin',
    img: '/assets/medicon/images/info-el-1.jpg',
    color: '#5a2a20',
    btn: 'btn--whiteBorder',
    titleColor: '#ffffff'
  }, {
    title: 'široký výběr zdravýchpotravin',
    img: '/assets/medicon/images/info-el-3.jpg',
    color: '# ',
    btn: 'btn--blueBorder',
    titleColor: '#2eac6c'
  }, {
    title: 'široký výběr zdravýchpotravin',
    img: '/assets/medicon/images/info-el-2.jpg',
    color: '#ffffff',
    btn: 'btn--whiteBorder',
    titleColor: '#ffffff'
  }]
};

var InfoBoxes = function InfoBoxes(props) {
  return React.createElement("section", {
    className: "infoBoxes"
  }, React.createElement("h3", null, "Z na\u0161ich l\xE9k\xE1ren"), React.createElement("div", {
    className: "grid-container"
  }, data.items.map(function (item, index) {
    return React.createElement(_InfoElement.default, {
      color: item.color,
      title: item.title,
      img: item.img,
      btn: item.btn,
      titleColor: item.titleColor,
      key: index
    });
  })));
};

var _default = InfoBoxes;
exports.default = _default;