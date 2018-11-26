import * as React from 'react';
var DoctorCard = function (props) {
    return (React.createElement("div", { className: "container" },
        React.createElement("section", { className: 'doctorCard' },
            React.createElement("div", { className: 'doctorCard__main' },
                React.createElement("img", { src: "/assets/medicon/images/lekari.png" }),
                React.createElement("h3", null, "mudr. jana pavluchov\u00E1"),
                React.createElement("p", null, "Alergologie a imunologie"),
                React.createElement("p", null,
                    "Sestra: ",
                    React.createElement("strong", null, "Ji\u0159ina Slez\u00E1kov\u00E1"))),
            React.createElement("div", { className: 'doctorCard__btnHolder' },
                React.createElement("button", { className: 'btn  btnFirst' }, "objednat")))));
};
export default DoctorCard;
//# sourceMappingURL=DoctorCard.js.map