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
var List_1 = require("../List");
var Link_1 = require("../../partials/Link");
var getImageUrl_1 = require("../../helpers/getImageUrl");
var JobOffers = function (props) {
    var _a = props.data, title = _a.title, offers = _a.offers;
    return (React.createElement("div", { className: 'container' },
        React.createElement("section", { className: 'jobOffers' },
            title && React.createElement("h3", null, title),
            React.createElement("div", { className: "offers grid" },
                React.createElement(List_1.default, { data: offers }, function (_a) {
                    var data = _a.data;
                    return data &&
                        data.map(function (offer, index) { return (React.createElement(Link_1.default, __assign({ key: index }, offer.url, { className: 'flexRow offers__element' }),
                            React.createElement("div", { style: {
                                    backgroundImage: (offer.image && offer.image.filename) && "url(" + getImageUrl_1.default(offer.image) + ")"
                                } }, offer.title &&
                                React.createElement("p", { className: 'hCenterBlock', style: (offer.image && offer.image.filename) ? { paddingLeft: 60 } : {} }, offer.title)))); });
                })))));
};
exports.default = JobOffers;
//# sourceMappingURL=JobOffers.js.map