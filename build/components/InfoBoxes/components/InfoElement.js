"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("../../../partials/Button");
var BckgImgWithFallback_1 = require("../../../partials/Media/components/BckgImgWithFallback");
function InfoElement(props) {
    var title = props.title, gradientColor = props.gradientColor, image = props.image, button = props.button, titleColor = props.titleColor, link = props.link;
    return (React.createElement("div", { className: 'col-sm-12 col-lg-6 col-xl-4' },
        React.createElement(BckgImgWithFallback_1.default, { classes: 'info-boxes__list__element', sizes: { width: 386, height: 350 }, originalData: image },
            React.createElement("div", { className: 'info-boxes__list__element__content' },
                title && React.createElement("h5", { style: { color: "" + titleColor } }, title),
                button &&
                    React.createElement(Button_1.default, { url: link, classes: 'btn--fullWidth ' + button }, "v\u00EDce informac\u00ED")),
            gradientColor && (React.createElement("div", { className: 'info-boxes__list__element--colorGradient', style: { background: "linear-gradient(to bottom, rgba(125, 185, 232, 0) 0%, " + gradientColor + " 100%)" } })))));
}
exports.default = InfoElement;
//# sourceMappingURL=InfoElement.js.map