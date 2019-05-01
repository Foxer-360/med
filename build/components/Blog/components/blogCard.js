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
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
export function BlogCard(props) {
    var url = props.url, title = props.title, text = props.text, color = props.color, img = props.img, special = props.special;
    if (special) {
        return (React.createElement(Link, { className: 'blogCard blogCard--special' },
            React.createElement("h3", null, title),
            React.createElement("p", null, text)));
    }
    return (React.createElement(Link, __assign({ className: 'blogCard' }, url),
        React.createElement("h3", null, title),
        React.createElement("p", null, text),
        img && React.createElement(Media, { type: 'image', data: img }),
        React.createElement("div", { className: 'blogCard__colorGradient', style: { background: "linear-gradient( to bottom,rgba(125, 185, 232, 0) 0%," + color + " 100%)" } })));
}
//# sourceMappingURL=blogCard.js.map