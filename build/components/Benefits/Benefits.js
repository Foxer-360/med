"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var List_1 = require("../List");
var Link_1 = require("../../partials/Link");
var Media_1 = require("../../partials/Media");
var Benefits = function (props) {
    var items = props.data.items;
    return (React.createElement(List_1.default, { data: items }, function (_a) {
        var data = _a.data;
        return (React.createElement("section", { className: 'benefits' },
            React.createElement("div", { className: 'container' },
                React.createElement("div", { className: 'benefits__list row' }, data && data.map(function (benefit, i) { return (React.createElement("div", { key: i, className: "col-12 col-sm-6 col-md-4 col-lg-3" },
                    React.createElement(Link_1.default, __assign({}, benefit.url, { className: 'benefits__list__element' }),
                        benefit.image && benefit.image.filename && React.createElement(Media_1.default, { type: 'image', data: benefit.image }),
                        benefit.text && React.createElement("p", { className: benefit.url && 'elBenefitHover' }, benefit.text)))); })))));
    }));
};
exports.default = Benefits;
//# sourceMappingURL=Benefits.js.map