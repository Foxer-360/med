"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_tabs_1 = require("react-tabs");
var core_1 = require("@material-ui/core");
var ReactMarkdown = require("react-markdown/with-html");
var Media_1 = require("../../partials/Media");
var Button_1 = require("../../partials/Button");
var TabsBlock = function (props) {
    try {
        var _a = __read(React.useState(false), 2), expand_1 = _a[0], setExpand_1 = _a[1];
        var tabs = props.data.tabs;
        return (React.createElement("div", { className: "tabs container" },
            React.createElement(react_tabs_1.Tabs, null,
                React.createElement(react_tabs_1.TabList, { className: "react-tabs__tab-list d-flex flex-column flex-md-row bd-highlight" }, tabs.map(function (i) {
                    return (React.createElement(react_tabs_1.Tab, { className: "react-tabs__tab p-2 bd-highlight flex-fill react-tabs__tab", role: "tab" },
                        React.createElement("p", null, i.title)));
                })),
                React.createElement(core_1.Collapse, { in: expand_1, collapsedHeight: 225 }, tabs.map(function (i) {
                    return (React.createElement(react_tabs_1.TabPanel, null,
                        React.createElement(ReactMarkdown, { skipHtml: false, escapeHtml: false, source: i.text }),
                        React.createElement(Media_1.default, { type: 'image', data: i.image, nowrapper: true }),
                        i.button &&
                            React.createElement(Button_1.default, { url: i.buttonLink, classes: 'btn--fullWidth btn--blw-img ' + i.buttonStyle }, i.buttonText)));
                })),
                React.createElement("button", { className: "tabs__expand " + (expand_1 ? 'expanded' : 'collapsed'), onClick: function () { return setExpand_1(!expand_1); } }),
                React.createElement("button", { className: "btn btn--blueBkg btn--fullWidth", onClick: function () { return setExpand_1(!expand_1); } }, (expand_1 ? 'Skrýt' : 'Zobrazit') + " v\u00EDce informac\u00ED"))));
    }
    catch (e) {
        console.log(e);
        return (React.createElement("div", { className: "tabs container" }));
    }
};
exports.default = TabsBlock;
//# sourceMappingURL=TabsBlock.js.map