import * as React from 'react';
import SvgIcon from '@source/partials/SvgIcon';
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
import LinesEllipsis from 'react-lines-ellipsis';
export function BlogCard(props) {
    var id = props.id, title = props.title, text = props.text, color = props.color, img = props.img, special = props.special;
    if (special) {
        return (React.createElement(Link, { pageId: id, className: 'blogCard blogCard--special' },
            title && React.createElement("h3", null, title),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("span", null,
                        React.createElement(SvgIcon, { name: 'arrow', type: 'white' })),
                    "L\u00E9ka\u0159e ORL"),
                React.createElement("li", null,
                    React.createElement("span", null,
                        React.createElement(SvgIcon, { name: 'arrow', type: 'white' })),
                    "L\u00E9ka\u0159 pracovn\u011B - l\u00E9ka\u0159sk\u00E9 slu\u017Eby"),
                React.createElement("li", null,
                    React.createElement("span", null,
                        React.createElement(SvgIcon, { name: 'arrow', type: 'white' })),
                    "Dent\u00E1ln\u00ED hygienista/ka"))));
    }
    return (React.createElement(Link, { pageId: id, className: 'blogCard' },
        title && (React.createElement("h3", null,
            React.createElement(LinesEllipsis, { text: title, maxLine: "3", ellipsis: "...", basedOn: "letters", trimRight: true }))),
        text && React.createElement("p", null, text),
        img && React.createElement(Media, { data: img, type: "image" }),
        React.createElement("div", { className: 'blogCard__colorGradient', style: { background: "linear-gradient( to bottom,rgba(125, 185, 232, 0) 0%," + color + " 100%)" } })));
}
//# sourceMappingURL=blogCard.js.map