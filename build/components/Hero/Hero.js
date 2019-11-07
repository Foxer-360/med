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
var SearchBar_1 = require("../SearchBar/SearchBar");
var getImageUrl_1 = require("../../helpers/getImageUrl");
var Button_1 = require("../../partials/Button");
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hero.prototype.render = function () {
        var _a = this.props.data, title = _a.title, text = _a.text, displaySearch = _a.displaySearch, image = _a.image, imageSize = _a.imageSize, placeholder = _a.placeholder, displayOverlay = _a.displayOverlay, titleColor = _a.titleColor, textColor = _a.textColor, overlayColor = _a.overlayColor, overlayOpacity = _a.overlayOpacity, secondColumn = _a.secondColumn, secondColumnBackground = _a.secondColumnBackground, title2 = _a.title2, title2color = _a.title2color, text2 = _a.text2, text2color = _a.text2color, button = _a.button, buttonBackground = _a.buttonBackground, buttonBorder = _a.buttonBorder, buttonUrl = _a.buttonUrl, buttonText = _a.buttonText;
        return (React.createElement("div", { className: "fullWidthContainer" },
            React.createElement("section", { className: 'hero' + (secondColumn ? ' row' : '') },
                React.createElement("div", { className: 'hero_img' + (secondColumn ? ' col-md-6' : ''), style: { backgroundImage: image && "url(" + getImageUrl_1.default(image) + ")",
                        backgroundSize: imageSize } },
                    displayOverlay && React.createElement("div", { className: 'hero__overlay', style: { background: overlayColor, opacity: overlayOpacity } }),
                    React.createElement("div", { className: 'hero__holder' },
                        title && React.createElement("h1", { className: "hero__title hero__title--" + titleColor }, title),
                        text && React.createElement("div", { className: "hero__text hero__text--" + textColor + " " }, text),
                        displaySearch && (React.createElement(SearchBar_1.default, { barColor: 'lightBlue', placeholder: placeholder ? placeholder : 'Hledat ...', blogSearchResults: this.props.data.blogSearchResults, doctorsLink: this.props.data.doctorsLink })))),
                secondColumn &&
                    React.createElement("div", { className: 'hero_col2 col-md-6', style: { background: secondColumnBackground } },
                        title && React.createElement("h1", { className: 'hero__title', style: { color: title2color } }, title2),
                        text && React.createElement("div", { className: 'hero__text', style: { color: text2color } }, text2),
                        button &&
                            React.createElement("div", { className: 'flexRow flexAlign--center' },
                                React.createElement(Button_1.default, { classes: 'btn ' + buttonBackground + buttonBorder, url: buttonUrl && buttonUrl }, buttonText))))));
    };
    return Hero;
}(React.Component));
exports.default = Hero;
//# sourceMappingURL=Hero.js.map