"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Media_1 = require("../../../partials/Media");
var SvgIcon_1 = require("../../../partials/SvgIcon");
function ReviewElement(props) {
    var image = props.image, cite = props.cite, starCount = props.starCount;
    var rows = [];
    for (var i = 0; i < starCount; i++) {
        rows.push(React.createElement(SvgIcon_1.default, { name: "star", key: i }));
    } // 5 stars by default
    if (starCount < 5) {
        rows.slice(-(5 - starCount), starCount);
    }
    return (React.createElement("div", { className: 'reviews__list__element' },
        React.createElement("div", null, image && React.createElement(Media_1.default, { type: 'image', data: image })),
        React.createElement("div", { className: 'reviews__list__element__content' },
            cite && React.createElement("cite", null, cite),
            rows && React.createElement("div", { className: 'stars' }, rows))));
}
exports.default = ReviewElement;
//# sourceMappingURL=ReviewElement.js.map