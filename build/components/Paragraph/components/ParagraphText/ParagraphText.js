"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactMarkdown = require("react-markdown/with-html");
var ParagraphText = function (props) {
    return (React.createElement("div", { style: props.styles, className: "paragraph__content__text " + props.class }, props.source && React.createElement(ReactMarkdown, { source: props.source, skipHtml: false, escapeHtml: false })));
};
exports.default = ParagraphText;
//# sourceMappingURL=ParagraphText.js.map