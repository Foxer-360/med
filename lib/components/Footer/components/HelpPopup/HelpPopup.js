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

var HelpPopup =
/** @class */
function (_super) {
  __extends(HelpPopup, _super);

  function HelpPopup(props) {
    var _this = _super.call(this, props) || this;

    _this.toggleList = function () {
      _this.setState({
        active: !_this.state.active
      });
    };

    _this.state = {
      active: false
    };
    return _this;
  }

  HelpPopup.prototype.render = function () {
    var _this = this;

    return React.createElement("div", {
      className: "helpPopup " + (this.state.active ? 'helpPopup--active' : '') + " "
    }, React.createElement("div", {
      className: 'helpPopup__main',
      style: {
        backgroundImage: 'url(/assets/medicon/images/phoneIcon.svg)'
      },
      onClick: function onClick() {
        return _this.toggleList();
      }
    }, React.createElement("h4", null, "Pot\u0159ebujete poradit?")), React.createElement("ul", {
      className: 'helpPopup__list'
    }, React.createElement("li", {
      style: {
        backgroundImage: 'url(/assets/medicon/images/phoneIcon.svg)'
      }
    }, React.createElement("p", null, "Poliklinika Bud\u011Bjovick\xE1"), React.createElement("a", {
      href: "tel:+420261006111"
    }, "+420 261 006 111")), React.createElement("li", {
      style: {
        backgroundImage: 'url(/assets/medicon/images/phoneIcon.svg)'
      }
    }, React.createElement("p", null, "Poliklinika Hole\u0161ovice"), React.createElement("a", {
      href: "tel:+420227777677"
    }, "+420 227 777 677")), React.createElement("li", {
      style: {
        backgroundImage: 'url(/assets/medicon/images/phoneIcon.svg)'
      }
    }, React.createElement("p", null, "Poliklinika Vyso\u010Dany"), React.createElement("a", {
      href: "tel:+420266006211"
    }, "+420 266 006 211")), React.createElement("li", {
      style: {
        backgroundImage: 'url(/assets/medicon/images/phoneIcon.svg)'
      }
    }, React.createElement("p", null, "Poliklinika Zelen\xFD pruh"), React.createElement("a", {
      href: "tel:+420234105111"
    }, "+420 234 105 111"))));
  };

  return HelpPopup;
}(React.Component);

var _default = HelpPopup;
exports.default = _default;