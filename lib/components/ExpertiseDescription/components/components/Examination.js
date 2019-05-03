"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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

var Examination =
/** @class */
function (_super) {
  __extends(Examination, _super);

  function Examination(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      isDescriptionVisible: false
    };
    return _this;
  }

  Examination.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        title = _a.title,
        description = _a.description,
        lastLong = _a.lastLong;
    return React.createElement("div", {
      style: description ? {
        cursor: 'pointer'
      } : {
        cursor: 'default'
      },
      className: "examination__list__item " + (lastLong ? 'examination__list__item--last-long' : '')
    }, title && React.createElement("p", {
      style: {
        fontWeight: 500
      },
      onClick: function onClick() {
        return _this.setState({
          isDescriptionVisible: !_this.state.isDescriptionVisible
        });
      }
    }, title), description && React.createElement(_reactMarkdown["default"], {
      source: description,
      renderers: {
        // tslint:disable-next-line:no-any
        root: function root(props) {
          return React.createElement("div", {
            className: 'examination__list__item--markdown',
            style: _this.state.isDescriptionVisible ? {
              display: 'block',
              paddingTop: 15
            } : {
              display: 'none'
            }
          }, props.children);
        }
      }
    }));
  };

  return Examination;
}(React.Component);

var _default = Examination;
exports["default"] = _default;