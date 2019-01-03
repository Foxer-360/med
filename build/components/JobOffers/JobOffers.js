import * as React from 'react';
import getImageUrl from '@source/helpers/getImageUrl';
import Link from '@source/partials/Link';
var jobOffers = function (props) {
    var _a = props.data, title = _a.title, offers = _a.offers;
    return (React.createElement("div", { className: 'container' },
        React.createElement("section", { className: 'jobOffers' },
            title && React.createElement("h3", null, title),
            React.createElement("div", { className: "grid offers" }, offers &&
                offers.map(function (offer, index) { return (React.createElement(Link, { url: offer.url.url, languageCode: props.languageCode, key: index, className: 'flexRow offers__element' }, offer.image && (React.createElement("div", { style: { backgroundImage: offer.image && "url(" + getImageUrl(offer.image) + ")" } }, offer.title && React.createElement("p", { className: 'hCenterBlock' }, offer.title))))); })))));
};
export default jobOffers;
//# sourceMappingURL=JobOffers.js.map