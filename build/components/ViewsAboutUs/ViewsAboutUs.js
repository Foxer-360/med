import * as React from 'react';
import ViewsAboutUsElement from './components/ViewsAboutUsElement';
import Link from '@source/partials/Link';
var ViewsAboutUs = function (props) {
    var _a = props.data, title = _a.title, views = _a.views;
    return (React.createElement("div", { className: 'viewsAboutUs' },
        React.createElement("div", { className: 'container' },
            title && React.createElement("h3", null, title),
            React.createElement("div", { className: 'grid viewsAboutUs__list' },
                React.createElement(Link, { data: views }, function (_a) {
                    var data = _a.data;
                    return data && data.map(function (item, i) { return (React.createElement(ViewsAboutUsElement, { key: i, url: item.url, link: item.link, cite: item.cite, image: item.image })); });
                })))));
};
export default ViewsAboutUs;
//# sourceMappingURL=ViewsAboutUs.js.map