"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../partials/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var data = {
  title: 'Výpis aktuálních pozic',
  items: [{
    position: 'Dermatolog',
    img: '/assets/medicon/images/positions-1.jpg'
  }, {
    position: 'Gynekolog',
    img: '/assets/medicon/images/positions-2.jpg'
  }, {
    position: 'Ortoped',
    img: '/assets/medicon/images/positions-3.jpg'
  }]
};

var JobPositions = function JobPositions(props) {
  return React.createElement("div", {
    className: 'container actual-positions'
  }, React.createElement("h3", null, data.title), React.createElement(_Button.default, {
    classes: "hCenterBlock btn--greyBkg btn--down"
  }, "V\u0161echny polikliniky"), React.createElement("div", {
    className: 'grid positions'
  }, data.items.map(function (item, index) {
    return React.createElement("div", {
      className: 'positions__element',
      style: {
        backgroundImage: "url(" + item.img + ")"
      },
      key: index
    }, React.createElement("div", {
      className: 'positions__element-content'
    }, React.createElement("p", null, item.position), React.createElement(_Button.default, {
      classes: 'btn--whiteBorder'
    }, "Vice info")), React.createElement("div", {
      className: 'positions__colorGradient',
      style: {
        background: "linear-gradient(to bottom, transparent 0%, #2473ba 100%)"
      }
    }));
  })), React.createElement(_Button.default, {
    classes: "hCenterBlock btn--blueBkg btn--down"
  }, "dal\u0161\xED pozice"));
};

var _default = JobPositions;
exports.default = _default;