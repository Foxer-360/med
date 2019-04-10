"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _List = _interopRequireDefault(require("../List"));

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

var Faq =
/** @class */
function (_super) {
  __extends(Faq, _super);

  function Faq(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      numberOfPage: 1
    };
    return _this;
  }

  Faq.prototype.render = function () {
    var _this = this;

    return React.createElement(_List.default, {
      data: this.props.data.items
    }, function (_a) {
      var getPage = _a.getPage;

      var _b = getPage(_this.state.numberOfPage, 'infinite', 4),
          items = _b.items,
          lastPage = _b.lastPage;

      return React.createElement("div", {
        className: 'faq'
      }, React.createElement("div", {
        className: 'container'
      }, items && items.map(function (item, i) {
        return React.createElement("div", {
          key: i,
          className: 'faq__element'
        }, React.createElement("h3", null, item.title), item.description && React.createElement(_reactMarkdown.default, {
          source: item.description
        }));
      }), _this.state.numberOfPage < lastPage && React.createElement("button", {
        className: 'btn hCenterBlock btn--blueBkg btn--fullWidth',
        onClick: function onClick() {
          return _this.setState({
            numberOfPage: _this.state.numberOfPage + 1
          });
        }
      }, "v\xEDce info")));
    });
  };

  return Faq;
}(React.Component);

var _default = Faq;
exports.default = _default;