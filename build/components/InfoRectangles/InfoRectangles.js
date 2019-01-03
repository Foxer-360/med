import * as React from 'react';
import Button from '@source/partials/Button';
import getImageUrl from '@source/helpers/getImageUrl';
var InfoRectangles = function (props) {
    var infoRectangles = props.data.infoRectangles;
    return (React.createElement("section", { className: "info-rectangles" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "grid-container" }, infoRectangles && infoRectangles.map(function (rectangle, index) { return (React.createElement("div", { key: index, className: 'info-element', style: { backgroundImage: rectangle.image && "url(" + getImageUrl(rectangle.image) + ")" } },
                React.createElement("div", null,
                    React.createElement("h5", null, rectangle.title),
                    React.createElement(Button, { classes: "btn--blueBorder" }, "vice info")))); })))));
};
export default InfoRectangles;
//# sourceMappingURL=InfoRectangles.js.map