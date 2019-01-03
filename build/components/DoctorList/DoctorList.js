import * as React from 'react';
import Button from '../../partials/Button';
import Media from '@source/partials/Media';
import Link from '@source/partials/Link';
var DoctorList = function (props) {
    var _a = props.data, doctors = _a.doctors, title = _a.title;
    return (React.createElement("section", { className: 'doctorList' },
        React.createElement("div", { className: 'container' },
            title && React.createElement("h3", null, title),
            console.log('%c Emilio: cacaca', 'background: #222; color: #bada55', props),
            React.createElement("div", { className: "doctorList__wrapper" }, doctors &&
                doctors.map(function (doctor, index) {
                    return (React.createElement("div", { className: 'doctorList__item', key: index },
                        React.createElement("div", { className: 'doctorList__item__img' }, (doctor.image && doctor.image.filename && React.createElement(Media, { data: doctor.image, type: "image" })) || (React.createElement("img", { className: "avatar", src: '../../../assets/medicon/images/doctorIcon.svg', alt: "Medicon Doctor Icon" }))),
                        React.createElement("div", { className: 'doctorList__item__info' },
                            React.createElement("h3", null, doctor.name),
                            React.createElement("p", null, doctor.field),
                            React.createElement(Link, { languageCode: props.languageCode, url: doctor.clinicUrl, className: 'doctorList__item__info__link' }, doctor.clinicName),
                            React.createElement(Button, { classes: "btn--blueBorder btn--small", url: doctor.doctorUrl, languageCode: props.languageCode }, "vice info"))));
                })),
            React.createElement("div", { className: "doctorList__btnHolder" },
                React.createElement(Button, { classes: "btn--blueBkg btn--down" }, "zobrazit vice")))));
};
export default DoctorList;
//# sourceMappingURL=DoctorList.js.map