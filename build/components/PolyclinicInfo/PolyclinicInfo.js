import * as React from 'react';
import Media from '@source/partials/Media';
import DividerCircles from '../DividerCircles';
var PolyclinicInfo = function (props) {
    var _a = props.data, geo = _a.geo, phone = _a.phone, transport = _a.transport, transportImage = _a.transportImage, clinic = _a.clinic, clinicColor = _a.clinicColor;
    return (React.createElement("div", { className: 'policlinicInfo' },
        React.createElement(DividerCircles, null),
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
                transportImage && React.createElement(Media, { type: 'image', data: transportImage }),
                React.createElement("p", null, transport)))));
};
export default PolyclinicInfo;
//# sourceMappingURL=PolyclinicInfo.js.map