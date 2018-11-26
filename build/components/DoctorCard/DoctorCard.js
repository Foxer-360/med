import * as React from 'react';
import DoctorSchedule from './components/DoctorSchedule/DoctorSchedule';
import TextBlock from '../TextBlock';
var DoctorCard = function (props) {
    return (React.createElement("section", { className: 'doctorCard' },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: 'doctorCard__main' },
                React.createElement("img", { src: "/assets/medicon/images/lekari.png" }),
                React.createElement("h3", null, "mudr. jana pavluchov\u00E1"),
                React.createElement("p", { className: 'doctorCard__main__spe' }, "Alergologie a imunologie"),
                React.createElement("p", { className: 'doctorCard__main__sis' },
                    "Sestra: ",
                    React.createElement("strong", null, "Ji\u0159ina Slez\u00E1kov\u00E1")))),
        React.createElement("div", { className: 'fullwidthContainer' },
            React.createElement("div", { className: "doctorCard__info" },
                React.createElement("div", { className: 'container' },
                    React.createElement("div", { className: "doctorCard__info__wrapper" },
                        React.createElement("div", { className: 'doctorCard__info__item', style: { backgroundImage: 'url(/assets/medicon/images/phone.png)' } }, "Alergologie Imunologie"),
                        React.createElement("div", { className: 'doctorCard__info__item', style: { backgroundImage: 'url(/assets/medicon/images/phone.png)' } }, "+420 261 003 404"),
                        React.createElement("div", { className: 'doctorCard__info__item', style: { backgroundImage: 'url(/assets/medicon/images/phone.png)' } },
                            React.createElement("p", null, "Poliklinika Bud\u011Bjovick\u00E1"),
                            React.createElement("p", null, "Antala Sta\u0161ka 1670/80, 140 00 Praha 4")))))),
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'doctorCard__timePlace' },
                React.createElement("div", null,
                    React.createElement(DoctorSchedule, null)),
                React.createElement("div", null,
                    React.createElement("img", { src: "/assets/medicon/images/floorMap.png", alt: "" }))),
            React.createElement("div", { className: 'doctorCard__btnHolder' },
                React.createElement("button", { className: 'btn  btnFirst' }, "objednat")),
            React.createElement("div", { className: 'doctorCard__divider' },
                React.createElement("div", { className: "dividerCircles" },
                    React.createElement("div", null)))),
        React.createElement(TextBlock, null),
        React.createElement(TextBlock, null)));
};
export default DoctorCard;
//# sourceMappingURL=DoctorCard.js.map