import * as React from 'react';
import Media from '@source/partials/Media';
export default function ViewsAboutUsElement(props) {
    var url = props.url, link = props.link, cite = props.cite, image = props.image;
    return (React.createElement("div", { className: "viewsAboutUs__list__element" },
        (image && React.createElement(Media, { type: 'image', data: image })) || (React.createElement("img", { src: '/assets/medicon/images/review-aboutus-1.jpg', alt: "review about us" })),
        React.createElement("div", { className: 'viewsAboutUs__list__element__content' },
            React.createElement("cite", null, cite),
            React.createElement("a", { href: url },
                "Zdroj: ",
                React.createElement("strong", null, link)))));
}
//# sourceMappingURL=ViewsAboutUsElement.js.map