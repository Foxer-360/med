import * as React from 'react';
import Button from '../../partials/Button';
import Media from '@source/partials/Media';
var ExpertiseList = function (props) {
    var _a = props.data, title = _a.title, expertiseList = _a.expertiseList;
    return (React.createElement("section", { className: "expertiseList" },
        title && React.createElement("h3", null, title),
        React.createElement("div", { className: "grid-container" }, expertiseList && expertiseList.map(function (item, index) { return (React.createElement("a", { href: item.url, key: index },
            React.createElement("div", { className: "expertiseList__element" },
                (item.image &&
                    React.createElement(Media, { type: 'image', data: item.image })) ||
                    React.createElement("img", { src: '/assets/medicon/images/od-el-1.png', alt: "image" }),
                React.createElement("p", null, item.title)))); })),
        React.createElement("div", { className: 'container' },
            React.createElement(Button, { classes: "btn--blueBkg btn--fullWidth" }, "vice info"))));
};
export default ExpertiseList;
//# sourceMappingURL=ExpertiseList.js.map