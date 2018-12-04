import * as React from 'react';
import Button from '../../Button';
var ExpertiseDescriptionBoxes = function (props) {
    return (React.createElement("section", { className: "info" },
        React.createElement("div", { className: "grid-container" },
            React.createElement("div", { className: "info__element", style: { backgroundImage: 'url("/assets/medicon/images/rect-1.jpg' } },
                React.createElement("div", { className: 'info__element--cell' },
                    React.createElement("h5", null, "Doklady kter\u00E9 pro vy\u0161et\u0159en\u00ED pot\u0159ebujete"),
                    React.createElement(Button, { classes: "btn--whiteBorder" }, "vice info")),
                React.createElement("div", { className: 'info__element--colorGradient' })),
            React.createElement("div", { className: "info__element", style: { backgroundImage: 'url("/assets/medicon/images/rect-2.jpg' } },
                React.createElement("div", { className: 'info__element--cell' },
                    React.createElement("h5", null, "Jak vy\u0161et\u0159en\u00ED prob\u00EDh\u00E1"),
                    React.createElement(Button, { classes: "btn--whiteBorder" }, "vice info")),
                React.createElement("div", { className: 'info__element--colorGradient' })))));
};
export default ExpertiseDescriptionBoxes;
//# sourceMappingURL=ExpertiseDescriptionBoxes.js.map