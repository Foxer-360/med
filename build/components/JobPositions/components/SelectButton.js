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
var SelectButton = /** @class */ (function (_super) {
    __extends(SelectButton, _super);
    function SelectButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            value: ''
        };
        return _this;
    }
    // handleChange(event: any) {
    //   this.setState({value: event.currentTarget.value});
    // }
    SelectButton.prototype.render = function () {
        var _a = this.props, polyclinics = _a.polyclinics, onSelectChange = _a.onSelectChange;
        return polyclinics && polyclinics.length > 0 && (React.createElement("div", { className: 'select-btn hCenterBlock' },
            React.createElement("select", { onChange: function () { return onSelectChange(); } },
                React.createElement("option", { value: "V\u0161echny polikliniky" }, "V\u0161echny polikliniky"),
                polyclinics && polyclinics.map(function (polyclinic, i) { return (React.createElement("option", { key: i, value: polyclinic }, polyclinic)); })),
            React.createElement("span", { className: "arrow" })));
    };
    return SelectButton;
}(React.Component));
exports.default = SelectButton;
//# sourceMappingURL=SelectButton.js.map