"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Avatar = _interopRequireDefault(require("./components/Avatar"));

var _CloseIcon = _interopRequireDefault(require("../../partials/Svg/CloseIcon"));

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

var MyProblem =
/** @class */
function (_super) {
  __extends(MyProblem, _super);

  function MyProblem(props) {
    var _this = _super.call(this, props) || this;

    _this.clickArea = function (area) {
      _this.setState({
        area: area
      });
    };

    _this.closeInfoBox = function () {
      _this.setState({
        area: ''
      });
    };

    _this.state = {
      area: ''
    };
    return _this;
  }

  MyProblem.prototype.render = function () {
    var _this = this;

    return React.createElement("div", {
      className: "container"
    }, React.createElement("section", {
      className: 'myProblem'
    }, React.createElement("h3", null, "M\u016Fj Probl\xE9m se t\xFDk\xE1"), React.createElement("p", null, "Klikn\u011Bte na \u010D\xE1st t\u011Bla se kterou m\xE1te probl\xE9m."), React.createElement("div", {
      className: 'flexRow myProblem__holder'
    }, React.createElement(_Avatar.default, {
      onClick: this.clickArea,
      activeArea: this.state.area ? 'active--' + this.state.area : ''
    }), this.state.area && React.createElement("div", {
      className: "infoBox " + (this.state.area ? 'infoBox--' + this.state.area : '')
    }, React.createElement("div", {
      className: 'infoBox__close',
      onClick: function onClick() {
        return _this.closeInfoBox();
      }
    }, React.createElement(_CloseIcon.default, {
      name: "gray"
    })), React.createElement("div", {
      className: 'infoBox__item'
    }, React.createElement("a", {
      href: ""
    }, this.state.area)), React.createElement("div", {
      className: 'infoBox__item'
    }, React.createElement("a", {
      href: ""
    }, this.state.area)), React.createElement("div", {
      className: 'infoBox__item'
    }, React.createElement("a", {
      href: ""
    }, this.state.area))))));
  };

  return MyProblem;
}(React.Component);

var _default = MyProblem;
exports.default = _default;