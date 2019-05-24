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
var List_1 = require("../List");
var Link_1 = require("../../partials/Link");
var Media_1 = require("../../partials/Media");
var DividerCircles_1 = require("../DividerCircles");
var PolyclinicBoxes = function (props) {
    var _a = props.data, title = _a.title, polyclinics = _a.polyclinics;
    return (React.createElement("section", { className: 'polyclinicBoxes' },
        React.createElement(DividerCircles_1.default, null),
        React.createElement("div", { className: 'container' },
            title && React.createElement("h3", null, title),
            React.createElement("ul", { className: 'grid' },
                React.createElement(List_1.default, { data: polyclinics }, function (_a) {
                    var data = _a.data;
                    return data && data.map(function (polyclinic, index) {
                        var url = polyclinic.url, name = polyclinic.name, image = polyclinic.image;
                        return (React.createElement("li", { key: index },
                            React.createElement(Link_1.default, __assign({}, url)),
                            React.createElement("div", { className: 'colorGradient' }),
                            image && image.filename && React.createElement(Media_1.default, { data: image, type: 'image' }),
                            name && (React.createElement("div", { className: 'pcTitle' },
                                React.createElement("img", { src: "/assets/medicon/images/logo.svg", alt: "Medicon Logo" }),
                                React.createElement("div", { className: 'pcTitle__title' },
                                    React.createElement("h3", null, "Poliklinika"),
                                    React.createElement("div", { className: 'pcTitle__title__subtitle' },
                                        React.createElement("span", null, name),
                                        React.createElement("span", { className: 'pcTitle__title__subtitle__circles' },
                                            React.createElement("div", null),
                                            React.createElement("div", null),
                                            React.createElement("div", null),
                                            React.createElement("div", null),
                                            React.createElement("div", null),
                                            React.createElement("div", null))))))));
                    });
                })))));
};
exports.default = PolyclinicBoxes;
//# sourceMappingURL=PolyclinicBoxes.js.map