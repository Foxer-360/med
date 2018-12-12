"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var Media =
/** @class */
function (_super) {
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
    var _a = this.props,
        type = _a.type,
        data = _a.data;

    switch (type) {
      case 'image':
        return React.createElement("img", {
          src: this.getImgUrl(data),
          alt: data && data.alt ? data.alt : '',
          className: 'mediaImage'
        });
        break;

      default:
        return React.createElement("div", null, "There was an error");
    }
  };

  return Media;
}(React.Component);

var _default = Media;
exports.default = _default;