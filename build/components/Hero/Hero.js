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
var readEnvVariable_1 = require("../../helpers/readEnvVariable");
var react_lazyload_1 = require("react-lazyload");
var REACT_APP_MEDIA_LIBRARY_SERVER = readEnvVariable_1.default('REACT_APP_MEDIA_LIBRARY_SERVER');
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero(props) {
        var _this = _super.call(this, props) || this;
        _this.createVariantIfDoesNotExist = function () {
            var sizes = { width: '' + Math.round(1920 * 1.5),
                height: '' + Math.round(650 * 1.5) };
            fetch(REACT_APP_MEDIA_LIBRARY_SERVER + "/createDimension", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: _this.props.data.image.id,
                    width: parseInt(sizes.width, 10),
                    height: parseInt(sizes.height, 10),
                }),
            })
                .then(function (response) {
                // this.getSizedUrl(this.props.data.image);
            })
                .catch(function () {
                console.log('There was an error creating variant');
            });
        };
        _this.getSizedUrl = function (image) {
            var baseUrl = 'https://foxer360-media-library.s3.eu-central-1.amazonaws.com/';
            var sizedUrl = null;
            var sizes = { width: Math.round(1920 * 1.5),
                height: Math.round(650 * 1.5) };
            _this.setState({
                loading: true,
            });
            if (sizes && sizes.width && sizes.height && image && image.filename) {
                var filename = image.filename.split('.');
                filename[0] = filename[0] + '_' + sizes.width + '_' + sizes.height;
                filename = filename.join('.');
                sizedUrl = baseUrl + image.category + image.hash + '_' + filename;
                _this.setState({
                    src: sizedUrl,
                });
            }
            else {
                _this.setState({
                    src: getImageUrl_1.default(image),
                });
            }
        };
        _this.handleError = function () {
            _this.createVariantIfDoesNotExist();
            _this.setState({
                loading: true,
                src: getImageUrl_1.default(_this.props.data.image),
            });
        };
        _this.state = {
            src: null,
            loading: true,
        };
        return _this;
    }
    Hero.prototype.loadImg = function (src) {
        var _this = this;
        if (src) {
            var img = new Image();
            img.src = src;
            img.onload = function () {
                _this.setState({
                    loading: false,
                });
            };
            img.onerror = function (err) {
                _this.handleError();
            };
        }
    };
    Hero.prototype.componentDidMount = function () {
        this.getSizedUrl(this.props.data.image);
    };
    Hero.prototype.componentWillUpdate = function (nextProps, nextState) {
        if (this.state.src !== nextState.src) {
            this.loadImg(nextState.src);
        }
        if (nextProps.data.image !== this.props.data.image) {
            this.getSizedUrl(nextProps);
        }
    };
    Hero.prototype.render = function () {
        var _a = this.props.data, title = _a.title, text = _a.text, displaySearch = _a.displaySearch, image = _a.image, placeholder = _a.placeholder, displayOverlay = _a.displayOverlay, overlayColor = _a.overlayColor, overlayOpacity = _a.overlayOpacity, titleColor = _a.titleColor, textColor = _a.textColor;
        return (React.createElement("div", { className: "fullWidthContainer" },
            React.createElement("section", { className: 'hero', style: { backgroundImage: image
                        && "url(" + (this.state.src ? this.state.src : getImageUrl_1.default(this.props.data.image)) + ")" } },
                displayOverlay &&
                    React.createElement("div", { className: 'hero__overlay', style: { background: overlayColor, opacity: (overlayOpacity / 100) } }),
                React.createElement("div", { className: 'container' },
                    React.createElement("div", { className: 'hero__holder' },
                        title && React.createElement("h1", { className: "hero__title hero__title--" + titleColor }, title),
                        text && React.createElement("div", { className: "hero__text hero__text--" + textColor + " " }, text),
                        displaySearch && (React.createElement(SearchBar_1.default, { barColor: 'lightBlue', placeholder: placeholder ? placeholder : 'Hledat ...', blogSearchResults: this.props.data.blogSearchResults, doctorsLink: this.props.data.doctorsLink })))))));
        return BACKOFFICE ? hero : React.createElement(react_lazyload_1.default, { height: 650, offset: '100' }, hero);
    };
    return Hero;
}(React.Component));
exports.default = Hero;
//# sourceMappingURL=Hero.js.map