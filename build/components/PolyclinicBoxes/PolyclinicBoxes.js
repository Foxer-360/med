import * as React from 'react';
import Media from '@source/partials/Media';
var PolyclinicBoxes = function (props) {
    var _a = props.data, title = _a.title, polyclinics = _a.polyclinics;
    return (React.createElement("section", { className: 'polyclinicBoxes' },
        React.createElement("div", { className: 'container' },
            title && React.createElement("h3", null, title),
            React.createElement("ul", { className: 'grid' }, polyclinics && polyclinics.map(function (polyclinic, index) {
                return (React.createElement("li", { key: index },
                    React.createElement("a", { href: "#" }, (polyclinic.image && polyclinic.image.filename &&
                        React.createElement(Media, { data: polyclinic.image, type: 'image' })) || (React.createElement("img", { src: '/assets/medicon/images/poliklinika.png', alt: "poliklinika" })))));
            })))));
};
export default PolyclinicBoxes;
//# sourceMappingURL=PolyclinicBoxes.js.map