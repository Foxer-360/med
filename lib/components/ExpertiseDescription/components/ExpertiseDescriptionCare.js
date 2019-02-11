"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

// tslint:disable-next-line:max-line-length
var ExpertiseDescriptionCare =
/** @class */
function (_super) {
  __extends(ExpertiseDescriptionCare, _super);

  function ExpertiseDescriptionCare(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      showHiddenText: false
    };
    return _this;
  }

  ExpertiseDescriptionCare.prototype.render = function () {
    var _this = this;

    return React.createElement("div", {
      className: 'care'
    }, this.props.title && React.createElement("h3", null, this.props.title), React.createElement("div", {
      className: 'hCenterBlock'
    }, this.props.firstText && React.createElement(_reactMarkdown.default, {
      source: this.props.firstText
    })), this.props.secondText.length > 1 && React.createElement("h4", {
      style: {
        cursor: 'pointer',
        padding: '45px 0 0 0'
      },
      onClick: function onClick() {
        return _this.setState({
          showHiddenText: !_this.state.showHiddenText
        });
      }
    }, "V\xEDce informac\xED"), this.state.showHiddenText ? React.createElement("div", {
      className: 'hCenterBlock'
    }, this.props.secondText && React.createElement(_reactMarkdown.default, {
      source: this.props.secondText
    })) : '');
  };

  return ExpertiseDescriptionCare;
}(React.Component);

var _default = ExpertiseDescriptionCare;
exports.default = _default;