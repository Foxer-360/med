import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import Media from '../../partials/Media';
var BlogArticle = function (props) {
    var _a = props.data, title = _a.title, text = _a.text, image = _a.image, textAlign = _a.textAlign;
    return (React.createElement("section", { className: 'blogArticle' },
        React.createElement("div", { className: "container" },
            title && React.createElement("h1", { className: 'gradientHeading' }, title),
            React.createElement(Media, { data: image, type: "image" }),
            React.createElement("div", { className: "blogArticle__content " + (textAlign || 'center') },
                React.createElement(ReactMarkdown, { source: text, renderers: {
                        paragraph: function (rProps) { return React.createElement("p", null, rProps.children); },
                    } })))));
};
export default BlogArticle;
//# sourceMappingURL=BlogArticle.js.map