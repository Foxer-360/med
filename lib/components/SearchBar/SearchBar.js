"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _SvgIcon = _interopRequireDefault(require("../../../lib/partials/SvgIcon"));

var _List = _interopRequireDefault(require("../../../lib/components/List"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

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

var SearchBar =
/** @class */
function (_super) {
  __extends(SearchBar, _super);

  function SearchBar(props) {
    var _this = _super.call(this, props) || this;

    _this.handleFocus = function () {
      _this.setState({
        focused: !_this.state.focused
      });
    };

    _this.changeSearchQuery = function (query) {
      _this.setState({
        query: query
      });
    };

    _this.searchBar = React.createRef();
    _this.state = {
      focused: false,
      query: ''
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  SearchBar.prototype.componentDidMount = function () {
    document.addEventListener('click', this.handleClick, false);
  };

  SearchBar.prototype.componentWillUnmount = function () {
    document.removeEventListener('click', this.handleClick, false);
  };

  SearchBar.prototype.handleClick = function (e) {
    if (this.searchBar.current.contains(e.target)) {
      return;
    } else {
      this.changeSearchQuery('');
    }
  };

  SearchBar.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        placeholder = _a.placeholder,
        barColor = _a.barColor;
    return React.createElement("div", {
      className: "searchBar " + (this.state.focused ? 'searchBar--focused' : '') + " searchBar--" + barColor,
      ref: this.searchBar
    }, React.createElement("div", {
      className: 'searchBar__input'
    }, React.createElement("input", {
      type: "text",
      placeholder: placeholder,
      onFocus: function onFocus() {
        return _this.handleFocus();
      },
      onBlur: function onBlur() {
        return _this.handleFocus();
      },
      onChange: function onChange(e) {
        return _this.changeSearchQuery(e.target.value);
      },
      value: this.state.query
    }), React.createElement(_SvgIcon.default, {
      name: 'search',
      type: barColor
    })), React.createElement("div", {
      className: "searchBar__bar"
    }), React.createElement("div", {
      className: "searchBarResults " + (this.state.query.length !== 0 ? 'active' : '')
    }, this.props.doctorSearchResults && React.createElement(_List.default, {
      data: this.props.doctorSearchResults,
      searchedText: this.state.query
    }, function (_a) {
      var data = _a.data;
      console.log(data);

      if (data) {
        return React.createElement("ul", {
          className: 'searchBarResults__doctors'
        }, data.map(function (doctor, i) {
          return React.createElement("li", {
            key: i,
            className: doctor.active ? 'active' : ''
          }, React.createElement(_Link.default, __assign({}, doctor.link), React.createElement("span", null, React.createElement("p", null, doctor.name), React.createElement("p", null, doctor.speciality)), React.createElement("span", null, doctor.clinic)));
        }));
      }
    }), React.createElement("hr", null), this.props.blogSearchResults && React.createElement(_List.default, {
      data: this.props.blogSearchResults,
      searchedText: this.state.query
    }, function (_a) {
      var data = _a.data;

      if (data) {
        return React.createElement("ul", {
          className: 'searchBarResults__blog'
        }, data.length > 0 && React.createElement("label", null, "Blog:"), data.map(function (blogItem, i) {
          return React.createElement("li", {
            key: i
          }, React.createElement(_Link.default, __assign({}, blogItem.link), React.createElement("div", null, React.createElement("h4", null, blogItem.title), React.createElement("p", null, blogItem.perex))));
        }));
      }
    })));
  };

  return SearchBar;
}(React.Component);

var _default = SearchBar;
exports.default = _default;