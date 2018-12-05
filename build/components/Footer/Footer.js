var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import Social from './components/Social';
import HelpPopup from './components/HelpPopup';
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        return (React.createElement("footer", { className: 'footer' },
            React.createElement(HelpPopup, null),
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "flexRow flexAlign--space-between" },
                    React.createElement("ul", { className: 'footer__list' },
                        React.createElement("li", null,
                            React.createElement("a", { href: "#" }, "O spole\u010Dnosti")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "#" }, "Skupina PRONATAL")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "#" }, "INCARE")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "#" }, "Aktuality")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "#" }, "Kontakty"))),
                    React.createElement("ul", { className: 'footer__list' },
                        React.createElement("li", null,
                            React.createElement("a", { href: "#" }, "Polikliniky")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "#" }, "Mammacentra")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "#" }, "Onkocentrum")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "#" }, "N\u00E1sledn\u00E1 p\u00E9\u010De ")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "#" }, "L\u00E9k\u00E1rny"))),
                    React.createElement("ul", { className: 'footer__list' },
                        React.createElement("li", null,
                            React.createElement("a", { href: "#" }, "Nej\u010Dast\u011Bj\u0161\u00ED dotazy")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "#" }, "Nab\u00EDdka zam\u011Bstn\u00E1n\u00ED")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "#" }, "Ochrana osobn\u00EDch \u00FAdaj\u016F"))),
                    React.createElement(Social, null))),
            React.createElement("div", { className: "bottom" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "copyrights grid" },
                        React.createElement("p", null, "\u00A9 2018 - MEDICON a.s."),
                        React.createElement("a", { href: "#" },
                            React.createElement("p", null, "Prohl\u00E1\u0161en\u00ED o ochran\u011B osobn\u00EDch \u00FAdaj\u016F")))))));
    };
    return Footer;
}(React.Component));
export default Footer;
//# sourceMappingURL=Footer.js.map