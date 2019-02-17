import * as React from 'react';
import Media from '@source/partials/Media';
import Link from '@source/partials/Link';
export default function ViewsAboutUsElement(props) {
    var url = props.url, link = props.link, cite = props.cite, image = props.image;
    return (React.createElement("div", { className: "viewsAboutUs__list__element" },
        image && React.createElement(Media, { type: 'image', data: image }),
        React.createElement("div", { className: 'viewsAboutUs__list__element__content' },
            cite && React.createElement("cite", null, cite),
            React.createElement(Link, { url: url && url.url },
                "Zdroj: ",
                React.createElement("strong", null, link)))));
}
//# sourceMappingURL=ViewsAboutUsElement.js.map