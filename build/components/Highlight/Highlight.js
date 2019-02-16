import * as React from 'react';
import Button from '../../partials/Button';
var Highlight = function (props) {
    var _a = props.data, text = _a.text, url = _a.url;
    return (React.createElement("div", { className: "fullWidthContainer" },
        React.createElement("section", { className: 'highlight' },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "flexRow flexAlign--center" },
                    React.createElement("div", { className: 'highlight__info flexRow' },
                        React.createElement("img", { src: "/assets/medicon/images/info.png", alt: "info" }),
                        text && React.createElement("p", null, text)),
                    React.createElement(Button, { classes: "btn--whiteBorder btn--fullWidth", url: url }, "vice info"))))));
};
export default Highlight;
//# sourceMappingURL=Highlight.js.map