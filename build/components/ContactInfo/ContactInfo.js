import * as React from 'react';
var ContactInfo = function (props) {
    return (React.createElement("div", { className: 'contact-info' },
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'grid contact-info__grid' },
                React.createElement("div", { className: 'grid contact-info__grid__element' },
                    React.createElement("img", { src: "/assets/medicon/images/contact-info-1.png", alt: "address" }),
                    React.createElement("div", null,
                        React.createElement("p", null, "MEDICON a.s. Antala Sta\u0161ka 1670/80 140 00 Praha 4"))),
                React.createElement("div", { className: 'grid contact-info__grid__element' },
                    React.createElement("img", { src: "/assets/medicon/images/contact-info-2.png", alt: "phone number" }),
                    React.createElement("div", null,
                        React.createElement("a", { href: 'tel:+420 261 006 111' }, "tel.: +420 261 006 111"),
                        React.createElement("br", null),
                        React.createElement("a", { href: 'tel:+420 261 006 210' }, "fax: +420 261 006 210"))),
                React.createElement("div", { className: 'grid contact-info__grid__element' },
                    React.createElement("img", { src: "/assets/medicon/images/contact-info-3.png", alt: "e-mail" }),
                    React.createElement("div", null,
                        React.createElement("a", { href: 'mailto:info@mediconas.cz' }, "info@mediconas.cz"))),
                React.createElement("div", { className: 'grid contact-info__grid__element' },
                    React.createElement("img", { src: "/assets/medicon/images/contact-info-4.png", alt: "ICO and DIC" }),
                    React.createElement("div", null,
                        React.createElement("p", null, "I\u010CO: 284 63 293"),
                        React.createElement("p", null, "DI\u010C: CZ 284 63 293")))))));
};
export default ContactInfo;
//# sourceMappingURL=ContactInfo.js.map