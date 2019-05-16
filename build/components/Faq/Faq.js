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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactMarkdown = require("react-markdown");
var List_1 = require("../List");
var Faq = /** @class */ (function (_super) {
    __extends(Faq, _super);
    function Faq(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            numberOfPage: 1,
        };
        return _this;
    }
    Faq.prototype.render = function () {
        var _this = this;
        return (React.createElement(List_1.default, { data: this.props.data.items }, function (_a) {
            var getPage = _a.getPage;
            var _b = getPage(_this.state.numberOfPage, 'infinite', 4), items = _b.items, lastPage = _b.lastPage;
            return (React.createElement("div", { className: 'faq' },
                React.createElement("div", { className: 'container' },
                    items && items.map(function (item, i) {
                        return (React.createElement("div", { key: i, className: 'faq__element' },
                            React.createElement("h3", null, item.title),
                            item.description && React.createElement(ReactMarkdown, { source: item.description })));
                    }),
                    _this.state.numberOfPage < lastPage && React.createElement("button", { className: 'btn hCenterBlock btn--blueBkg btn--fullWidth', onClick: function () { return _this.setState({ numberOfPage: _this.state.numberOfPage + 1 }); } }, "v\u00EDce info"))));
        }));
    };
    return Faq;
}(React.Component));
exports.default = Faq;
//# sourceMappingURL=Faq.js.map