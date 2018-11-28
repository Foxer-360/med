"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _ReviewElement = _interopRequireDefault(require("./components/ReviewElement"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var data = {
  items: [{
    img: '/assets/medicon/images/photo-1.jpg',
    cite: '„Jedna z nejlepších poliklinik v Praze, od recepčních po lékaře.“',
    starCount: 5
  }, {
    img: '/assets/medicon/images/photo-2.jpg',
    cite: '„Jedna z nejlepších poliklinik v Praze, od recepčních po lékaře.“',
    starCount: 5
  }, {
    img: '/assets/medicon/images/photo-3.jpg',
    cite: '„Jedna z nejlepších poliklinik v Praze, od recepčních po lékaře.“',
    starCount: 5
  }]
};

var Reviews =
/** @class */
function (_super) {
  __extends(Reviews, _super);

  function Reviews() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Reviews.prototype.render = function () {
    return React.createElement("section", {
      className: "reviews"
    }, React.createElement("h3", null, "\u0159ekli o n\xE1s"), React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "grid-container"
    }, data.items.map(function (item, index) {
      return React.createElement(_ReviewElement.default, {
        key: index,
        img: item.img,
        cite: item.cite,
        starCount: item.starCount
      });
    }))));
  };

  return Reviews;
}(React.Component);

var _default = Reviews;
exports.default = _default;