import * as React from 'react';
import DividerCircles from '../DividerCircles';
import ReactMarkdown from 'react-markdown';
var ContactsBlock = function (props) {
    var _a = props.data, title = _a.title, managementTitle = _a.managementTitle, nextTitle = _a.nextTitle, managementContacts = _a.managementContacts, nextContacts = _a.nextContacts, otherContacts = _a.otherContacts;
    return (React.createElement("div", { className: 'contacts-block' },
        React.createElement("div", { className: 'container' },
            title && React.createElement("h3", null, title),
            React.createElement("div", null,
                managementTitle && React.createElement("h4", null, managementTitle),
                React.createElement("div", { className: 'grid contacts-block__main' }, managementContacts && managementContacts.map(function (mContact, i) { return (React.createElement("div", { className: 'contacts-block__main__element', key: i },
                    mContact.name && React.createElement("p", { className: 'contacts-block__name' }, mContact.name),
                    mContact.positions && React.createElement("p", { className: 'contacts-block__position' }, mContact.positions),
                    mContact.emails && React.createElement(ReactMarkdown, { className: 'contacts-block__email', source: mContact.emails }),
                    mContact.phones && React.createElement(ReactMarkdown, { source: mContact.phones }))); }))),
            React.createElement("div", null,
                nextTitle && React.createElement("h4", null, nextTitle),
                React.createElement("div", { className: 'grid contacts-block__main' }, nextContacts && nextContacts.map(function (nContact, i) { return (React.createElement("div", { className: 'contacts-block__main__element', key: i },
                    nContact.name && React.createElement("p", { className: 'contacts-block__name' }, nContact.name),
                    nContact.positions && React.createElement("p", { className: 'contacts-block__position' }, nContact.positions),
                    nContact.emails && React.createElement(ReactMarkdown, { className: 'contacts-block__email', source: nContact.emails }),
                    nContact.phones && React.createElement(ReactMarkdown, { source: nContact.phones }))); }))),
            React.createElement(DividerCircles, null),
            React.createElement("div", { className: 'grid contacts-block__list' }, otherContacts && otherContacts.map(function (oContact, i) { return (React.createElement("div", { className: 'contacts-block__main__element', key: i },
                oContact.name && React.createElement("p", { className: 'contacts-block__name' }, oContact.name),
                oContact.positions && React.createElement("p", { className: 'contacts-block__position' }, oContact.positions),
                oContact.emails && React.createElement(ReactMarkdown, { className: 'contacts-block__email', source: oContact.emails }),
                oContact.phones && React.createElement(ReactMarkdown, { source: oContact.phones }))); })))));
};
export default ContactsBlock;
//# sourceMappingURL=ContactsBlock.js.map