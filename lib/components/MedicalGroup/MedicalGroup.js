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

var MedicalGroup =
/** @class */
function (_super) {
  __extends(MedicalGroup, _super);

  function MedicalGroup(props) {
    var _this = _super.call(this, props) || this;

    _this.handleItemClick = function (index) {
      if (_this.state.activeIndex === index) {
        _this.setState({
          activeIndex: null
        });
      } else {
        _this.setState({
          activeIndex: index
        });
      }
    };

    _this.list = React.createRef();
    _this.state = {
      activeIndex: null,
      listHeight: 0
    };
    return _this;
  }

  MedicalGroup.prototype.componentDidMount = function () {
    var listHeight = this.list.current.getBoundingClientRect().height + 120;
    this.setState({
      listHeight: listHeight
    });
  };

  MedicalGroup.prototype.render = function () {
    var _this = this;

    var _a = this.props.data,
        companies = _a.companies,
        title = _a.title;
    return React.createElement("div", {
      className: 'container'
    }, React.createElement("section", {
      className: 'medicalGroup'
    }, title && React.createElement("h4", null, "sou\u010D\xE1sti skupiny medicon jsou tyto spole\u010Dnosti"), React.createElement("div", {
      className: 'medicalGroup__list',
      ref: this.list,
      style: {
        height: this.state.listHeight > 0 && this.state.listHeight
      }
    }, React.createElement("ul", null, companies && companies.map(function (item, index) {
      return React.createElement("li", {
        key: index,
        className: "medicalGroup__list__item " + (_this.state.activeIndex === index ? 'active' : ''),
        onClick: function onClick() {
          return _this.handleItemClick(index);
        }
      }, React.createElement("p", {
        className: 'medicalGroup__list__item__title'
      }, React.createElement("span", null, item.name), " - ", React.createElement("span", null, item.subtitle)), React.createElement("div", {
        className: 'medicalGroup__list__item__text'
      }, item.text && React.createElement(_reactMarkdown.default, {
        source: item.text,
        renderers: {
          paragraph: function paragraph(props) {
            return React.createElement("p", null, props.children);
          }
        }
      })));
    })))));
  };

  return MedicalGroup;
}(React.Component);

var _default = MedicalGroup;
exports.default = _default;