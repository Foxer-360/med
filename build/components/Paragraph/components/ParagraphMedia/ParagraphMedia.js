"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Media_1 = require("../../../../partials/Media");
var ParagraphMedia = function (props) {
    return (React.createElement("div", { style: props.styles, className: "paragraph__content__images " + props.class }, props.source &&
        React.createElement(Media_1.default, { type: 'image', data: props.source, width: props.width, height: '438' })));
};
exports.default = ParagraphMedia;
//# sourceMappingURL=ParagraphMedia.js.map