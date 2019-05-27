"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Link_1 = require("../../../partials/Link");
var Button_1 = require("../../../partials/Button");
var getImageUrl_1 = require("../../../helpers/getImageUrl");
var ExpertiseDescriptionBoxes = function (props) {
    var boxes = props.boxes;
    return (React.createElement("section", { className: "info" },
        React.createElement("div", { className: "row" }, boxes && boxes.map(function (box, i) { return (React.createElement("div", { key: i, className: "col-sm-12 col-md-6" },
            React.createElement("div", { className: 'info__element', style: { backgroundImage: box.image && "url(" + getImageUrl_1.default(box.image) + ")" } },
                React.createElement("div", { className: 'info__element--cell' },
                    box.title && React.createElement("h5", { style: box.textColor ? { color: box.textColor } : {} }, box.title),
                    !box.url2 && !box.url3 &&
                        React.createElement("div", { style: { maxWidth: 260 } },
                            React.createElement(Button_1.default, { url: box.url1, classes: 'btn--whiteBorder' }, box.url1Title ? box.url1Title : 'více informací')),
                    (box.url2 || box.url3) &&
                        React.createElement("div", { style: { paddingLeft: 20 } },
                            box.url1 && (box.url2 || box.url3) &&
                                React.createElement(Link_1.default, __assign({}, box.url1, { className: 'downloadLink', style: box.textColor ? { color: box.textColor } : {} }), box.url1Title ? box.url1Title : 'více informací'),
                            box.url2 &&
                                React.createElement(Link_1.default, __assign({}, box.url2, { className: 'downloadLink', style: box.textColor ? { color: box.textColor } : {} }), box.url2Title ? box.url2Title : 'více informací'),
                            box.url3 &&
                                React.createElement(Link_1.default, __assign({}, box.url3, { className: 'downloadLink', style: box.textColor ? { color: box.textColor } : {} }), box.url3Title ? box.url3Title : 'více informací'))),
                React.createElement("div", { className: 'info__element--colorGradient' })))); }))));
};
exports.default = ExpertiseDescriptionBoxes;
//# sourceMappingURL=ExpertiseDescriptionBoxes.js.map