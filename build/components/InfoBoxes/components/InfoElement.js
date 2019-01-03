import * as React from 'react';
import Button from '@source/partials/Button';
import getImageUrl from '@source/helpers/getImageUrl';
import Link from '@source/partials/Link';
export default function InfoElement(props) {
    var title = props.title, gradientColor = props.gradientColor, image = props.image, button = props.button, titleColor = props.titleColor, link = props.link, languageCode = props.languageCode;
    return (React.createElement(Link, { url: link && link.url, languageCode: languageCode, className: 'info-boxes__list__element', style: { backgroundImage: image && "url(" + getImageUrl(image) + ")" } },
        React.createElement("div", { className: 'fullWidthContainer info-boxes__list__element__content' },
            titleColor && title && React.createElement("h5", { style: { color: "" + titleColor } }, title),
            button && React.createElement(Button, { classes: 'btn--fullWidth ' + button }, "vice info")),
        gradientColor && (React.createElement("div", { className: 'info-boxes__list__element--colorGradient', style: { background: "linear-gradient(to bottom, rgba(125, 185, 232, 0) 0%, " + gradientColor + " 100%)" } }))));
}
//# sourceMappingURL=InfoElement.js.map