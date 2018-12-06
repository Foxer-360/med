import * as React from 'react';
export default function ReviewElement(props) {
    var rows = [];
    for (var i = 0; i < props.starCount; i++) {
        rows.push(React.createElement("img", { src: "/assets/medicon/images/star.png", alt: "star" }));
    }
    return (React.createElement("div", { className: "reviews__list__element" },
        React.createElement("img", { src: props.img, alt: "photo" }),
        React.createElement("div", { className: "reviews__list__element__content" },
            React.createElement("cite", null, props.cite),
            React.createElement("div", { className: "stars" }, rows))));
}
//# sourceMappingURL=ReviewElement.js.map