import * as React from 'react';
import Media from '@source/partials/Media';
import Link from '@source/partials/Link';
import List from '../List';
var PolyclinicBoxes = function (props) {
    var _a = props.data, title = _a.title, polyclinics = _a.polyclinics;
    return (React.createElement("section", { className: 'polyclinicBoxes' },
        React.createElement("div", { className: 'container' },
            title && React.createElement("h3", null, title),
            React.createElement("ul", { className: 'grid' },
                React.createElement(List, { data: polyclinics }, function (_a) {
                    var data = _a.data;
                    return data &&
                        data.map(function (polyclinic, index) {
                            return (React.createElement("li", { key: index },
                                React.createElement(Link, { url: polyclinic.url && polyclinic.url.url }),
                                React.createElement("div", { className: 'colorGradient' }),
                                (polyclinic.image && polyclinic.image.filename && (React.createElement(Media, { data: polyclinic.image, type: 'image' }))) || React.createElement("img", { src: '/assets/medicon/images/poliklinika.png', alt: "poliklinika" }),
                                React.createElement("div", { className: 'pcTitle' },
                                    React.createElement("img", { src: "/assets/medicon/images/logo.svg", alt: "Medicon Logo" }),
                                    React.createElement("div", { className: 'pcTitle__title' },
                                        React.createElement("h3", null, "Poliklinika"),
                                        React.createElement("div", { className: 'pcTitle__title__subtitle' },
                                            React.createElement("span", null, 'test'),
                                            React.createElement("span", { className: 'pcTitle__title__subtitle__circles' },
                                                React.createElement("div", null),
                                                React.createElement("div", null),
                                                React.createElement("div", null),
                                                React.createElement("div", null),
                                                React.createElement("div", null),
                                                React.createElement("div", null)))))));
                        });
                })))));
};
export default PolyclinicBoxes;
//# sourceMappingURL=PolyclinicBoxes.js.map