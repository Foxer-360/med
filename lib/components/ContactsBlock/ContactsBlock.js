"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _DividerCircles = _interopRequireDefault(require("../DividerCircles"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ContactsBlock = function ContactsBlock(props) {
  var _a = props.data,
      title = _a.title,
      managementTitle = _a.managementTitle,
      nextTitle = _a.nextTitle,
      managementContacts = _a.managementContacts,
      nextContacts = _a.nextContacts,
      otherContacts = _a.otherContacts;
  return React.createElement("div", {
    className: 'contacts-block'
  }, React.createElement("div", {
    className: 'container'
  }, title && React.createElement("h3", null, title), React.createElement("div", null, managementTitle && React.createElement("h4", null, managementTitle), React.createElement("div", {
    className: 'grid contacts-block__main'
  }, managementContacts && managementContacts.map(function (mContact, i) {
    return React.createElement("div", {
      className: 'contacts-block__main__element',
      key: i
    }, mContact.name && React.createElement("p", {
      className: 'contacts-block__name'
    }, mContact.name), mContact.positions && React.createElement("p", {
      className: 'contacts-block__position'
    }, mContact.positions), mContact.emails && React.createElement(_reactMarkdown.default, {
      className: 'contacts-block__email',
      source: mContact.emails
    }), mContact.phones && React.createElement(_reactMarkdown.default, {
      source: mContact.phones
    }));
  }))), React.createElement("div", null, nextTitle && React.createElement("h4", null, nextTitle), React.createElement("div", {
    className: 'grid contacts-block__main'
  }, nextContacts && nextContacts.map(function (nContact, i) {
    return React.createElement("div", {
      className: 'contacts-block__main__element',
      key: i
    }, nContact.name && React.createElement("p", {
      className: 'contacts-block__name'
    }, nContact.name), nContact.positions && React.createElement("p", {
      className: 'contacts-block__position'
    }, nContact.positions), nContact.emails && React.createElement(_reactMarkdown.default, {
      className: 'contacts-block__email',
      source: nContact.emails
    }), nContact.phones && React.createElement(_reactMarkdown.default, {
      source: nContact.phones
    }));
  }))), React.createElement(_DividerCircles.default, null), React.createElement("div", {
    className: 'grid contacts-block__list'
  }, otherContacts && otherContacts.map(function (oContact, i) {
    return React.createElement("div", {
      className: 'contacts-block__main__element',
      key: i
    }, oContact.name && React.createElement("p", {
      className: 'contacts-block__name'
    }, oContact.name), oContact.positions && React.createElement("p", {
      className: 'contacts-block__position'
    }, oContact.positions), oContact.emails && React.createElement(_reactMarkdown.default, {
      className: 'contacts-block__email',
      source: oContact.emails
    }), oContact.phones && React.createElement(_reactMarkdown.default, {
      source: oContact.phones
    }));
  }))));
};

var _default = ContactsBlock;
exports.default = _default;