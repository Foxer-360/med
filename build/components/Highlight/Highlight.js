"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactMarkdown = require("react-markdown");
var Button_1 = require("../../partials/Button");
var Highlight = function (props) {
    var _a = props.data, text = _a.text, url = _a.url, description = _a.description, urlTitle = _a.urlTitle;
    return (React.createElement("div", { className: "highlight" },
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'highlight__content' },
                React.createElement("img", { src: "/assets/medicon/images/info.png", alt: "info" }),
                React.createElement("div", null,
                    text && React.createElement("p", null, text),
                    description && React.createElement(ReactMarkdown, { className: 'highlight__content--description', source: description })),
                url && (React.createElement(Button_1.default, { classes: 'btn--whiteBorder', url: url }, (urlTitle && urlTitle) || 'more info'))))));
};
exports.default = Highlight;
//# sourceMappingURL=Highlight.js.map