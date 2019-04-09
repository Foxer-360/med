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
import Media from '@source/partials/Media';
import Link from '@source/partials/Link';
import List from '../List';
import DividerCircles from '../DividerCircles';
var PolyclinicBoxes = function (props) {
    var _a = props.data, title = _a.title, polyclinics = _a.polyclinics;
    return (React.createElement("section", { className: 'polyclinicBoxes' },
        React.createElement(DividerCircles, null),
        React.createElement("div", { className: 'container' },
            title && React.createElement("h3", null, title),
            React.createElement("ul", { className: 'grid' },
                React.createElement(List, { data: polyclinics }, function (_a) {
                    var data = _a.data;
                    return data && data.map(function (polyclinic, index) {
                        var url = polyclinic.url, name = polyclinic.name, image = polyclinic.image;
                        return (React.createElement("li", { key: index },
                            React.createElement(Link, __assign({}, url)),
                            React.createElement("div", { className: 'colorGradient' }),
                            image && image.filename && React.createElement(Media, { data: image, type: 'image' }),
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
export default PolyclinicBoxes;
//# sourceMappingURL=PolyclinicBoxes.js.map