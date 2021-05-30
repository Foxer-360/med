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
var react_lazyload_1 = require("react-lazyload");
var ImgWithFallback_1 = require("./components/ImgWithFallback");
var Media = /** @class */ (function (_super) {
    __extends(Media, _super);
    function Media(props) {
        var _this = _super.call(this, props) || this;
        _this.setDimensions = function () {
            if (!(_this.props.width || _this.props.height)) {
                return;
            }
            var result = null;
            result = {
                width: _this.props.width && _this.props.width,
                height: _this.props.height && _this.props.height
            };
            return result;
        };
        _this.renderAsImage = function (data) {
            var baseUrl = 'https://foxer360-media-library.s3.eu-central-1.amazonaws.com/';
            if (data && data.filename) {
                var recommendedSizes = (data && data.recommendedSizes) || null;
                var originalUrl = baseUrl + data.category + data.hash + '_' + data.filename;
                recommendedSizes = _this.setDimensions();
                return (React.createElement(ImgWithFallback_1.default, { originalSrc: originalUrl, alt: data.alt || '', baseUrl: baseUrl, recommendedSizes: recommendedSizes, originalData: data, hash: data.hash, classes: _this.props.classes, nowrapper: _this.props.nowrapper }));
            }
            else {
                return null;
            }
        };
        return _this;
    }
    Media.prototype.renderAsVideoEmbed = function (data) {
        var embedUrl = data.url;
        return (React.createElement("div", { className: 'mediaRatio', style: {
                paddingTop: (parseInt(data.recommendedSizes ? data.recommendedSizes.height : 9, 10) /
                    parseInt(data.recommendedSizes ? data.recommendedSizes.width : 16, 10)) *
                    100 + "%",
            } },
            React.createElement("iframe", { className: "mediaEmbeddedVideo inner", src: embedUrl, allowFullScreen: true, frameBorder: "0" })));
    };
    Media.prototype.render = function () {
        var data = this.props.data;
        var BACKOFFICE = window && document.querySelector('.ant-layout') ? true : false;
        switch (data && data.type) {
            case 'image':
                return BACKOFFICE ? this.renderAsImage(data) :
                    React.createElement(react_lazyload_1.default, { height: this.props.height, offset: '100' }, this.renderAsImage(data));
            case 'embeddedVideo':
                return BACKOFFICE ? this.renderAsVideoEmbed(data) :
                    React.createElement(react_lazyload_1.default, { height: this.props.height, offset: '100' }, this.renderAsVideoEmbed(data));
            default:
                return BACKOFFICE ? this.renderAsImage(data) :
                    React.createElement(react_lazyload_1.default, { height: this.props.height, offset: '100' }, this.renderAsImage(data));
            // default:
            //   return <div className={'mediaError'}>There was an error rendering media.</div>;
        }
    };
    return Media;
}(React.Component));
exports.default = Media;
//# sourceMappingURL=Media.js.map