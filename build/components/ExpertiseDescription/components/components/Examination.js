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
var ReactMarkdown = require("react-markdown/with-html");
var Link_1 = require("../../../../partials/Link");
var Examination = /** @class */ (function (_super) {
    __extends(Examination, _super);
    function Examination(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isDescriptionVisible: false
        };
        return _this;
    }
    Examination.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, description = _a.description, url = _a.url;
        return (React.createElement("div", { className: "examination__list__item ", style: description ? { cursor: 'pointer' } : { cursor: 'default' } },
            React.createElement("div", { style: { display: 'table', height: '100%', width: '100%' } },
                React.createElement("div", { style: { display: 'table-cell', verticalAlign: 'middle' } },
                    title &&
                        React.createElement("p", { style: { fontWeight: 500 }, onClick: function () { return _this.setState({ isDescriptionVisible: !_this.state.isDescriptionVisible }); } }, title),
                    url && React.createElement(Link_1.default, __assign({}, url, { style: { width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 } })),
                    description &&
                        React.createElement(ReactMarkdown, { skipHtml: false, escapeHtml: false, source: description, renderers: {
                                // tslint:disable-next-line:no-any
                                root: function (props) {
                                    return React.createElement("div", { className: 'examination__list__item--markdown', style: _this.state.isDescriptionVisible ?
                                            { display: 'block', paddingTop: 15 } :
                                            { display: 'none' } }, props.children);
                                },
                            } })))));
    };
    return Examination;
}(React.Component));
exports.default = Examination;
//# sourceMappingURL=Examination.js.map