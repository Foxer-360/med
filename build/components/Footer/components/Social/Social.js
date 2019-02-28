var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import SvgIcon from '@source/partials/SvgIcon';
import Link from '@source/partials/Link';
var Social = function (props) {
    var icons = props.icons, info = props.info;
    return (React.createElement("div", { className: "social flexColumn" },
        icons &&
            icons.map(function (icon, i) { return (React.createElement(Link, __assign({}, icon.url, { key: i }),
                React.createElement(SvgIcon, { type: 'white', name: icon.name }))); }),
        info && React.createElement(ReactMarkdown, { className: 'social__text', source: info })));
};
export default Social;
//# sourceMappingURL=Social.js.map