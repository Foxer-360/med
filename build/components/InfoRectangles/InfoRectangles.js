import * as React from 'react';
import Button from '@source/partials/Button';
import getImageUrl from '@source/helpers/getImageUrl';
import List from '../List';
var InfoRectangles = function (props) {
    var infoRectangles = props.data.infoRectangles;
    return (React.createElement("section", { className: "info-rectangles" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "grid-container" },
                React.createElement(List, { data: infoRectangles }, function (_a) {
                    var data = _a.data;
                    return data &&
                        data.map(function (rectangle, index) { return (React.createElement("div", { key: index, className: 'info-element', style: { backgroundImage: rectangle.image && "url(" + getImageUrl(rectangle.image) + ")" } },
                            React.createElement("div", null,
                                rectangle.title && React.createElement("h5", null, rectangle.title),
                                React.createElement(Button, { classes: "btn--blueBorder", url: rectangle.url }, "vice info")))); });
                })))));
};
export default InfoRectangles;
//# sourceMappingURL=InfoRectangles.js.map