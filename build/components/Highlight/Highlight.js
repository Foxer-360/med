import * as React from 'react';
import Button from '../../partials/Button';
import ReactMarkdown from 'react-markdown';
var Highlight = function (props) {
    var _a = props.data, text = _a.text, url = _a.url, description = _a.description, urlTitle = _a.urlTitle;
    return (React.createElement("div", { className: "highlight" },
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'highlight__content' },
                React.createElement("img", { src: "/assets/medicon/images/info.png", alt: "info" }),
                React.createElement("div", null,
                    text && React.createElement("p", null, text),
                    description && React.createElement(ReactMarkdown, { className: 'highlight__content--description', source: description })),
                url && (React.createElement(Button, { classes: 'btn--whiteBorder', url: url }, (urlTitle && urlTitle) || 'more info'))))));
};
export default Highlight;
//# sourceMappingURL=Highlight.js.map