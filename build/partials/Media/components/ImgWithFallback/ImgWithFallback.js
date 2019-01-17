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
var ImgWithFallback = /** @class */ (function (_super) {
    __extends(ImgWithFallback, _super);
    function ImgWithFallback(props) {
        var _this = _super.call(this, props) || this;
        _this.createVariantIfDoesNotExist = function () {
            if (_this.props.recommendedSizes) {
                fetch(process.env.REACT_APP_MEDIA_LIBRARY_SERVER + "/createDimension", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        id: _this.props.originalData.id,
                        width: parseInt(_this.props.recommendedSizes.width, 10),
                        height: parseInt(_this.props.recommendedSizes.height, 10),
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
            var sizedUrl = null;
            var sizes = props.recommendedSizes;
            var sizedFile = null;
            _this.setState({
                loading: true,
            });
            if (sizes && sizes.width && sizes.height) {
                var filename = props.originalData.filename.split('.');
                filename[0] = filename[0] + '_' + sizes.width + '_' + sizes.height;
                filename = filename.join('.');
                // fetch(`${process.env.REACT_APP_MEDIA_LIBRARY_SERVER}/findByFilename?filename=${filename}`, {
                fetch(process.env.REACT_APP_MEDIA_LIBRARY_SERVER + "/findByFilename?filename=" + filename, {
                    method: 'GET',
                })
                    .then(function (response) {
                    return response.json();
                })
                    .then(function (data) {
                    if (data && data.files[0]) {
                        sizedFile = data.files[0];
                        sizedUrl =
                            props.baseUrl + props.originalData.category + sizedFile.hash + '_' + sizedFile.filename;
                        _this.setState({
                            src: sizedUrl,
                        });
                    }
                    else {
                        _this.setState({
                            src: props.originalSrc,
                        });
                        _this.createVariantIfDoesNotExist();
                    }
                })
                    .catch(function () {
                    _this.setState({
                        src: props.originalSrc,
                    });
                });
            }
            else {
                _this.setState({
                    src: props.originalSrc,
                });
            }
        };
        _this.handleError = function () {
            _this.createVariantIfDoesNotExist();
            _this.setState({
                loading: true,
            });
        };
        _this.state = {
            src: null,
            loading: true,
        };
        return _this;
    }
    ImgWithFallback.prototype.loadImg = function (src) {
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
    ImgWithFallback.prototype.componentDidMount = function () {
        this.getSizedUrl(this.props);
    };
    ImgWithFallback.prototype.componentWillUpdate = function (nextProps, nextState) {
        if (this.state.src !== nextState.src) {
            this.loadImg(nextState.src);
        }
        if (nextProps.originalSrc !== this.props.originalSrc) {
            this.getSizedUrl(nextProps);
        }
    };
    ImgWithFallback.prototype.render = function () {
        var alt = this.props.alt;
        if (this.state.loading) {
            return React.createElement("div", { className: 'mediaImageLoader' });
        }
        else {
            return React.createElement("img", { className: 'mediaImage', alt: alt, src: this.state.src });
        }
    };
    return ImgWithFallback;
}(React.Component));
export default ImgWithFallback;
//# sourceMappingURL=ImgWithFallback.js.map