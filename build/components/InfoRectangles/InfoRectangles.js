"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var List_1 = require("../List");
var Button_1 = require("@source/partials/Button");
var getImageUrl_1 = require("@source/helpers/getImageUrl");
var InfoRectangles = function (props) {
    var infoRectangles = props.data.infoRectangles;
    return (React.createElement("section", { className: "info-rectangles" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "grid-container" },
                React.createElement(List_1.default, { data: infoRectangles }, function (_a) {
                    var data = _a.data;
                    return data &&
                        data.map(function (rectangle, index) { return (React.createElement("div", { key: index, className: 'info-element', style: { backgroundImage: rectangle.image && "url(" + getImageUrl_1.default(rectangle.image) + ")" } },
                            React.createElement("div", null,
                                rectangle.title && React.createElement("h5", null, rectangle.title),
                                React.createElement(Button_1.default, { classes: "btn--blueBorder", url: rectangle.url }, "v\u00EDce informac\u00ED")))); });
                })))));
};
exports.default = InfoRectangles;
//# sourceMappingURL=InfoRectangles.js.map