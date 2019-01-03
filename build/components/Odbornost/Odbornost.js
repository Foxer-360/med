import * as React from 'react';
import DividerCircles from '../DividerCircles';
import Media from '@source/partials/Media';
var Odbornost = function (props) {
    var _a = props.data, image = _a.image, doctorName = _a.doctorName, cite = _a.cite;
    return (React.createElement("div", { className: 'odbornost' },
        React.createElement(DividerCircles, null),
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'odbornost__doctor' },
                (image && React.createElement(Media, { type: 'image', data: image })) || (React.createElement("img", { src: '/assets/medicon/images/odbornost-lekar.jpg', alt: "Doctor photo" })),
                React.createElement("div", { className: 'grid grid--vCenterBlock' },
                    React.createElement("div", null,
                        React.createElement("div", { className: 'horizontal-line' }),
                        doctorName && React.createElement("p", null, doctorName),
                        cite && React.createElement("cite", null, cite)))))));
};
export default Odbornost;
//# sourceMappingURL=Odbornost.js.map