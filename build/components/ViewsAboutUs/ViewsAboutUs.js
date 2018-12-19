import * as React from 'react';
import ViewsAboutUsElement from './components/ViewsAboutUsElement';
var ViewsAboutUs = function (props) {
    var _a = props.data, title = _a.title, views = _a.views;
    return (React.createElement("div", { className: 'viewsAboutUs' },
        React.createElement("div", { className: 'container' },
            title && React.createElement("h3", null, title),
            React.createElement("div", { className: 'grid viewsAboutUs__list' }, views && views.map(function (item, i) { return (React.createElement(ViewsAboutUsElement, { key: i, url: item.url, link: item.link, cite: item.cite, image: item.image })); })))));
};
export default ViewsAboutUs;
//# sourceMappingURL=ViewsAboutUs.js.map