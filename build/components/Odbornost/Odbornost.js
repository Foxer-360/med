import * as React from 'react';
import DividerCircles from '../DividerCircles';
import Media from '@source/partials/Media';
var Odbornost = function (props) {
    var _a = props.data, image = _a.image, doctorName = _a.doctorName, cite = _a.cite;
    return (React.createElement("div", { className: 'odbornost' },
        React.createElement(DividerCircles, null),
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'odbornost__doctor' },
                React.createElement("div", { className: 'odbornost__doctor__imageWrapper' }, image && React.createElement(Media, { type: 'image', data: image })),
                React.createElement("div", { className: 'grid grid--vCenterBlock' },
                    React.createElement("div", null,
                        React.createElement("div", { className: 'horizontal-line' }),
                        React.createElement("p", null, doctorName || ''),
                        React.createElement("cite", null, cite || '')))))));
};
export default Odbornost;
//# sourceMappingURL=Odbornost.js.map