import * as React from 'react';
import getImageUrl from '../../../helpers/getImageUrl';
import Button from '@source/partials/Button';
var ExpertiseDescriptionBoxes = function (props) {
    var boxes = props.boxes;
    return (React.createElement("section", { className: "info" },
        React.createElement("div", { className: "grid-container" }, boxes && boxes.map(function (box, i) { return (React.createElement("div", { key: i, className: 'info__element', style: { backgroundImage: box.image && "url(" + getImageUrl(box.image) + ")" } },
            React.createElement("div", { className: 'info__element--cell' },
                box.title && React.createElement("h5", null, box.title),
                React.createElement("div", null,
                    React.createElement(Button, { url: box.url && box.url, classes: 'btn--whiteBorder' }, "vice info"))),
            React.createElement("div", { className: 'info__element--colorGradient' }))); }))));
};
export default ExpertiseDescriptionBoxes;
//# sourceMappingURL=ExpertiseDescriptionBoxes.js.map