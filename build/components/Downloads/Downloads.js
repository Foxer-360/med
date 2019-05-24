"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var List_1 = require("../List");
var SvgIcon_1 = require("../../partials/SvgIcon");
var DividerCircles_1 = require("../DividerCircles");
var getImageUrl_1 = require("../../helpers/getImageUrl");
var Downloads = function (props) {
    var _a = props.data, title = _a.title, description = _a.description, downloads = _a.downloads;
    return (React.createElement("div", { className: 'container' },
        React.createElement("div", { className: 'downloads' },
            title && React.createElement("h3", null, title),
            description && React.createElement("p", null, description),
            React.createElement("div", { className: "grid downloads__list" },
                React.createElement(List_1.default, { data: downloads }, function (_a) {
                    var data = _a.data;
                    return data &&
                        data.map(function (item, i) { return (React.createElement("div", { className: 'downloads__list__element', key: i },
                            item.title && React.createElement("p", null, item.title),
                            item.file &&
                                React.createElement("a", { href: getImageUrl_1.default(item.file), download: true, target: '_blank', className: 'btn btn--blueBorder' },
                                    "St\u00E1hnout",
                                    React.createElement(SvgIcon_1.default, { name: 'download', type: 'lightBlue' })))); });
                }))),
        React.createElement(DividerCircles_1.default, null)));
};
exports.default = Downloads;
//# sourceMappingURL=Downloads.js.map