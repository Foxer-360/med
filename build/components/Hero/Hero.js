"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var Link_1 = require("../../partials/Link");
var graphql_tag_1 = require("graphql-tag");
var react_apollo_1 = require("react-apollo");
var REACT_APP_MEDIA_LIBRARY_SERVER = readEnvVariable_1.default('REACT_APP_MEDIA_LIBRARY_SERVER');
var GET_CONTEXT = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client\n  }\n"], ["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client\n  }\n"])));
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
        _this.getLink = function (data, slug) {
            if (slug === undefined) {
                slug = '';
            }
            var link = "/" + (data.languageData && data.languageData.code) + "/" + slug.trim();
            return link;
        };
        _this.getDoctorText = function (text, textColor) {
            text = text.split(' ? ');
            var expertise = text ? text[0].split(' ! ') : '';
            var polyclinic = text ? text[1].split(' ! ') : '';
            var polyclinicNames = polyclinic ? polyclinic[0].split(', ') : '';
            var polyclinicsUrls = polyclinic ? polyclinic[1].split(',') : '';
            return (text && (React.createElement(react_apollo_1.Query, { query: GET_CONTEXT }, function (_a) {
                var data = _a.data;
                var polyclinics = [];
                polyclinicNames.map(function (name) {
                    polyclinics.push(polyclinicsUrls[polyclinicNames.indexOf(name)] ?
                        (React.createElement(React.Fragment, null,
                            React.createElement(Link_1.default, { url: _this.getLink(data, polyclinicsUrls[polyclinicNames.indexOf(name)]), className: 'hero__text__link' }, name.trim()),
                            polyclinicNames.indexOf(name) < (polyclinicNames.length - 1) ? ', ' : '')) :
                        name.trim());
                });
                return (React.createElement("div", { className: "hero__text hero__text--" + textColor + " " },
                    expertise[1] ?
                        React.createElement(Link_1.default, { url: _this.getLink(data, expertise[1]), className: 'hero__text__link' }, expertise[0].trim()) :
                        expertise[0].trim(),
                    ' - ',
                    polyclinics));
            })));
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
        var BACKOFFICE = window && document.querySelector('.ant-layout') ? true : false;
        var hero = (React.createElement("div", { className: "fullWidthContainer" },
            React.createElement("section", { className: 'hero', style: { backgroundImage: image &&
                        "url(" + (this.state.src ? this.state.src : getImageUrl_1.default(this.props.data.image)) + ")" } },
                displayOverlay &&
                    React.createElement("div", { className: 'hero__overlay', style: { background: overlayColor, opacity: (overlayOpacity / 100) } }),
                React.createElement("div", { className: 'container' },
                    React.createElement("div", { className: 'hero__holder' },
                        title && React.createElement("h1", { className: "hero__title hero__title--" + titleColor }, title),
                        this.props.info
                            && this.props.info.datasources
                            && this.props.info.datasources.doctor
                            ? this.getDoctorText(text, textColor)
                            : text && React.createElement("div", { className: "hero__text hero__text--" + textColor + " " }, text),
                        displaySearch && (React.createElement(SearchBar_1.default, { barColor: 'lightBlue', placeholder: placeholder ? placeholder : 'Hledat ...', blogSearchResults: this.props.data.blogSearchResults, doctorsLink: this.props.data.doctorsLink })))))));
        return BACKOFFICE ? hero : React.createElement(react_lazyload_1.default, { height: 650, offset: '100' }, hero);
    };
    return Hero;
}(React.Component));
exports.default = Hero;
var templateObject_1;
//# sourceMappingURL=Hero.js.map