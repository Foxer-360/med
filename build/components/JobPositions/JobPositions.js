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
import * as React from 'react';
import List from '../List';
import Button from '@source/partials/Button';
import SelectButton from './components/index';
import getImageUrl from '@source/helpers/getImageUrl';
var JobPositions = /** @class */ (function (_super) {
    __extends(JobPositions, _super);
    function JobPositions(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            numberOfPage: 1
        };
        return _this;
    }
    JobPositions.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, title = _a.title, positions = _a.positions;
        var polyclinics = [];
        if (positions && positions.length > 0) {
            positions.map(function (position, i) {
                polyclinics.push(position.polyclinic);
            });
        }
        return (React.createElement(List, { data: positions }, function (_a) {
            var getPage = _a.getPage;
            var _b = getPage(_this.state.numberOfPage, 'infinite', 3), items = _b.items, lastPage = _b.lastPage;
            return (React.createElement("div", { className: 'container actual-positions' },
                title && React.createElement("h3", null, title),
                React.createElement(SelectButton, { polyclinics: polyclinics }),
                React.createElement("div", { className: 'grid positions' }, items && items.map(function (position, index) { return (React.createElement("div", { className: 'positions__element', style: { backgroundImage: position.image && "url(" + getImageUrl(position.image) + ")" }, key: index },
                    React.createElement("div", { className: 'positions__element-content' },
                        position.name && React.createElement("p", null, position.name),
                        React.createElement(Button, { classes: 'btn--whiteBorder', url: position.url }, "v\u00EDce informac\u00ED")),
                    React.createElement("div", { className: 'positions__colorGradient', style: { background: "linear-gradient(to bottom, transparent 0%, #2473ba 100%)" } }))); })),
                _this.state.numberOfPage < lastPage &&
                    React.createElement("button", { className: 'btn hCenterBlock btn--blueBkg btn--down btn--fullWidth', onClick: function () { return _this.setState({ numberOfPage: _this.state.numberOfPage + 1 }); } }, "dal\u0161\u00ED pozice")));
        }));
    };
    return JobPositions;
}(React.Component));
export default JobPositions;
//# sourceMappingURL=JobPositions.js.map