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
import ImgWithFallback from './components/ImgWithFallback';
var Media = /** @class */ (function (_super) {
    __extends(Media, _super);
    function Media(props) {
        var _this = _super.call(this, props) || this;
        _this.renderAsImage = function (data) {
            var baseUrl = 'http://foxer360-media-library.s3.eu-central-1.amazonaws.com/';
            var recommendedSizes = data.recommendedSizes;
            var originalUrl = baseUrl + data.category + data.hash + '_' + data.filename;
            return (React.createElement(ImgWithFallback, { originalSrc: originalUrl, alt: data.alt || '', baseUrl: baseUrl, recommendedSizes: recommendedSizes, originalData: data }));
        };
        return _this;
    }
    Media.prototype.renderAsVideoEmbed = function (data) {
        var embedUrl = data.url + '?rel=0&amp;controls=0&amp;showinfo=0';
        return (React.createElement("div", { className: 'aspect-ratio' },
            React.createElement("iframe", { className: "mediaEmbeddedVideo", src: embedUrl, allowFullScreen: true, frameBorder: "0" })));
    };
    Media.prototype.render = function () {
        var data = this.props.data;
        switch (data.type) {
            case 'image':
                return this.renderAsImage(data);
            case 'embeddedVideo':
                return this.renderAsVideoEmbed(data);
            default:
                return React.createElement("div", { className: 'mediaError' }, "There was an error rendering media.");
        }
    };
    return Media;
}(React.Component));
export default Media;
//# sourceMappingURL=Media.js.map