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
var List_1 = require("../List");
var Button_1 = require("../../partials/Button");
var BckgImgWithFallback_1 = require("../../partials/Media/components/BckgImgWithFallback");
var JobPositions = /** @class */ (function (_super) {
    __extends(JobPositions, _super);
    function JobPositions(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            numberOfPage: 1,
            filter: 'Všechny polikliniky'
        };
        return _this;
    }
    JobPositions.prototype.renderPositions = function (items) {
        var _this = this;
        return items.map(function (position, index) {
            return (position.polyclinic === _this.state.filter
                || _this.state.filter === 'Všechny polikliniky') && position.url.url && (React.createElement("div", { key: index, className: 'col-sm-12 col-lg-6 col-xl-4' },
                React.createElement(BckgImgWithFallback_1.default, { classes: 'positions__element', image: position.image, sizes: { width: 400, height: 296 } },
                    React.createElement("div", { className: 'positions__element-content' },
                        position.name && React.createElement("p", null, position.name),
                        React.createElement(Button_1.default, { classes: 'btn--whiteBorder', url: position.url }, "v\u00EDce informac\u00ED")),
                    React.createElement("div", { className: 'positions__colorGradient', style: { background: "linear-gradient(to bottom, transparent 0%, #2473ba 100%)" } }))));
        });
    };
    JobPositions.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, title = _a.title, positions = _a.positions;
        return (React.createElement(List_1.default, { data: positions }, function (_a) {
            var getPage = _a.getPage;
            var _b = getPage(_this.state.numberOfPage, 'infinite', 3), items = _b.items, lastPage = _b.lastPage;
            return (React.createElement("div", { className: 'container' },
                React.createElement("div", { className: 'actual-positions' },
                    title && React.createElement("h3", null, title),
                    React.createElement("div", { className: 'positions row' }, items && _this.renderPositions(items)),
                    _this.state.numberOfPage < lastPage &&
                        React.createElement("button", { className: 'btn hCenterBlock btn--blueBkg btn--down btn--fullWidth', onClick: function () { return _this.setState({ numberOfPage: _this.state.numberOfPage + 1 }); } }, "dal\u0161\u00ED pozice"))));
        }));
    };
    return JobPositions;
}(React.Component));
exports.default = JobPositions;
//# sourceMappingURL=JobPositions.js.map