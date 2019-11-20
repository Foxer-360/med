"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var List_1 = require("../List");
var Button_1 = require("../../partials/Button");
var BckgImgWithFallback_1 = require("../../partials/Media/components/BckgImgWithFallback");
var InfoRectangles = function (props) {
    var infoRectangles = props.data.infoRectangles;
    return (React.createElement("section", { className: "info-rectangles" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row" },
                React.createElement(List_1.default, { data: infoRectangles }, function (_a) {
                    var data = _a.data;
                    return data && data.map(function (rectangle, i) { return (React.createElement("div", { key: i, className: "col-sm-12 col-md-6" },
                        React.createElement(BckgImgWithFallback_1.default, { classes: 'info-rectangles__item', sizes: { width: '386', height: '350' }, image: rectangle.image },
                            React.createElement("div", null,
                                rectangle.title && React.createElement("h5", null, rectangle.title),
                                React.createElement(Button_1.default, { classes: "btn--blueBorder", url: rectangle.url }, "v\u00EDce informac\u00ED"))))); });
                })))));
};
exports.default = InfoRectangles;
//# sourceMappingURL=InfoRectangles.js.map