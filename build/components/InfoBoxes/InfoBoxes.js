import * as React from 'react';
import Button from '../Button';
var InfoBoxes = function (props) {
    return (React.createElement("section", { className: "infoBoxes" },
        React.createElement("h3", null, "Z na\u0161ich l\u00E9k\u00E1ren"),
        React.createElement("div", { className: "grid-container" },
            React.createElement("div", { className: "info-element", style: { backgroundImage: 'url(assets/medicon/images/info-el-1.jpg)' } },
                React.createElement("div", null,
                    React.createElement("h5", null, "\u0161irok\u00FD v\u00FDb\u011Br zdrav\u00FDchpotravin"),
                    React.createElement(Button, { classes: "btn--blueBorder" }, "vice info"))),
            React.createElement("div", { className: "info-element", style: { backgroundImage: 'url(assets/medicon/images/info-el-2.jpg)' } },
                React.createElement("div", null,
                    React.createElement("h5", null, "\u0161irok\u00FD v\u00FDb\u011Br zdrav\u00FDchpotravin"),
                    React.createElement(Button, { classes: "btn--blueBorder" }, "vice info"))),
            React.createElement("div", { className: "info-element", style: { backgroundImage: 'url(assets/medicon/images/info-el-3.jpg)' } },
                React.createElement("div", null,
                    React.createElement("h5", { className: "light-blue" }, "\u0161irok\u00FD v\u00FDb\u011Br zdrav\u00FDchpotravin"),
                    React.createElement(Button, { classes: "btn--blueBorder" }, "vice info"))))));
};
export default InfoBoxes;
//# sourceMappingURL=InfoBoxes.js.map