import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import SvgIcon from '@source/partials/SvgIcon';
var Social = function (props) {
    var icons = props.icons, info = props.info;
    return (React.createElement("div", { className: "social flexColumn" },
        icons && icons.map(function (icon, i) { return (React.createElement("a", { href: icon.url, key: i },
            React.createElement(SvgIcon, { type: 'white', name: icon.name }))); }),
        info &&
            React.createElement(ReactMarkdown, { className: 'social__text', source: info })));
};
export default Social;
//# sourceMappingURL=Social.js.map