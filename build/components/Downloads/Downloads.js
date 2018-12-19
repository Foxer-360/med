import * as React from 'react';
import DividerCircles from '../DividerCircles';
import SvgIcon from '@source/partials/SvgIcon';
var Downloads = function (props) {
    var _a = props.data, title = _a.title, description = _a.description, downloads = _a.downloads;
    return (React.createElement("div", { className: 'container' },
        React.createElement("div", { className: 'downloads' },
            title && React.createElement("h3", null, title),
            description && React.createElement("p", null, description),
            React.createElement("div", { className: "grid downloads__list" }, downloads && downloads.map(function (item, i) { return (React.createElement("div", { className: 'downloads__list__element', key: i },
                item.title && React.createElement("p", null, item.title),
                item.url &&
                    React.createElement("a", { href: item.url, className: 'btn btn--blueBorder' },
                        "St\u00E1hnout",
                        React.createElement(SvgIcon, { name: 'download', type: 'lightBlue' })))); }))),
        React.createElement(DividerCircles, null)));
};
export default Downloads;
//# sourceMappingURL=Downloads.js.map