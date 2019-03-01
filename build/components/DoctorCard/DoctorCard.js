import * as React from 'react';
import TextBlock from '../TextBlock';
import Media from '../../partials/Media';
import List from '../List';
var DoctorCard = function (props) {
    var _a = props.data, name = _a.name, specialization = _a.specialization, phone = _a.phone, nurse = _a.nurse, doctorImage = _a.doctorImage, clinicImage = _a.clinicImage, clinicName = _a.clinicName, clinicExtraInfo = _a.clinicExtraInfo, clinicAddress = _a.clinicAddress, additionalInfo = _a.additionalInfo;
    return (React.createElement("section", { className: 'doctorCard' },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: 'doctorCard__main' },
                (doctorImage && doctorImage.filename && React.createElement(Media, { data: doctorImage, type: "image" })) || (React.createElement("img", { src: "/assets/medicon/images/doctorIcon.svg" })),
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
                                    clinicExtraInfo && React.createElement("span", null, '  - ' + clinicExtraInfo)),
                                React.createElement("p", null, clinicAddress))))))),
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'doctorCard__divider' },
                React.createElement("div", { className: "dividerCircles" },
                    React.createElement("div", null)))),
        React.createElement(List, { data: additionalInfo }, function (_a) {
            var data = _a.data;
            return data &&
                data.map(function (item, i) {
                    return React.createElement(TextBlock, { key: i, data: { title: item.title, text: item.text } });
                });
        })));
};
export default DoctorCard;
//# sourceMappingURL=DoctorCard.js.map