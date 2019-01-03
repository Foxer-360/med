import * as React from 'react';
import ReactMarkdown from 'react-markdown';
var ExpertiseDescriptionCare = function (props) {
    var title = props.title, text = props.text;
    return (React.createElement("div", { className: 'care' },
        title && React.createElement("h3", null, title),
        React.createElement("div", { className: 'hCenterBlock' }, text && React.createElement(ReactMarkdown, { source: text }))));
};
export default ExpertiseDescriptionCare;
//# sourceMappingURL=ExpertiseDescriptionCare.js.map