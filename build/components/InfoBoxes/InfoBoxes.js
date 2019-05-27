"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var List_1 = require("../List");
var InfoElement_1 = require("./components/InfoElement");
var InfoBoxes = function (props) {
    var _a = props.data, title = _a.title, boxes = _a.boxes;
    return (React.createElement("section", { className: 'info-boxes' },
        React.createElement("div", { className: 'container' },
            title && React.createElement("h3", null, title),
            React.createElement("div", { className: 'info-boxes__list row' },
                React.createElement(List_1.default, { data: boxes }, function (_a) {
                    var data = _a.data;
                    return data &&
                        data.map(function (box, i) { return (React.createElement(InfoElement_1.default, { key: i, link: box.link, title: box.title, image: box.image, button: box.button, titleColor: box.titleColor, gradientColor: box.gradientColor })); });
                })))));
};
exports.default = InfoBoxes;
//# sourceMappingURL=InfoBoxes.js.map