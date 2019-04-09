import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import Media from '../../partials/Media';
var BlogArticle = function (props) {
    var _a = props.data, title = _a.title, text = _a.text, image = _a.image, textAlign = _a.textAlign, isImageSquare = _a.isImageSquare;
    return (React.createElement("section", { className: 'blogArticle' },
        React.createElement("div", { className: "container" },
            title && React.createElement("h1", { className: 'gradientHeading' }, title),
            image &&
                React.createElement(Media, { data: image, type: "image", height: isImageSquare && '600', classes: isImageSquare ? 'blogArticle--squareImage' : '' }),
            React.createElement("div", { className: "blogArticle__content " + (textAlign || 'center') },
                React.createElement(ReactMarkdown, { source: text, renderers: {
                        // tslint:disable-next-line:no-any
                        paragraph: function (rProps) { return React.createElement("p", null, rProps.children); },
                    } })))));
};
export default BlogArticle;
//# sourceMappingURL=BlogArticle.js.map