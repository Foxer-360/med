import * as React from 'react';
import ViewsAboutUsElement from './components/ViewsAboutUsElement';
var data = {
    items: [
        {
            img: '/assets/medicon/images/review-aboutus-1.jpg',
            cite: '„Úryvek článku lorem ipsum dolor sit amet, consectetuer adipiscing elit.“',
        },
        {
            img: '/assets/medicon/images/review-aboutus-1.jpg',
            cite: '„Úryvek článku lorem ipsum dolor sit amet, consectetuer adipiscing elit.“',
        },
        {
            img: '/assets/medicon/images/review-aboutus-1.jpg',
            cite: '„Úryvek článku lorem ipsum dolor sit amet, consectetuer adipiscing elit.“',
        },
    ]
};
var ViewsAboutUs = function (props) {
    return (React.createElement("div", { className: 'viewsAboutUs' },
        React.createElement("div", { className: 'container' },
            React.createElement("h3", null, "Napsali o n\u00E1s"),
            React.createElement("div", { className: 'grid viewsAboutUs__list' }, data.items.map(function (item, index) { return (React.createElement(ViewsAboutUsElement, { key: index, img: item.img, cite: item.cite })); })))));
};
export default ViewsAboutUs;
//# sourceMappingURL=ViewsAboutUs.js.map