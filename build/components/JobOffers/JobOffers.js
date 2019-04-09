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
import * as React from 'react';
import List from '../List';
import Link from '@source/partials/Link';
import getImageUrl from '@source/helpers/getImageUrl';
var jobOffers = function (props) {
    var _a = props.data, title = _a.title, offers = _a.offers;
    return (React.createElement("div", { className: 'container' },
        React.createElement("section", { className: 'jobOffers' },
            title && React.createElement("h3", null, title),
            React.createElement("div", { className: "grid offers" },
                React.createElement(List, { data: offers }, function (_a) {
                    var data = _a.data;
                    return data &&
                        data.map(function (offer, index) { return (React.createElement(Link, __assign({}, offer.url, { key: index, className: 'flexRow offers__element' }), offer.image && (React.createElement("div", { style: { backgroundImage: offer.image && "url(" + getImageUrl(offer.image) + ")" } }, offer.title && React.createElement("p", { className: 'hCenterBlock' }, offer.title))))); });
                })))));
};
export default jobOffers;
//# sourceMappingURL=JobOffers.js.map