"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactMarkdown = require("react-markdown");
var ContactInfo = function (props) {
    var _a = props.data, address = _a.address, phones = _a.phones, emails = _a.emails, additional = _a.additional, clinic = _a.clinic, clinicColor = _a.clinicColor;
    return (React.createElement("div", { className: 'contact-info' },
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'contact-info__grid row' },
                React.createElement("div", { className: "col-12 col-sm-6 col-lg-3" },
                    React.createElement("div", { className: 'contact-info__grid__element' },
                        React.createElement("img", { src: '/assets/medicon/images/contact-info-1.png', alt: "address" }),
                        React.createElement("div", { className: 'contact-info__grid__element__content' },
                            address && React.createElement(ReactMarkdown, { source: address }),
                            clinic && React.createElement("p", { style: clinicColor ? { color: "" + clinicColor } : {} }, clinic)))),
                React.createElement("div", { className: "col-12 col-sm-6 col-lg-3" },
                    React.createElement("div", { className: 'contact-info__grid__element' },
                        React.createElement("img", { src: '/assets/medicon/images/contact-info-2.png', alt: "phone number" }),
                        React.createElement("div", { className: 'contact-info__grid__element__content' }, phones && React.createElement(ReactMarkdown, { source: phones })))),
                React.createElement("div", { className: "col-12 col-sm-6 col-lg-3" },
                    React.createElement("div", { className: 'contact-info__grid__element' },
                        React.createElement("img", { src: '/assets/medicon/images/contact-info-3.png', alt: "e-mail" }),
                        React.createElement("div", { className: 'contact-info__grid__element__content' }, emails && React.createElement(ReactMarkdown, { source: emails })))),
                React.createElement("div", { className: "col-12 col-sm-6 col-lg-3" },
                    React.createElement("div", { className: 'contact-info__grid__element' },
                        React.createElement("img", { src: '/assets/medicon/images/contact-info-4.png', alt: "ICO and DIC" }),
                        React.createElement("div", { className: 'contact-info__grid__element__content' }, additional && React.createElement(ReactMarkdown, { source: additional }))))))));
};
exports.default = ContactInfo;
//# sourceMappingURL=ContactInfo.js.map