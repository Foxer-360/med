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
var ReactMarkdown = require("react-markdown/with-html");
var Link_1 = require("../../partials/Link");
var Media_1 = require("../../partials/Media");
var PolyclinicInfo = function (props) {
    var _a = props.data, geo = _a.geo, clinic = _a.clinic, transport = _a.transport, clinicColor = _a.clinicColor, geoUrl = _a.geoUrl, transportUrl = _a.transportUrl, phone = _a.phone, transportImage = _a.transportImage;
    return (React.createElement("div", { className: 'policlinicInfo' },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row policlinicInfo__list" },
                React.createElement("div", { className: "col-12 col-lg-4" },
                    React.createElement("div", { className: 'policlinicInfo__item' },
                        React.createElement("img", { src: '/assets/medicon/images/geo.svg', alt: "address" }),
                        React.createElement("div", { className: 'policlinicInfo__item--content' },
                            React.createElement("p", { style: { display: 'block' } }, geo),
                            clinic && React.createElement("p", { style: clinicColor ? { color: "" + clinicColor } : {} }, clinic),
                            geoUrl &&
                                React.createElement(Link_1.default, __assign({}, geoUrl, { style: {
                                        position: 'absolute',
                                        width: '100%',
                                        height: '100%',
                                        top: 0,
                                        left: 0
                                    } }))))),
                React.createElement("div", { className: "col-12 col-lg-4" },
                    React.createElement("div", { className: 'policlinicInfo__item' },
                        React.createElement("img", { src: '/assets/medicon/images/phone.svg', alt: "phone nubmer" }),
                        React.createElement("p", { className: 'policlinicInfo__item--content' }, phone && React.createElement(ReactMarkdown, { skipHtml: false, escapeHtml: false, source: phone })))),
                React.createElement("div", { className: "col-12 col-lg-4" },
                    React.createElement("div", { className: 'policlinicInfo__item' },
                        transportImage && React.createElement(Media_1.default, { type: 'image', data: transportImage, width: '50', height: '50' }),
                        React.createElement("p", { className: 'policlinicInfo__item--content' }, transport),
                        transportUrl &&
                            React.createElement(Link_1.default, __assign({}, transportUrl, { style: {
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    top: 0,
                                    left: 0
                                } }))))))));
};
exports.default = PolyclinicInfo;
//# sourceMappingURL=PolyclinicInfo.js.map