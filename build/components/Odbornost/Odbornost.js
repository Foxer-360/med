"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Media_1 = require("../../partials/Media");
var DividerCircles_1 = require("../DividerCircles");
var Odbornost = function (props) {
    var _a = props.data, image = _a.image, doctorName = _a.doctorName, cite = _a.cite;
    return (React.createElement("div", { className: 'odbornost' },
        React.createElement(DividerCircles_1.default, null),
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-12 col-lg-6" }, image && React.createElement(Media_1.default, { type: 'image', data: image, width: '420', height: '290' })),
                React.createElement("div", { className: "col-md-12 col-lg-6" },
                    React.createElement("div", { className: 'odbornost__contentWrapper' },
                        React.createElement("div", { className: 'odbornost__content' },
                            React.createElement("div", { className: 'horizontal-line' }),
                            React.createElement("p", null, doctorName || ''),
                            React.createElement("cite", null, cite || ''))))))));
};
exports.default = Odbornost;
//# sourceMappingURL=Odbornost.js.map