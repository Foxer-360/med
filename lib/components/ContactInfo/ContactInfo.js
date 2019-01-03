"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ContactInfo = function ContactInfo(props) {
  var _a = props.data,
      address = _a.address,
      phones = _a.phones,
      emails = _a.emails,
      additional = _a.additional;
  return React.createElement("div", {
    className: 'contact-info'
  }, React.createElement("div", {
    className: 'container'
  }, React.createElement("div", {
    className: 'grid contact-info__grid'
  }, React.createElement("div", {
    className: 'grid contact-info__grid__element'
  }, React.createElement("img", {
    src: '/assets/medicon/images/contact-info-1.png',
    alt: "address"
  }), React.createElement("div", null, address && React.createElement(_reactMarkdown.default, {
    source: address
  }))), React.createElement("div", {
    className: 'grid contact-info__grid__element'
  }, React.createElement("img", {
    src: '/assets/medicon/images/contact-info-2.png',
    alt: "phone number"
  }), React.createElement("div", null, phones && React.createElement(_reactMarkdown.default, {
    source: phones
  }))), React.createElement("div", {
    className: 'grid contact-info__grid__element'
  }, React.createElement("img", {
    src: '/assets/medicon/images/contact-info-3.png',
    alt: "e-mail"
  }), React.createElement("div", null, emails && React.createElement(_reactMarkdown.default, {
    source: emails
  }))), React.createElement("div", {
    className: 'grid contact-info__grid__element'
  }, React.createElement("img", {
    src: '/assets/medicon/images/contact-info-4.png',
    alt: "ICO and DIC"
  }), React.createElement("div", null, additional && React.createElement(_reactMarkdown.default, {
    source: additional
  }))))));
};

var _default = ContactInfo;
exports.default = _default;