import * as React from 'react';
// ! MOCK DATA ONLY
var data = {
    title: 'text',
    items: [
        {
            name: 'MUDr. Jana Pavluchová',
            field: 'Alergologie a Imunologie',
            clinic: 'Poliklinika Budějovická',
            img: '/assets/medicon/images/doctorlist1.png',
        },
        {
            name: 'MUDr. Michala Jakubíková, Ph.D.',
            field: 'Neurologie',
            clinic: 'Poliklinika Vysočany',
            img: '/assets/medicon/images/doctorlist1.png',
        },
        {
            name: 'MUDr. Michala Pelikánová',
            field: 'Diabetologie',
            clinic: ' Poliklinika Budějovická',
            img: '/assets/medicon/images/doctorlist1.png',
        },
        {
            name: 'MUDr. Petr Novák',
            field: 'Ortopedie',
            clinic: 'Poliklinika Zelený pruh',
            img: '/assets/medicon/images/doctorlist1.png',
        },
    ],
};
var DoctorList = function (props) {
    var items = data.items, title = data.title;
    return (React.createElement("section", { className: 'doctorList' },
        React.createElement("div", { className: 'container' },
            title && React.createElement("h3", null, title),
            React.createElement("div", { className: "doctorList__wrapper" }, items &&
                items.map(function (item, index) {
                    return (React.createElement("div", { className: 'doctorList__item', key: index },
                        React.createElement("div", { className: 'doctorList__item__img' },
                            React.createElement("img", { src: item.img, alt: "" })),
                        React.createElement("div", { className: 'doctorList__item__info' },
                            React.createElement("h3", null, item.name),
                            React.createElement("p", null, item.field),
                            React.createElement("a", { className: 'doctorList__item__info__link', href: "" }, item.clinic),
                            React.createElement("button", { className: 'btn btnFirst btn--small' }, "vice info"))));
                })),
            React.createElement("div", { className: "doctorList__btnHolder" },
                React.createElement("button", { className: 'btn btnFirst' }, "zobrazit vice")))));
};
export default DoctorList;
//# sourceMappingURL=DoctorList.js.map