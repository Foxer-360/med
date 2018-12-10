import * as React from 'react';
import DividerCircles from '../DividerCircles';
import SvgIcon from '@source/partials/SvgIcon';
var Downloads = function (props) {
    return (React.createElement("div", { className: 'container' },
        React.createElement("div", { className: 'downloads' },
            React.createElement("h3", null, "Dokumenty ke sta\u017Een\u00ED"),
            React.createElement("p", null, "Zde si m\u016F\u017Eete st\u00E1hnout pot\u0159ebn\u00E9 dokumenty"),
            React.createElement("div", { className: "grid downloads__list" },
                React.createElement("div", { className: "downloads__list__element" },
                    React.createElement("p", null, "Jak podat st\u00ED\u017Enost"),
                    React.createElement("a", { className: 'btn btn--blueBorder' },
                        "St\u00E1hnout",
                        React.createElement(SvgIcon, { name: 'download', type: 'lightBlue' }))),
                React.createElement("div", { className: "downloads__list__element" },
                    React.createElement("p", null, "Lorem ipsum dolor"),
                    React.createElement("a", { className: 'btn btn--blueBorder' },
                        "St\u00E1hnout",
                        React.createElement(SvgIcon, { name: 'download', type: 'lightBlue' }))),
                React.createElement("div", { className: "downloads__list__element" },
                    React.createElement("p", null, "Lorem ipsum dolor"),
                    React.createElement("a", { className: 'btn btn--blueBorder' },
                        "St\u00E1hnout",
                        React.createElement(SvgIcon, { name: 'download', type: 'lightBlue' }))),
                React.createElement("div", { className: "downloads__list__element" },
                    React.createElement("p", null, "Lorem ipsum dolor"),
                    React.createElement("a", { className: 'btn btn--blueBorder' },
                        "St\u00E1hnout",
                        React.createElement(SvgIcon, { name: 'download', type: 'lightBlue' }))))),
        React.createElement(DividerCircles, null)));
};
export default Downloads;
//# sourceMappingURL=Downloads.js.map