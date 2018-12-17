import * as React from 'react';
import PcTitle from './components/title';
import Button from '../../partials/Button';
import Media from '../../partials/Media';
import ReactMarkdown from 'react-markdown';
var PolyclinicsList = function (props) {
    var clinics = props.data.clinics;
    return (React.createElement("section", { className: "polyclinicsList" }, clinics &&
        clinics.map(function (clinic, index) { return (React.createElement("div", { className: 'pcitem', key: index },
            React.createElement("div", { className: "fullWidthContainer" },
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "pcitem__wrapper" },
                        React.createElement("div", { className: 'pcitem__img' }, clinic.image && React.createElement(Media, { data: clinic.image, type: "image" })),
                        React.createElement("div", { className: 'pcitem__info' },
                            React.createElement(PcTitle, { name: clinic.name }),
                            React.createElement("div", { className: "pcitem__info__details" },
                                React.createElement("div", { className: "pcitem__info__details__item" },
                                    React.createElement("img", { src: "../../../assets/medicon/images/geoIcon.svg", alt: "Medicon GeoLocation Icon" }),
                                    React.createElement("p", null,
                                        clinic.address,
                                        " ",
                                        React.createElement("br", null),
                                        clinic.district)),
                                React.createElement("div", { className: "pcitem__info__details__item" },
                                    React.createElement("img", { src: "../../../assets/medicon/images/phoneIcon.svg", alt: "Medicon Phone Icon" }),
                                    React.createElement("p", null, clinic.phone)),
                                React.createElement("div", { className: "pcitem__info__details__item" },
                                    clinic.transportImage && React.createElement(Media, { data: clinic.transportImage, type: "image" }),
                                    !clinic.transportImage && React.createElement("img", { src: "../../../assets/medicon/images/metro2.png", alt: "" }),
                                    React.createElement("p", null,
                                        clinic.transport,
                                        React.createElement("br", null),
                                        clinic.station))),
                            React.createElement("div", { className: 'pcitem__info__list' },
                                React.createElement(ReactMarkdown, { source: clinic.services, renderers: {
                                        paragraph: function (rProps) { return React.createElement("ul", null, rProps.children); },
                                    } }),
                                React.createElement("div", null,
                                    "Dal\u0161\u00ED odbornosti ",
                                    React.createElement("span", { className: "arrow" }))),
                            React.createElement("div", { className: 'pcitem__info__desc' },
                                React.createElement("div", { className: 'pcitem__info__desc__txt' },
                                    React.createElement(ReactMarkdown, { source: clinic.description, renderers: {
                                            paragraph: function (rProps) { return React.createElement("p", null, rProps.children); },
                                        } })),
                                React.createElement("div", { className: 'pcitem__info__btnHolder' },
                                    React.createElement(Button, { classes: "btn btn--blueBorder" }, "vice info"))))))))); })));
};
export default PolyclinicsList;
//# sourceMappingURL=PolyclinicsList.js.map