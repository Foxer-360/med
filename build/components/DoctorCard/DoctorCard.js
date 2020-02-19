"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var List_1 = require("../List");
var TextBlock_1 = require("../TextBlock");
var Media_1 = require("../../partials/Media");
var DoctorCard = function (props) {
    var _a = props.data, name = _a.name, specialization = _a.specialization, phone = _a.phone, nurse = _a.nurse, doctorImage = _a.doctorImage, clinicName = _a.clinicName, clinicExtraInfo = _a.clinicExtraInfo, clinicAddress = _a.clinicAddress, additionalInfo = _a.additionalInfo, clinicColor = _a.clinicColor;
    return (React.createElement("section", { className: 'doctorCard' },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: 'doctorCard__main' },
                (doctorImage && doctorImage.filename &&
                    React.createElement(Media_1.default, { data: doctorImage, type: "image", width: '400', height: '400' })) || (React.createElement("img", { src: "/assets/medicon/images/doctorIcon.svg" })),
                name && React.createElement("h3", { className: 'gradientHeading' }, name),
                specialization && React.createElement("p", { className: 'doctorCard__main__spe' }, specialization),
                nurse && nurse.length > 1 && (React.createElement("p", { className: 'doctorCard__main__sis' },
                    "Sestra: ",
                    React.createElement("strong", null, nurse))))),
        React.createElement("div", { className: 'fullwidthContainer' },
            React.createElement("div", { className: "doctorCard__info" },
                React.createElement("div", { className: 'container' },
                    React.createElement("div", { className: "doctorCard__info__wrapper" },
                        React.createElement("div", { className: 'doctorCard__info__item' },
                            React.createElement("div", { className: 'doctorCard__info__item__wrap' },
                                React.createElement("img", { src: "/assets/medicon/images/stethoscopeIcon.svg" }),
                                React.createElement("p", null, specialization))),
                        React.createElement("div", { className: 'doctorCard__info__item' },
                            React.createElement("div", { className: 'doctorCard__info__item__wrap' },
                                React.createElement("img", { src: "/assets/medicon/images/phoneIcon.svg" }),
                                React.createElement("a", { href: "callto:" + phone }, phone))),
                        React.createElement("div", { className: 'doctorCard__info__item doctorCard__info__item--location ' },
                            React.createElement("img", { src: "/assets/medicon/images/geoIcon.svg" }),
                            React.createElement("div", null,
                                React.createElement("p", null,
                                    React.createElement("strong", null, clinicName),
                                    clinicExtraInfo &&
                                        React.createElement("span", { style: clinicColor && { color: "" + clinicColor } }, '  - ' + clinicExtraInfo)),
                                React.createElement("p", null, clinicAddress))))))),
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'doctorCard__divider' },
                React.createElement("div", { className: "dividerCircles" },
                    React.createElement("div", null)))),
        React.createElement(List_1.default, { data: additionalInfo }, function (_a) {
            var data = _a.data;
            return data &&
                data.map(function (item, i) {
                    return React.createElement(TextBlock_1.default, { key: i, data: { title: item.title, text: item.text } });
                });
        })));
};
exports.default = DoctorCard;
//# sourceMappingURL=DoctorCard.js.map