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
var readEnvVariable_1 = require("../../../../helpers/readEnvVariable");
var react_lazyload_1 = require("react-lazyload");
var REACT_APP_MEDIA_LIBRARY_SERVER = readEnvVariable_1.default('REACT_APP_MEDIA_LIBRARY_SERVER');
var BckgImgWithFallback = /** @class */ (function (_super) {
    __extends(BckgImgWithFallback, _super);
    function BckgImgWithFallback(props) {
        var _this = _super.call(this, props) || this;
        _this.createVariantIfDoesNotExist = function () {
            if (_this.props.sizes) {
                fetch(REACT_APP_MEDIA_LIBRARY_SERVER + "/createDimension", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: _this.props.originalData.id,
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
        _this.getSizedUrl = function (props) {
            var baseUrl = 'https://foxer360-media-library.s3.eu-central-1.amazonaws.com/';
            var sizedUrl = null;
            _this.props.sizes.width = Math.round(_this.props.sizes.width * 1.5);
            _this.props.sizes.height = Math.round(_this.props.sizes.height * 1.5);
            var sizes = props.sizes;
            _this.setState({
                loading: true,
            });
            if (sizes && sizes.width && sizes.height && props.originalData && props.originalData.filename) {
                var filename = props.originalData.filename.split('.');
                filename[0] = filename[0] + '_' + sizes.width + '_' + sizes.height;
                filename = filename.join('.');
                sizedUrl = baseUrl + props.originalData.category + props.originalData.hash + '_' + filename;
                _this.setState({
                    src: sizedUrl,
                });
            }
            else {
                _this.setState({
                    src: _this.state.originalSrc,
                });
            }
        };
        _this.handleError = function () {
            _this.createVariantIfDoesNotExist();
            _this.setState({
                loading: true,
                src: _this.state.originalSrc,
            });
        };
        _this.state = {
            src: null,
            loading: true,
            originalSrc: getImageUrl_1.default(_this.props.originalData)
        };
        return _this;
    }
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
    BckgImgWithFallback.prototype.componentDidMount = function () {
        this.getSizedUrl(this.props);
    };
    BckgImgWithFallback.prototype.componentWillUpdate = function (nextProps, nextState) {
        if (this.state.src !== nextState.src) {
            this.loadImg(nextState.src);
        }
        if (nextState.originalSrc !== this.state.originalSrc) {
            this.getSizedUrl(nextProps);
        }
    };
    BckgImgWithFallback.prototype.render = function () {
        var _a = this.props, classes = _a.classes, addStyles = _a.addStyles;
        var BACKOFFICE = window && document.querySelector('.ant-layout') ? true : false;
        var bckgImgWithFallback = (React.createElement("div", { className: classes, style: __assign({ backgroundImage: "url(" + (this.state.src ? this.state.src : getImageUrl_1.default(this.props.originalData)) + ")" }, addStyles) }, this.props.children));
        return BACKOFFICE ? bckgImgWithFallback :
            React.createElement(react_lazyload_1.default, { height: this.props.sizes.height, offset: '100' }, bckgImgWithFallback);
    };
    return BckgImgWithFallback;
}(React.Component));
exports.default = BckgImgWithFallback;
//# sourceMappingURL=BckgImgWithFallback.js.map