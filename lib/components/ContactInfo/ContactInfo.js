"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ContactInfo = function ContactInfo(props) {
  return React.createElement("div", {
    className: 'contact-info'
  }, React.createElement("div", {
    className: 'container'
  }, React.createElement("div", {
    className: 'grid contact-info__grid'
  }, React.createElement("div", {
    className: 'grid contact-info__grid__element'
  }, React.createElement("img", {
    src: "/assets/medicon/images/contact-info-1.png",
    alt: "address"
  }), React.createElement("div", null, React.createElement("p", null, "MEDICON a.s. Antala Sta\u0161ka 1670/80 140 00 Praha 4"))), React.createElement("div", {
    className: 'grid contact-info__grid__element'
  }, React.createElement("img", {
    src: "/assets/medicon/images/contact-info-2.png",
    alt: "phone number"
  }), React.createElement("div", null, React.createElement("a", {
    href: 'tel:+420 261 006 111'
  }, "tel.: +420 261 006 111"), React.createElement("br", null), React.createElement("a", {
    href: 'tel:+420 261 006 210'
  }, "fax: +420 261 006 210"))), React.createElement("div", {
    className: 'grid contact-info__grid__element'
  }, React.createElement("img", {
    src: "/assets/medicon/images/contact-info-3.png",
    alt: "e-mail"
  }), React.createElement("div", null, React.createElement("a", {
    href: 'mailto:info@mediconas.cz'
  }, "info@mediconas.cz"))), React.createElement("div", {
    className: 'grid contact-info__grid__element'
  }, React.createElement("img", {
    src: "/assets/medicon/images/contact-info-4.png",
    alt: "ICO and DIC"
  }), React.createElement("div", null, React.createElement("p", null, "I\u010CO: 284 63 293"), React.createElement("p", null, "DI\u010C: CZ 284 63 293"))))));
};

var _default = ContactInfo;
exports.default = _default;