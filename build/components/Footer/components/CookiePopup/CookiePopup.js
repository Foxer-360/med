"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_cookie_consent_1 = require("react-cookie-consent");
var CookiePopup = function (_a) {
    var lang = _a.lang;
    function renderBanner() {
        return (React.createElement("div", { className: "cookiePopup" },
            React.createElement("img", { src: "/assets/medicon/images/cookie.svg", alt: "cookies" }),
            React.createElement("p", null,
                lang === 'cs'
                    ? 'Tento web používá soubory cookie k analýze návštěvnosti a měření reklam.'
                    : 'This website uses cookies to ensure you get the best experience on our website.',
                ' ',
                React.createElement("a", { href: 'https://cookiesandyou.com/', target: '_blank' }, lang === 'cs'
                    ? 'Další informace o tom, jak používáme soubory cookie'
                    : 'Learn more'))));
    }
    return (React.createElement(react_cookie_consent_1.default, { expires: 365, location: 'bottom', cookieName: 'MediconCookies', acceptOnScroll: false, buttonText: lang === 'cs' ? 'OK' : 'Got it!', acceptOnScrollPercentage: 100, style: { background: '#efefef', color: '#3c3c3b' }, buttonStyle: { background: '#2473ba', color: '#ffffff', fontSize: '13px' } }, renderBanner()));
};
exports.default = CookiePopup;
//# sourceMappingURL=CookiePopup.js.map