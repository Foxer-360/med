import * as React from 'react';
export default function ViewsAboutUsElement(props) {
    return (React.createElement("div", { className: "viewsAboutUs__list__element" },
        React.createElement("img", { src: props.img, alt: "review about us" }),
        React.createElement("div", { className: "viewsAboutUs__list__element__content" },
            React.createElement("cite", null, props.cite),
            React.createElement("a", { href: "#" },
                "Zdroj: ",
                React.createElement("strong", null, "Hal\u00F3 noviny")))));
}
//# sourceMappingURL=ViewsAboutUsElement.js.map