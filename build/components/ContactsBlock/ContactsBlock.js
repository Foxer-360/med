"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactMarkdown = require("react-markdown/with-html");
var List_1 = require("../List");
var DividerCircles_1 = require("../DividerCircles");
var ContactsBlock = function (props) {
    var _a = props.data, title = _a.title, managementTitle = _a.managementTitle, nextTitle = _a.nextTitle, managementContacts = _a.managementContacts, nextContacts = _a.nextContacts, otherContacts = _a.otherContacts;
    return (React.createElement("div", { className: 'contacts-block' },
        React.createElement("div", { className: 'container' },
            title && React.createElement("h3", null, title),
            React.createElement("div", null,
                managementTitle && React.createElement("h4", null, managementTitle),
                React.createElement("div", { className: 'contacts-block__main row' },
                    React.createElement(List_1.default, { data: managementContacts }, function (_a) {
                        var data = _a.data;
                        return data && data.map(function (mContact, i) { return (React.createElement("div", { className: 'contacts-block__main__element col-sm-12 col-md-6 col-lg-3', key: i },
                            mContact.name && React.createElement("p", { className: 'contacts-block__name' }, mContact.name),
                            mContact.positions && React.createElement("p", { className: 'contacts-block__position' }, mContact.positions),
                            mContact.emails && React.createElement(ReactMarkdown, { skipHtml: false, escapeHtml: false, className: 'contacts-block__email', source: mContact.emails }),
                            React.createElement("div", { className: "phone" }, mContact.phones && React.createElement(ReactMarkdown, { skipHtml: false, escapeHtml: false, source: mContact.phones })))); });
                    }))),
            React.createElement("div", null,
                nextTitle && React.createElement("h4", null, nextTitle),
                React.createElement("div", { className: 'contacts-block__main row' },
                    React.createElement(List_1.default, { data: nextContacts }, function (_a) {
                        var data = _a.data;
                        return data && data.map(function (nContact, i) { return (React.createElement("div", { className: 'contacts-block__main__element col-sm-12 col-md-6 col-lg-3', key: i },
                            nContact.name && React.createElement("p", { className: 'contacts-block__name' }, nContact.name),
                            nContact.positions && React.createElement("p", { className: 'contacts-block__position' }, nContact.positions),
                            nContact.emails && React.createElement(ReactMarkdown, { className: 'contacts-block__email', skipHtml: false, escapeHtml: false, source: nContact.emails }),
                            React.createElement("div", { className: "phone" }, nContact.phones && React.createElement(ReactMarkdown, { skipHtml: false, escapeHtml: false, source: nContact.phones })))); });
                    }))),
            React.createElement(DividerCircles_1.default, null),
            React.createElement("div", { className: 'contacts-block__main row' },
                React.createElement(List_1.default, { data: otherContacts }, function (_a) {
                    var data = _a.data;
                    return data && data.map(function (oContact, i) { return (React.createElement("div", { className: 'contacts-block__main__element col-sm-12 col-md-6 col-lg-3', key: i },
                        oContact.name && React.createElement("p", { className: 'contacts-block__name' }, oContact.name),
                        oContact.positions && React.createElement("p", { className: 'contacts-block__position' }, oContact.positions),
                        oContact.emails && React.createElement(ReactMarkdown, { className: 'contacts-block__email', skipHtml: false, escapeHtml: false, source: oContact.emails }),
                        React.createElement("div", { className: "phone" }, oContact.phones && React.createElement(ReactMarkdown, { skipHtml: false, escapeHtml: false, source: oContact.phones })))); });
                })))));
};
exports.default = ContactsBlock;
//# sourceMappingURL=ContactsBlock.js.map