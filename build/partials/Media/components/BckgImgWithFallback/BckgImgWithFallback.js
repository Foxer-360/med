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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var getImageUrl_1 = require("../../../../helpers/getImageUrl");
var BckgImgWithFallback = /** @class */ (function (_super) {
    __extends(BckgImgWithFallback, _super);
    function BckgImgWithFallback(props) {
        var _this = _super.call(this, props) || this;
        _this.getSizedUrl = function (props) {
            var baseUrl = 'https://foxer360-media-library.s3.eu-central-1.amazonaws.com/';
            var sizedUrl = null;
            var sizes = props.sizes;
            var image = props.image;
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
                    src: image,
                });
            }
        };
        _this.handleError = function () {
            _this.createVariantIfDoesNotExist();
            _this.setState({
                loading: true,
                src: _this.props.image,
            });
        };
        _this.createVariantIfDoesNotExist = function () {
            if (_this.props.sizes) {
                fetch(process.env.REACT_APP_MEDIA_LIBRARY_SERVER + "/createDimension", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: _this.props.image.id,
                        width: parseInt(_this.props.sizes.width, 10),
                        height: parseInt(_this.props.sizes.height, 10),
                    }),
                })
                    .then(function (response) {
                    // this.getSizedUrl();
                })
                    .catch(function () {
                    console.log('There was an error creating variant');
                });
            }
        };
        _this.state = {
            src: null,
            loading: true,
        };
        return _this;
    }
    BckgImgWithFallback.prototype.componentDidMount = function () {
        this.getSizedUrl(this.props);
    };
    BckgImgWithFallback.prototype.loadImg = function (src) {
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
    BckgImgWithFallback.prototype.componentWillUpdate = function (nextProps, nextState) {
        if (this.state.src !== nextState.src) {
            this.loadImg(nextState.src);
        }
        if (nextProps.image !== this.props.image) {
            this.getSizedUrl(nextProps);
        }
    };
    BckgImgWithFallback.prototype.render = function () {
        var _a = this.props, image = _a.image, classes = _a.classes, addStyles = _a.addStyles;
        return (React.createElement("div", { className: classes, style: __assign({ backgroundImage: image && "url(" + getImageUrl_1.default(this.state.src) + ")" }, addStyles) }, this.props.children));
    };
    return BckgImgWithFallback;
}(React.Component));
exports.default = BckgImgWithFallback;
//# sourceMappingURL=BckgImgWithFallback.js.map