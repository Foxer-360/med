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
var Media = /** @class */ (function (_super) {
    __extends(Media, _super);
    function Media(props) {
        var _this = _super.call(this, props) || this;
        _this.getImgUrl = function (data) {
            var baseUrl = 'http://foxer360-media-library.s3.eu-central-1.amazonaws.com/';
            if (data) {
                return baseUrl + data.category + data.hash + '_' + data.filename;
            }
            return null;
        };
        return _this;
    }
    Media.prototype.render = function () {
        var _a = this.props, type = _a.type, data = _a.data;
        switch (type) {
            case 'image':
                return React.createElement("img", { src: this.getImgUrl(data), alt: data && data.alt ? data.alt : '', className: 'mediaImage' });
                break;
            default:
                return React.createElement("div", null, "There was an error");
        }
    };
    return Media;
}(React.Component));
export default Media;
//# sourceMappingURL=Media.js.map