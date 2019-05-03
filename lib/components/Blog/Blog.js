"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactMasonryCss = _interopRequireDefault(require("react-masonry-css"));

var _List = _interopRequireDefault(require("../List"));

var _searchBar = _interopRequireDefault(require("./components/searchBar"));

var _blogCard = require("./components/blogCard");

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

var Blog =
/** @class */
function (_super) {
  __extends(Blog, _super);

  function Blog(props) {
    var _this = _super.call(this, props) || this;

    _this.onSearchChange = function (e) {
      _this.setState({
        searchQuery: e.target.value
      });
    };

    _this.state = {
      numberOfPage: 1,
      searchQuery: ''
    };
    return _this;
  }

  Blog.prototype.render = function () {
    var _this = this;

    var _a = this.props.data,
        title = _a.title,
        displaySearch = _a.displaySearch,
        articles = _a.articles;
    return React.createElement("section", {
      className: 'blog'
    }, React.createElement("div", {
      className: "container"
    }, title && React.createElement("h1", {
      style: displaySearch ? {
        paddingBottom: 0
      } : {}
    }, title), displaySearch && React.createElement(_searchBar["default"], {
      value: this.state.searchQuery,
      onChange: this.onSearchChange,
      placeholder: 'Search',
      barColor: 'gray'
    }), React.createElement(_List["default"], {
      data: articles,
      searchedText: this.state.searchQuery
    }, function (_a) {
      var getPage = _a.getPage;

      var _b = getPage(_this.state.numberOfPage, 'infinite', 6),
          items = _b.items,
          lastPage = _b.lastPage;

      return React.createElement(React.Fragment, null, React.createElement(_reactMasonryCss["default"], {
        breakpointCols: {
          "default": 3,
          4000: 3,
          800: 2,
          500: 1
        },
        className: "my-masonry-grid",
        columnClassName: "my-masonry-grid_column"
      }, items.map(function (article, i) {
        return React.createElement(_blogCard.BlogCard, {
          key: i,
          url: article.url,
          title: article.title,
          text: (article.text && article.text.length > 35 ? article.text.slice(0, 35) : article.text) + " ..\n                        ",
          color: '#386fa2',
          img: article.image,
          special: false
        });
      })), _this.state.numberOfPage < lastPage && React.createElement("button", {
        style: {
          margin: '0 auto'
        },
        className: 'btn btn--greenBkg btn--fullWidth',
        onClick: function onClick() {
          return _this.setState({
            numberOfPage: _this.state.numberOfPage + 1
          });
        }
      }, "Na\u010D\xEDst dal\u0161\xED"));
    })));
  };

  return Blog;
}(React.Component);

var _default = Blog;
exports["default"] = _default;