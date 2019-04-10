"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _List = _interopRequireDefault(require("../List"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

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

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var ExpertiseList =
/** @class */
function (_super) {
  __extends(ExpertiseList, _super);

  function ExpertiseList(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      numberOfPage: 1
    };
    return _this;
  }

  ExpertiseList.prototype.render = function () {
    var _this = this;

    var _a = this.props.data,
        title = _a.title,
        expertiseList = _a.expertiseList;
    return React.createElement(_List.default, {
      data: expertiseList
    }, function (_a) {
      var getPage = _a.getPage;

      var _b = getPage(_this.state.numberOfPage, 'infinite', 9),
          items = _b.items,
          lastPage = _b.lastPage;

      return React.createElement("section", {
        className: "expertiseList"
      }, title && React.createElement("h3", null, title), React.createElement("div", {
        className: "grid-container"
      }, items && items.map(function (item, index) {
        return React.createElement(_Link.default, __assign({}, item.url, {
          key: index
        }), React.createElement("div", {
          className: "expertiseList__element"
        }, React.createElement("div", null, item.image && React.createElement(_Media.default, {
          type: 'image',
          data: item.image
        })), item.title && React.createElement("p", null, item.title)));
      })), _this.state.numberOfPage < lastPage && React.createElement("div", {
        className: "container"
      }, React.createElement("button", {
        onClick: function onClick() {
          return _this.setState({
            numberOfPage: _this.state.numberOfPage + 1
          });
        },
        className: 'btn btn--blueBkg btn--fullWidth'
      }, "zobrazit dal\u0161i odbornosti")));
    });
  };

  return ExpertiseList;
}(React.Component);

var _default = ExpertiseList;
exports.default = _default;