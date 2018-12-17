import * as React from 'react';
import Button from '../../partials/Button';
import Media from '@source/partials/Media';
var DoctorList = function (props) {
    var _a = props.data, doctors = _a.doctors, title = _a.title;
    return (React.createElement("section", { className: 'doctorList' },
        React.createElement("div", { className: 'container' },
            title && React.createElement("h3", null, title),
            React.createElement("div", { className: "doctorList__wrapper" }, doctors &&
                doctors.map(function (doctor, index) {
                    return (React.createElement("div", { className: 'doctorList__item', key: index },
                        React.createElement("div", { className: 'doctorList__item__img' }, (doctor.image && doctor.image.filename && React.createElement(Media, { data: doctor.image, type: "image" })) || (React.createElement("img", { className: "avatar", src: '../../../assets/medicon/images/doctorIcon.svg', alt: "Medicon Doctor Icon" }))),
                        React.createElement("div", { className: 'doctorList__item__info' },
                            React.createElement("h3", null, doctor.name),
                            React.createElement("p", null, doctor.field),
                            React.createElement("a", { className: 'doctorList__item__info__link', href: "" }, doctor.clinicName),
                            React.createElement(Button, { classes: "btn--blueBorder btn--small" }, "vice info"))));
                })),
            React.createElement("div", { className: "doctorList__btnHolder" },
                React.createElement(Button, { classes: "btn--blueBkg btn--down" }, "zobrazit vice")))));
};
export default DoctorList;
//# sourceMappingURL=DoctorList.js.map