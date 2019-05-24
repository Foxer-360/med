"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Media_1 = require("../../partials/Media");
var DividerCircles_1 = require("../DividerCircles");
var PolyclinicInfo = function (props) {
    var _a = props.data, geo = _a.geo, phone = _a.phone, transport = _a.transport, transportImage = _a.transportImage, clinic = _a.clinic, clinicColor = _a.clinicColor;
    return (React.createElement("div", { className: 'policlinicInfo' },
        React.createElement(DividerCircles_1.default, null),
        React.createElement("div", { className: 'policlinicInfo__wrapper' },
            React.createElement("div", { className: 'policlinicInfo__item' },
                React.createElement("img", { src: '/assets/medicon/images/geo.svg', alt: "address" }),
                React.createElement("div", null,
                    React.createElement("p", { style: { display: 'block' } }, geo),
                    clinic && React.createElement("p", { style: clinicColor ? { color: "" + clinicColor } : {} }, clinic))),
            React.createElement("div", { className: 'policlinicInfo__item' },
                React.createElement("img", { src: '/assets/medicon/images/phone.svg', alt: "phone nubmer" }),
                React.createElement("p", null, phone)),
            React.createElement("div", { className: 'policlinicInfo__item' },
                transportImage && React.createElement(Media_1.default, { type: 'image', data: transportImage }),
                React.createElement("p", null, transport)))));
};
exports.default = PolyclinicInfo;
//# sourceMappingURL=PolyclinicInfo.js.map