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
import ReactMarkdown from 'react-markdown';
// tslint:disable-next-line:max-line-length
var ExpertiseDescriptionCare = /** @class */ (function (_super) {
    __extends(ExpertiseDescriptionCare, _super);
    function ExpertiseDescriptionCare(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showHiddenText: false,
        };
        return _this;
    }
    ExpertiseDescriptionCare.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'care' },
            this.props.title && React.createElement("h3", null, this.props.title),
            React.createElement("div", { className: 'hCenterBlock' }, this.props.firstText && React.createElement(ReactMarkdown, { source: this.props.firstText })),
            this.props.secondText && this.props.secondText.length > 1 &&
                React.createElement("h4", { style: { cursor: 'pointer', padding: '45px 0 0 0' }, onClick: function () { return _this.setState({ showHiddenText: !_this.state.showHiddenText }); } }, "V\u00EDce informac\u00ED"),
            this.state.showHiddenText ?
                React.createElement("div", { className: 'hCenterBlock' }, this.props.secondText && React.createElement(ReactMarkdown, { source: this.props.secondText }))
                : ''));
    };
    return ExpertiseDescriptionCare;
}(React.Component));
export default ExpertiseDescriptionCare;
//# sourceMappingURL=ExpertiseDescriptionCare.js.map