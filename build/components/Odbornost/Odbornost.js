import * as React from 'react';
import TextBlock from '../TextBlock';
import DividerCircles from '../DividerCircles';
var data = {
    title: 'Alergologie a Imunologie',
    img: '/assets/medicon/images/odbornost-lekar.jpg',
    doctor: 'MUDr. Hana Kocherová',
    cite: 'Na našem oddělení Lorem ipsum dolor sit amet, consectetur adipiscingelit. Vivamus eu bibendum nulla, ac efficitur odio.'
};
var Odbornost = function (props) {
    return (React.createElement("div", { className: 'odbornost' },
        React.createElement(TextBlock, { data: data }),
        React.createElement(DividerCircles, null),
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'odbornost__doctor' },
                React.createElement("img", { src: data.img, alt: "photo" }),
                React.createElement("div", { className: "grid grid--vCenterBlock" },
                    React.createElement("div", null,
                        React.createElement("div", { className: 'horizontal-line' }),
                        React.createElement("p", null, data.doctor),
                        React.createElement("cite", null, data.cite)))))));
};
export default Odbornost;
//# sourceMappingURL=Odbornost.js.map