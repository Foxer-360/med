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
var CrossRoads = function (props) {
    var items = props.data.items;
    return (React.createElement("section", { className: 'crossRoads' },
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'crossRoads__wrapper row' },
                React.createElement(List_1.default, { data: items }, function (_a) {
                    var data = _a.data;
                    return data &&
                        data.map(function (item, index) {
                            return (React.createElement("div", { className: 'col-md-12 col-lg-4', key: index },
                                React.createElement("div", { className: 'crossRoads__card' },
                                    React.createElement("div", { className: 'crossRoads__card__img' }, item.image && React.createElement(Media_1.default, { type: "image", data: item.image, width: '90', height: '90' })),
                                    item.text && React.createElement("p", null, item.text),
                                    item.link && React.createElement(Link_1.default, __assign({}, item.link, { style: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' } })))));
                        });
                })))));
};
exports.default = CrossRoads;
//# sourceMappingURL=CrossRoads.js.map