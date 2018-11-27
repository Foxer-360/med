import * as React from 'react';
import PcTitle from './components/title';
import Button from '../Button';
var data = {
    items: [{ name: 'asd' }, { name: 'asd' }, { name: 'asd' }],
};
var PolyclinicsList = function () { return (React.createElement("section", { className: "polyclinicsList" }, data.items.map(function (item, index) { return (React.createElement("div", { className: 'pcitem', key: index },
    React.createElement("div", { className: "fullWidthContainer" },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "pcitem__wrapper" },
                React.createElement("div", { className: 'pcitem__img' },
                    React.createElement("img", { src: "/assets/medicon/images/policlinic1.png", alt: "" })),
                React.createElement("div", { className: 'pcitem__info' },
                    React.createElement(PcTitle, null),
                    React.createElement("div", { className: "pcitem__info__details" },
                        React.createElement("div", { className: "pcitem__info__details__item", style: { backgroundImage: 'url(/assets/medicon/images/geo.png)' } },
                            React.createElement("p", null,
                                "Antala Sta\u0161ka 1670/80 ",
                                React.createElement("br", null),
                                "140 00 Praha 4")),
                        React.createElement("div", { className: "pcitem__info__details__item", style: { backgroundImage: 'url(/assets/medicon/images/phone.png)' } },
                            React.createElement("p", null, "+420 261 006 111")),
                        React.createElement("div", { className: "pcitem__info__details__item", style: { backgroundImage: 'url(/assets/medicon/images/metro.png)' } },
                            React.createElement("p", null,
                                "Metro C ",
                                React.createElement("br", null),
                                "stanice Bud\u011Bjovick\u00E1"))),
                    React.createElement("div", { className: 'pcitem__info__list' },
                        React.createElement("ul", null,
                            React.createElement("li", null, "Psychologie"),
                            React.createElement("li", null, "Neurologie"),
                            React.createElement("li", null, "Mammacentrum"),
                            React.createElement("li", null, "Psychologie"),
                            React.createElement("li", null, "Neurologie"),
                            React.createElement("li", null, "Mammacentrum"),
                            React.createElement("li", null, "Psychologie"),
                            React.createElement("li", null, "Neurologie"),
                            React.createElement("li", null, "Mammacentrum")),
                        React.createElement("div", null, "Dal\u0161\u00ED odbornosti")),
                    React.createElement("div", { className: 'pcitem__info__desc' },
                        React.createElement("div", { className: 'pcitem__info__desc__txt' }, "Poliklinika Bud\u011Bjovick\u00E1 je nejv\u011Bt\u0161\u00ED nest\u00E1tn\u00ED ambulantn\u00ED za\u0159\u00EDzen\u00ED v Praze. Klient\u016Fm poskytuje \u0161irok\u00E9 spektrum ambulantn\u00EDch specializac\u00ED v\u010Detn\u011B nejmodern\u011Bj\u0161\u00EDmi p\u0159\u00EDstroji vybaven\u00E9 gastroenterologie a \u0161pi\u010Dkov\u011B vybaven\u00E9ho odd\u011Blen\u00ED RDG a zobrazovac\u00EDch metod. To v\u0161e pod jednou st\u0159echou."),
                        React.createElement("div", null,
                            React.createElement(Button, { classes: "btn--small btn--blueBorder" }, "vice info"))))))))); }))); };
export default PolyclinicsList;
//# sourceMappingURL=PolyclinicsList.js.map