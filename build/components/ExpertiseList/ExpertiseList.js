"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ExpertiseList = /** @class */ (function (_super) {
    __extends(ExpertiseList, _super);
    function ExpertiseList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            numberOfPage: 1,
        };
        return _this;
    }
    ExpertiseList.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, title = _a.title, expertiseList = _a.expertiseList;
        return (React.createElement(List_1.default, { data: expertiseList }, function (_a) {
            var getPage = _a.getPage;
            var _b = getPage(_this.state.numberOfPage, 'infinite', 9), items = _b.items, lastPage = _b.lastPage;
            return (React.createElement("section", { className: "expertiseList" },
                React.createElement("div", { className: "container" },
                    title && React.createElement("h3", null, title),
                    React.createElement("div", { className: "row" }, items && items.map(function (item, index) { return (React.createElement("div", { key: index, className: "col-sm-12 col-lg-6 col-xl-4" },
                        React.createElement("div", { className: "expertiseList__element" },
                            React.createElement("div", null, item.image && React.createElement(Media_1.default, { type: 'image', data: item.image, width: '60', height: '60' })),
                            React.createElement(Link_1.default, __assign({}, item.url)),
                            item.title && React.createElement("p", null, item.title)))); })),
                    _this.state.numberOfPage < lastPage &&
                        React.createElement("button", { className: 'btn btn--blueBkg btn--fullWidth', onClick: function () { return _this.setState({ numberOfPage: lastPage }); } }, "Zobrazit dal\u0161\u00ED odbornosti"))));
        }));
    };
    return ExpertiseList;
}(React.Component));
exports.default = ExpertiseList;
//# sourceMappingURL=ExpertiseList.js.map