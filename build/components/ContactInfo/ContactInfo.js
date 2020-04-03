"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactMarkdown = require("react-markdown/with-html");
var ContactInfo = function (props) {
    var _a = props.data, address = _a.address, phones = _a.phones, emails = _a.emails, additional = _a.additional, clinic = _a.clinic, clinicColor = _a.clinicColor;
    var source = [
        'Zelená budova',
        'Žlutá budova',
        'Červená budova',
        'Fialová budova',
    ];
    var result = [
        '<b style="color: green">Zelená budova</b>',
        '<b style="color: #AA8F00">Žlutá budova</b>',
        '<b style="color: red">Červená budova</b>',
        '<b style="color: purple">Fialová budova</b>',
    ];
    var finalAddress = address;
    for (var i = source.length - 1; i >= 0; i--) {
        finalAddress = finalAddress.replace("" + source[i], "" + result[i]);
    }
    return (React.createElement("div", { className: 'contact-info' },
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'contact-info__grid row' },
                React.createElement("div", { className: "col-12 col-sm-6 col-lg-3" },
                    React.createElement("div", { className: 'contact-info__grid__element' },
                        React.createElement("img", { src: '/assets/medicon/images/contact-info-1.png', alt: "address" }),
                        React.createElement("div", { className: 'contact-info__grid__element__content' },
                            address && React.createElement(ReactMarkdown, { skipHtml: false, escapeHtml: false, source: finalAddress }),
                            clinic && React.createElement("p", { style: clinicColor ? { color: "" + clinicColor } : {} }, clinic)))),
                React.createElement("div", { className: "col-12 col-sm-6 col-lg-3" },
                    React.createElement("div", { className: 'contact-info__grid__element' },
                        React.createElement("img", { src: '/assets/medicon/images/contact-info-2.png', alt: "phone number" }),
                        React.createElement("div", { className: 'contact-info__grid__element__content phone' }, phones && React.createElement(ReactMarkdown, { skipHtml: false, escapeHtml: false, source: phones })))),
                React.createElement("div", { className: "col-12 col-sm-6 col-lg-3" },
                    React.createElement("div", { className: 'contact-info__grid__element' },
                        React.createElement("img", { src: '/assets/medicon/images/contact-info-3.png', alt: "e-mail" }),
                        React.createElement("div", { className: 'contact-info__grid__element__content' }, emails && React.createElement(ReactMarkdown, { skipHtml: false, escapeHtml: false, source: emails })))),
                React.createElement("div", { className: "col-12 col-sm-6 col-lg-3" },
                    React.createElement("div", { className: 'contact-info__grid__element' },
                        React.createElement("img", { src: '/assets/medicon/images/contact-info-4.png', alt: "ICO and DIC" }),
                        React.createElement("div", { className: 'contact-info__grid__element__content' }, additional && React.createElement(ReactMarkdown, { skipHtml: false, escapeHtml: false, source: additional }))))))));
};
exports.default = ContactInfo;
//# sourceMappingURL=ContactInfo.js.map