"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var List_1 = require("../List");
var ViewsAboutUsElement_1 = require("./components/ViewsAboutUsElement");
var ViewsAboutUs = function (props) {
    var _a = props.data, title = _a.title, views = _a.views;
    return (React.createElement("div", { className: 'viewsAboutUs' },
        React.createElement("div", { className: 'container' },
            title && React.createElement("h3", null, title),
            React.createElement("div", { className: 'viewsAboutUs__list row' },
                React.createElement(List_1.default, { data: views }, function (_a) {
                    var data = _a.data;
                    return data && data.map(function (item, i) {
                        return (React.createElement(ViewsAboutUsElement_1.default, { key: i, url: item.url, link: item.link, cite: item.cite, image: item.image }));
                    });
                })))));
};
exports.default = ViewsAboutUs;
//# sourceMappingURL=ViewsAboutUs.js.map