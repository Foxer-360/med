"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var InfoElement_1 = require("./components/InfoElement");
var List_1 = require("../List");
var InfoBoxes = function (props) {
    var _a = props.data, title = _a.title, boxes = _a.boxes;
    return (React.createElement("section", { className: 'info-boxes' },
        title && React.createElement("h3", null, title),
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'grid info-boxes__list' },
                React.createElement(List_1.default, { data: boxes }, function (_a) {
                    var data = _a.data;
                    return data &&
                        data.map(function (box, i) { return (React.createElement(InfoElement_1.default, { link: box.link, gradientColor: box.gradientColor, title: box.title, image: box.image, button: box.button, titleColor: box.titleColor, key: i })); });
                })))));
};
exports.default = InfoBoxes;
//# sourceMappingURL=InfoBoxes.js.map