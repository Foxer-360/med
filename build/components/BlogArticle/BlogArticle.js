import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import Media from '../../partials/Media';
var BlogArticle = function (props) {
    var _a = props.data, title = _a.title, text = _a.text, image = _a.image;
    return (React.createElement("section", null,
        title && React.createElement("h2", null, title),
        React.createElement(Media, { data: image, type: "image" }),
        React.createElement(ReactMarkdown, { source: text, renderers: {
                paragraph: function (rProps) { return React.createElement("p", null, rProps.children); },
            } })));
};
export default BlogArticle;
//# sourceMappingURL=BlogArticle.js.map