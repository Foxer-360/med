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
var MedicalGroup = /** @class */ (function (_super) {
    __extends(MedicalGroup, _super);
    function MedicalGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.handleItemClick = function (index) {
            if (_this.state.activeIndex === index) {
                _this.setState({
                    activeIndex: null,
                });
            }
            else {
                _this.setState({
                    activeIndex: index,
                });
            }
        };
        _this.list = React.createRef();
        _this.state = {
            activeIndex: null,
            listHeight: 0,
        };
        return _this;
    }
    MedicalGroup.prototype.componentDidMount = function () {
        var listHeight = this.list.current.getBoundingClientRect().height + 120;
        this.setState({
            listHeight: listHeight,
        });
    };
    MedicalGroup.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, companies = _a.companies, title = _a.title;
        return (React.createElement("div", { className: 'container' },
            React.createElement("section", { className: 'medicalGroup' },
                title && React.createElement("h4", null, "sou\u010D\u00E1sti skupiny medicon jsou tyto spole\u010Dnosti"),
                React.createElement("div", { className: 'medicalGroup__list', ref: this.list, style: { height: this.state.listHeight > 0 && this.state.listHeight } },
                    React.createElement("ul", null, companies &&
                        companies.map(function (item, index) {
                            return (React.createElement("li", { key: index, className: "medicalGroup__list__item " + (_this.state.activeIndex === index ? 'active' : ''), onClick: function () { return _this.handleItemClick(index); } },
                                React.createElement("p", { className: 'medicalGroup__list__item__title' },
                                    React.createElement("span", null, item.name),
                                    " - ",
                                    React.createElement("span", null, item.subtitle)),
                                React.createElement("div", { className: 'medicalGroup__list__item__text' }, item.text && (React.createElement(ReactMarkdown, { source: item.text, renderers: {
                                        paragraph: function (props) { return React.createElement("p", null, props.children); },
                                    } })))));
                        }))))));
    };
    return MedicalGroup;
}(React.Component));
export default MedicalGroup;
//# sourceMappingURL=MedicalGroup.js.map