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
        var _a = this.props, title = _a.title, description = _a.description, lastLong = _a.lastLong;
        return (React.createElement("div", { style: description ? { cursor: 'pointer' } : { cursor: 'default' }, className: "examination__list__item " + (lastLong ? 'examination__list__item--last-long' : '') },
            title &&
                React.createElement("p", { onClick: function () { return _this.setState({ isDescriptionVisible: !_this.state.isDescriptionVisible }); } }, title),
            description &&
                React.createElement(ReactMarkdown, { source: description, renderers: {
                        // tslint:disable-next-line:no-any
                        paragraph: function (props) {
                            return React.createElement("p", { style: _this.state.isDescriptionVisible ? { display: 'block' } : { display: 'none' } }, props.children);
                        },
                    } })));
    };
    return Examination;
}(React.Component));
export default Examination;
//# sourceMappingURL=Examination.js.map