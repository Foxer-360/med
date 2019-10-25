"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactMarkdown = require("react-markdown/with-html");
var TextBlock = function (props) {
    var _a = props.data, title = _a.title, text = _a.text, textAlign = _a.textAlign;
    return (React.createElement("section", { className: 'textBlock' },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: 'textBlock__container' },
                title && React.createElement("h3", { className: 'gradientHeading' }, title),
                text && (React.createElement("div", { className: "textBlock__container__text " + textAlign },
                    React.createElement(ReactMarkdown, { skipHtml: false, escapeHtml: false, source: text, renderers: {
                            paragraph: function (rProps) { return React.createElement(React.Fragment, null, rProps.children); },
                        } })))))));
};
exports.default = TextBlock;
//# sourceMappingURL=TextBlock.js.map