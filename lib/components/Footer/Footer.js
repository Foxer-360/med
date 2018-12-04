"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Social = _interopRequireDefault(require("./components/Social"));

var _HelpPopup = _interopRequireDefault(require("./components/HelpPopup"));

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

var Footer =
/** @class */
function (_super) {
  __extends(Footer, _super);

  function Footer() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Footer.prototype.render = function () {
    return React.createElement("footer", {
      className: 'footer'
    }, React.createElement(_HelpPopup.default, null), React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "flexRow flexAlign--space-between"
    }, React.createElement("ul", {
      className: 'footer__list'
    }, React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, "O spole\u010Dnosti")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, "Skupina PRONATAL")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, "INCARE")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, "Aktuality")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, "Kontakty"))), React.createElement("ul", {
      className: 'footer__list'
    }, React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, "Polikliniky")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, "Mammacentra")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, "Onkocentrum")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, "N\xE1sledn\xE1 p\xE9\u010De ")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, "L\xE9k\xE1rny"))), React.createElement("ul", {
      className: 'footer__list'
    }, React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, "Nej\u010Dast\u011Bj\u0161\xED dotazy")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, "Nab\xEDdka zam\u011Bstn\xE1n\xED")), React.createElement("li", null, React.createElement("a", {
      href: "#"
    }, "Ochrana osobn\xEDch \xFAdaj\u016F"))), React.createElement(_Social.default, null))), React.createElement("div", {
      className: "bottom"
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "copyrights grid"
    }, React.createElement("p", null, "\xA9 2018 - MEDICON a.s."), React.createElement("a", {
      href: "#"
    }, React.createElement("p", null, "Prohl\xE1\u0161en\xED o ochran\u011B osobn\xEDch \xFAdaj\u016F"))))));
  };

  return Footer;
}(React.Component);

var _default = Footer;
exports.default = _default;