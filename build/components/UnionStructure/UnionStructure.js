"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_masonry_css_1 = require("react-masonry-css");
var ReactMarkdown = require("react-markdown");
var List_1 = require("../List");
function UnionStructure(props) {
    var _a = props.data, title = _a.title, items = _a.items;
    return (React.createElement("div", { className: "container" },
        React.createElement("div", { className: "unionStructure" },
            title && React.createElement("h3", null, title),
            React.createElement(List_1.default, { data: items }, function (_a) {
                var data = _a.data;
                return (React.createElement(react_masonry_css_1.default, { className: "my-masonry-grid", columnClassName: "my-masonry-grid_column", breakpointCols: { default: 3, 4000: 3, 993: 2, 769: 1 } }, data && data.map(function (item, i) { return (React.createElement("div", { key: i, className: "unionStructure__item" },
                    React.createElement("h5", null, item.title),
                    React.createElement(ReactMarkdown, { skipHtml: false, escapeHtml: false, source: item.text, className: 'unionStructure__item__container' }))); })));
            }))));
}
exports.default = UnionStructure;
//# sourceMappingURL=UnionStructure.js.map