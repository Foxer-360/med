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
var Avatar_1 = require("./components/Avatar");
var SvgIcon_1 = require("@source/partials/SvgIcon");
var Link_1 = require("@source/partials/Link");
var MyProblem = /** @class */ (function (_super) {
    __extends(MyProblem, _super);
    function MyProblem(props) {
        var _this = _super.call(this, props) || this;
        _this.clickArea = function (area) {
            var availableSpecializations = [];
            for (var i = 0; i < _this.props.data.specializations.length; i++) {
                if (_this.props.data.specializations[i][area] === true) {
                    availableSpecializations.push(_this.props.data.specializations[i]);
                }
            }
            _this.setState({
                availableSpecializations: availableSpecializations,
                area: area,
            });
        };
        _this.closeInfoBox = function () {
            _this.setState({
                area: '',
            });
        };
        _this.state = {
            area: '',
            availableSpecializations: null,
        };
        return _this;
    }
    MyProblem.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "container" },
            React.createElement("section", { className: 'myProblem' },
                React.createElement("h3", null, "M\u016Fj Probl\u00E9m se t\u00FDk\u00E1"),
                React.createElement("p", null, "Klikn\u011Bte na \u010D\u00E1st t\u011Bla se kterou m\u00E1te probl\u00E9m."),
                React.createElement("div", { className: 'flexRow myProblem__holder' },
                    React.createElement(Avatar_1.default, { onClick: this.clickArea, activeArea: this.state.area ? 'active--' + this.state.area : '' }),
                    this.state.area && (React.createElement("div", { className: "infoBox " + (this.state.area ? 'infoBox--' + this.state.area : '') },
                        React.createElement("div", { className: 'infoBox__close', onClick: function () { return _this.closeInfoBox(); } },
                            React.createElement(SvgIcon_1.default, { name: "close", type: "gray" })),
                        this.state.availableSpecializations &&
                            this.state.availableSpecializations.map(function (specialization, i) {
                                if (specialization.link) {
                                    return (React.createElement("div", { className: 'infoBox__item', key: i },
                                        React.createElement(Link_1.default, __assign({}, specialization.link), specialization.name)));
                                }
                                else {
                                    return (React.createElement("div", { className: 'infoBox__item' },
                                        React.createElement("p", null, specialization.name)));
                                }
                            })))))));
    };
    return MyProblem;
}(React.Component));
exports.default = MyProblem;
//# sourceMappingURL=MyProblem.js.map