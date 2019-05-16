"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Media_1 = require("@source/partials/Media");
var Link_1 = require("@source/partials/Link");
function ViewsAboutUsElement(props) {
    var url = props.url, link = props.link, cite = props.cite, image = props.image;
    return (React.createElement("div", { className: "viewsAboutUs__list__element" },
        React.createElement("div", null, image && React.createElement(Media_1.default, { type: 'image', data: image })),
        React.createElement("div", { className: 'viewsAboutUs__list__element__content' },
            cite && React.createElement("cite", null, cite),
            React.createElement(Link_1.default, __assign({}, url),
                "Zdroj: ",
                React.createElement("strong", null, link)))));
}
exports.default = ViewsAboutUsElement;
//# sourceMappingURL=ViewsAboutUsElement.js.map