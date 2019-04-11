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
    ExpertiseDescriptionCare.prototype.componentWillReceiveProps = function (nextProps) {
        this.setState({ showHiddenText: nextProps.showHiddenText });
    };
    ExpertiseDescriptionCare.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, firstText = _a.firstText, secondText = _a.secondText, hideBtn = _a.hideBtn;
        return (React.createElement("div", { className: 'care' },
            title && React.createElement("h3", null, title),
            React.createElement("div", { className: 'hCenterBlock' }, firstText && React.createElement(ReactMarkdown, { source: firstText })),
            secondText && secondText.length > 1 && hideBtn &&
                React.createElement("h4", { className: 'care__more', onClick: function () { return _this.setState({ showHiddenText: !_this.state.showHiddenText }); } }, hideBtn),
            this.state.showHiddenText ?
                React.createElement("div", { className: 'hCenterBlock care--hidden', style: { marginTop: 45 } }, secondText && React.createElement(ReactMarkdown, { source: secondText }))
                : ''));
    };
    return ExpertiseDescriptionCare;
}(React.Component));
export default ExpertiseDescriptionCare;
//# sourceMappingURL=ExpertiseDescriptionCare.js.map