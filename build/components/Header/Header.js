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
import Hamburger from './components/Hamburger';
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header(props) {
        var _this = _super.call(this, props) || this;
        _this.getVertex = function () {
            var offsetLeft = _this.headerWrapper.current && _this.headerWrapper.current.offsetLeft + 61;
            var windowWidth = window.innerWidth;
            var vX = (offsetLeft * 100) / windowWidth;
            _this.setState({
                vX: vX,
            });
        };
        _this.closeMenu = function () {
            _this.setState({
                menuActive: false,
            });
        };
        _this.toggleMenu = function () {
            _this.setState({
                menuActive: !_this.state.menuActive,
            });
        };
        _this.headerWrapper = React.createRef();
        _this.state = { vX: 15, menuActive: false };
        return _this;
    }
    Header.prototype.componentDidMount = function () {
        this.getVertex();
    };
    Header.prototype.render = function () {
        return (React.createElement("header", { className: "header " + (this.state.menuActive ? 'menuActive' : '') },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: 'header__wrapper', ref: this.headerWrapper },
                    React.createElement("div", { className: 'header__logo' },
                        React.createElement("a", { href: '' },
                            React.createElement("img", { src: "/assets/medicon/images/logo.svg", alt: "Medicon Logo" }))),
                    React.createElement("nav", null,
                        React.createElement("ul", null,
                            React.createElement("li", null,
                                React.createElement("a", { href: "" }, "Domu")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "" }, "O nas")),
                            React.createElement("li", null,
                                React.createElement("a", { href: "" }, "kontakty"))),
                        React.createElement(Hamburger, { active: this.state.menuActive, onClick: this.toggleMenu })))),
            React.createElement("div", { className: 'header__iso' },
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "none" },
                    React.createElement("polygon", { fill: "white", points: "0,0 0,50 " + this.state.vX + ",100 100,0" }))),
            React.createElement("div", { className: "hiddenMenu " + (this.state.menuActive ? 'hiddenMenu--active' : '') },
                React.createElement("div", { className: 'hiddenMenu__wrapper' },
                    React.createElement("ul", null,
                        React.createElement("li", null,
                            React.createElement("a", { href: "" }, "Link")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "" }, "Link")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "" }, "Link")),
                        React.createElement("li", null,
                            React.createElement("a", { href: "" }, "Link")))))));
    };
    return Header;
}(React.Component));
export default Header;
//# sourceMappingURL=Header.js.map