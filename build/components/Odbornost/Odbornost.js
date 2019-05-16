"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var DividerCircles_1 = require("../DividerCircles");
var Media_1 = require("@source/partials/Media");
var Odbornost = function (props) {
    var _a = props.data, image = _a.image, doctorName = _a.doctorName, cite = _a.cite;
    return (React.createElement("div", { className: 'odbornost' },
        React.createElement(DividerCircles_1.default, null),
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'odbornost__doctor' },
                React.createElement("div", { className: 'odbornost__doctor__imageWrapper' }, image && React.createElement(Media_1.default, { type: 'image', data: image })),
                React.createElement("div", { className: 'grid grid--vCenterBlock' },
                    React.createElement("div", null,
                        React.createElement("div", { className: 'horizontal-line' }),
                        React.createElement("p", null, doctorName || ''),
                        React.createElement("cite", null, cite || '')))))));
};
exports.default = Odbornost;
//# sourceMappingURL=Odbornost.js.map