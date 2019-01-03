import * as React from 'react';
import Media from '@source/partials/Media';
import Link from '@source/partials/Link';
var CrossRoads = function (props) {
    var items = props.data.items;
    return (React.createElement("section", { className: 'crossRoads' },
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'crossRoads__wrapper' }, items &&
                items.map(function (item, index) {
                    return (React.createElement(Link, { url: item.link && item.link.url, languageCode: props.languageCode, className: 'crossRoads__card', key: index },
                        React.createElement("div", { className: 'crossRoads__card__img' }, (item.image && React.createElement(Media, { type: "image", data: item.image })) || (React.createElement("img", { src: "./assets/medicon/images/hospitalIcon.svg" }))),
                        item.text && React.createElement("p", null, item.text)));
                })))));
};
export default CrossRoads;
//# sourceMappingURL=CrossRoads.js.map