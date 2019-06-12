"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Media_1 = require("../../partials/Media");
var PolyclinicInfo = function (props) {
    var _a = props.data, geo = _a.geo, phone = _a.phone, transport = _a.transport, transportImage = _a.transportImage, clinic = _a.clinic, clinicColor = _a.clinicColor;
    return (React.createElement("div", { className: 'policlinicInfo' },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row policlinicInfo__list" },
                React.createElement("div", { className: "col-12 col-lg-4" },
                    React.createElement("div", { className: 'policlinicInfo__item' },
                        React.createElement("img", { src: '/assets/medicon/images/geo.svg', alt: "address" }),
                        React.createElement("div", { className: 'policlinicInfo__item--content' },
                            React.createElement("p", { style: { display: 'block' } }, geo),
                            clinic && React.createElement("p", { style: clinicColor ? { color: "" + clinicColor } : {} }, clinic)))),
                React.createElement("div", { className: "col-12 col-lg-4" },
                    React.createElement("div", { className: 'policlinicInfo__item' },
                        React.createElement("img", { src: '/assets/medicon/images/phone.svg', alt: "phone nubmer" }),
                        React.createElement("p", { className: 'policlinicInfo__item--content' }, phone))),
                React.createElement("div", { className: "col-12 col-lg-4" },
                    React.createElement("div", { className: 'policlinicInfo__item' },
                        transportImage && React.createElement(Media_1.default, { type: 'image', data: transportImage }),
                        React.createElement("p", { className: 'policlinicInfo__item--content' }, transport)))))));
};
exports.default = PolyclinicInfo;
//# sourceMappingURL=PolyclinicInfo.js.map