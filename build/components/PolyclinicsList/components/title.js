import * as React from 'react';
var Title = function (props) {
    return (React.createElement("div", { className: 'pcTitle' },
        React.createElement("img", { src: "/assets/medicon/images/logo.png", alt: "" }),
        React.createElement("div", { className: 'pcTitle__title' },
            React.createElement("h3", null, "Poliklinika"),
            React.createElement("div", { className: 'pcTitle__title__subtitle' },
                React.createElement("span", null, "Budejovicka"),
                React.createElement("span", { className: 'pcTitle__title__subtitle__circles' },
                    React.createElement("div", null),
                    React.createElement("div", null),
                    React.createElement("div", null),
                    React.createElement("div", null),
                    React.createElement("div", null),
                    React.createElement("div", null))))));
};
export default Title;
//# sourceMappingURL=title.js.map