"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

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

var TemporaryPopup =
/** @class */
function (_super) {
  __extends(TemporaryPopup, _super);

  function TemporaryPopup(props) {
    var _this = _super.call(this, props) || this;

    _this.close = function () {
      _this.setState({
        active: !_this.state.active
      });
    };

    _this.state = {
      active: true,
      // tslint:disable-next-line:max-line-length
      text: 'Vážení návštěvníci, právě jste se dostali na vývojovou verzi webu a informace na něm mohou být neúplné a nepřesné. Tato verze webu slouží pouze pro pracovní účely marketingu a nelze podle něj vyvozovat žádné informace. Pokud chcete získat informace o našich provozech, prosím přejděte na: '
    };
    return _this;
  }

  TemporaryPopup.prototype.render = function () {
    return React.createElement("div", {
      className: "temporaryPopup " + (this.state.active ? '' : 'temporaryPopup--disabled') + " "
    }, React.createElement("i", {
      className: 'temporaryPopup__close',
      onClick: this.close
    }), React.createElement("p", null, this.state.text, React.createElement("a", {
      href: "http://www.mediconas.cz/"
    }, "mediconas.cz"), ". D\u011Bkujeme."));
  };

  return TemporaryPopup;
}(React.Component);

var _default = TemporaryPopup;
exports.default = _default;