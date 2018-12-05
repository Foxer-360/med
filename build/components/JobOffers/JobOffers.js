import * as React from 'react';
var jobOffers = function (props) {
    return (React.createElement("div", { className: 'container' },
        React.createElement("section", { className: 'jobOffers' },
            React.createElement("h3", null, "Aktu\u00E1ln\u00ED nab\u00EDdky"),
            React.createElement("div", { className: "grid offers" },
                React.createElement("a", { href: "#", className: 'flexRow offers__element', style: { backgroundImage: 'url(/assets/medicon/images/offers-lekar.png)' } },
                    React.createElement("p", { className: 'hCenterBlock' }, "L\u00E9ka\u0159sk\u00E9 pozice")),
                React.createElement("a", { href: "#", className: 'flexRow offers__element', style: { backgroundImage: 'url(/assets/medicon/images/offers-ostatni.png)' } },
                    React.createElement("p", { className: 'hCenterBlock' }, "Ostatn\u00ED pozice"))))));
};
export default jobOffers;
//# sourceMappingURL=JobOffers.js.map