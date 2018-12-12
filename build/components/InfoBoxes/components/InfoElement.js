import * as React from 'react';
import Button from '../../../partials/Button';
export default function InfoElement(props) {
    var title = props.title, color = props.color, img = props.img, btn = props.btn, titleColor = props.titleColor;
    return (React.createElement("a", { className: 'infoBoxes__element', style: { backgroundImage: "url(" + img + ")" } },
        React.createElement("div", { className: 'fullWidthContainer infoBoxes__element__content' },
            React.createElement("h5", { style: { color: "" + titleColor } }, title),
            React.createElement(Button, { classes: btn }, "vice info")),
        React.createElement("div", { className: 'infoBoxes__element--colorGradient', style: { background: "linear-gradient(to bottom, rgba(125, 185, 232, 0) 0%, " + color + " 100%)", } })));
}
//# sourceMappingURL=InfoElement.js.map