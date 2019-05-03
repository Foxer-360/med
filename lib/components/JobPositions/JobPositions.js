"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _List = _interopRequireDefault(require("../List"));

var _Button = _interopRequireDefault(require("../../../lib/partials/Button"));

var _index = _interopRequireDefault(require("./components/index"));

var _getImageUrl = _interopRequireDefault(require("../../../lib/helpers/getImageUrl"));

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

var JobPositions =
/** @class */
function (_super) {
  __extends(JobPositions, _super);

  function JobPositions(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      numberOfPage: 1
    };
    return _this;
  }

  JobPositions.prototype.render = function () {
    var _this = this;

    var _a = this.props.data,
        title = _a.title,
        positions = _a.positions;
    var polyclinics = [];

    if (positions && positions.length > 0) {
      positions.map(function (position, i) {
        polyclinics.push(position.polyclinic);
      });
    }

    return React.createElement(_List["default"], {
      data: positions
    }, function (_a) {
      var getPage = _a.getPage;

      var _b = getPage(_this.state.numberOfPage, 'infinite', 3),
          items = _b.items,
          lastPage = _b.lastPage;

      return React.createElement("div", {
        className: 'container actual-positions'
      }, title && React.createElement("h3", null, title), React.createElement(_index["default"], {
        polyclinics: polyclinics
      }), React.createElement("div", {
        className: 'grid positions'
      }, items && items.map(function (position, index) {
        return React.createElement("div", {
          className: 'positions__element',
          style: {
            backgroundImage: position.image && "url(" + (0, _getImageUrl["default"])(position.image) + ")"
          },
          key: index
        }, React.createElement("div", {
          className: 'positions__element-content'
        }, position.name && React.createElement("p", null, position.name), React.createElement(_Button["default"], {
          classes: 'btn--whiteBorder',
          url: position.url
        }, "v\xEDce informac\xED")), React.createElement("div", {
          className: 'positions__colorGradient',
          style: {
            background: "linear-gradient(to bottom, transparent 0%, #2473ba 100%)"
          }
        }));
      })), _this.state.numberOfPage < lastPage && React.createElement("button", {
        className: 'btn hCenterBlock btn--blueBkg btn--down btn--fullWidth',
        onClick: function onClick() {
          return _this.setState({
            numberOfPage: _this.state.numberOfPage + 1
          });
        }
      }, "dal\u0161\xED pozice"));
    });
  };

  return JobPositions;
}(React.Component);

var _default = JobPositions;
exports["default"] = _default;