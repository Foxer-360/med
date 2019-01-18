"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactMasonryCss = _interopRequireDefault(require("react-masonry-css"));

var _blogCard = require("./components/blogCard");

var _Button = _interopRequireDefault(require("../../partials/Button"));

var _SearchBar = _interopRequireDefault(require("../SearchBar/SearchBar"));

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _reactApollo = require("react-apollo");

var _reactAdopt = require("react-adopt");

var _objTraverse = require("obj-traverse/lib/obj-traverse");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var __makeTemplateObject = void 0 && (void 0).__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

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

var GET_CONTEXT = (0, _graphqlTag.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    pageData @client\n    languageData @client\n  }\n"], ["\n  {\n    pageData @client\n    languageData @client\n  }\n"])));
var GET_ALL_PAGES = (0, _graphqlTag.default)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query localizedPages($languageId: ID!) {\n    pages {\n      id \n      type {\n        id\n        name\n      }\n      tags {\n        id\n        name\n      }\n      translations(where: { language: { id: $languageId } }) {\n        id\n        name\n        createdAt\n        content\n        language {\n          id\n          code\n        }\n      }\n    }\n  }\n"], ["\n  query localizedPages($languageId: ID!) {\n    pages {\n      id \n      type {\n        id\n        name\n      }\n      tags {\n        id\n        name\n      }\n      translations(where: { language: { id: $languageId } }) {\n        id\n        name\n        createdAt\n        content\n        language {\n          id\n          code\n        }\n      }\n    }\n  }\n"])));
var GET_PAGE = (0, _graphqlTag.default)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  query($pageId: ID!) {\n    page(where: { id: $pageId }) {\n      id\n      tags {\n        id\n        name\n      }\n    }\n  }\n"], ["\n  query($pageId: ID!) {\n    page(where: { id: $pageId }) {\n      id\n      tags {\n        id\n        name\n      }\n    }\n  }\n"])));
var ComposedQuery = (0, _reactAdopt.adopt)({
  getContext: function getContext(_a) {
    var render = _a.render;
    return React.createElement(_reactApollo.Query, {
      query: GET_CONTEXT
    }, function (_a) {
      var data = _a.data;
      return render(data);
    });
  },
  allPages: function allPages(_a) {
    var render = _a.render,
        languageData = _a.getContext.languageData;

    if (!languageData) {
      return render({
        loading: true
      });
    }

    return React.createElement("div", null, React.createElement(_reactApollo.Query, {
      query: GET_ALL_PAGES,
      variables: {
        languageId: languageData.id
      }
    }, function (data) {
      return render(data);
    }));
  },
  currentPage: function currentPage(_a) {
    var render = _a.render,
        pageData = _a.getContext.pageData;
    return React.createElement(_reactApollo.Query, {
      query: GET_PAGE,
      variables: {
        pageId: pageData.id
      }
    }, function (data) {
      return render(data);
    });
  }
});

var Blog =
/** @class */
function (_super) {
  __extends(Blog, _super);

  function Blog(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {};
    return _this;
  }

  Blog.prototype.render = function () {
    var _this = this;

    var _a = this.props.data,
        title = _a.title,
        displaySearch = _a.displaySearch;
    return React.createElement("section", {
      className: 'blog'
    }, React.createElement("div", {
      className: "container"
    }, title && React.createElement("h1", null, title), displaySearch && React.createElement(_SearchBar.default, {
      placeholder: 'Vyhledat téma',
      barColor: 'gray'
    }), React.createElement(ComposedQuery, null, function (_a) {
      var _b = _a.allPages,
          allPagesData = _b.data,
          allPagesLoading = _b.loading,
          allPagesError = _b.error,
          _c = _a.currentPage,
          currentPageData = _c.data,
          currentPageLoading = _c.loading,
          currentPageError = _c.error,
          languageData = _a.getContext.languageData;

      if (allPagesLoading || currentPageLoading || !allPagesData || !languageData) {
        return React.createElement("div", null, "Loading");
      }

      if (allPagesError) {
        return "Error...";
      }

      var pages = allPagesData.pages;
      var page = currentPageData.page;
      var articles = pages.filter(function (p) {
        if (!p.translations.find(function (t) {
          return t.language.code === languageData.code && (0, _objTraverse.findAll)(t.content, 'content', {
            name: 'BlogArticle'
          }).length > 0;
        })) {
          return false;
        }

        if (!(p.translations && p.translations.length > 0)) {
          return false;
        }

        if (page && p.id === page.id) {
          return false;
        }

        return true;
      }) // SORT ARTICLES BY DATE
      .sort(function (a, b) {
        a = a.translations[0].createdAt;
        b = b.translations[0].createdAt;
        return a > b ? -1 : a < b ? 1 : 0;
      });
      return React.createElement(_reactMasonryCss.default, {
        breakpointCols: {
          default: 3,
          4000: 3,
          800: 2,
          500: 1
        },
        className: "my-masonry-grid",
        columnClassName: "my-masonry-grid_column"
      }, articles.map(function (article, i) {
        return _this.mapArticleToContent(article, languageData.code, i);
      }));
    }), React.createElement("div", {
      className: 'blog__blur'
    }, React.createElement("div", null)), React.createElement("div", {
      className: "blog__btnHolder"
    }, React.createElement(_Button.default, {
      classes: "btn--blueBkg btn--fullWidth"
    }, "Na\u010D\xEDst dal\u0161\xED"))));
  };

  Blog.prototype.mapArticleToContent = function (article, languageCode, index) {
    var content = article.translations.find(function (t) {
      return t.language.code === languageCode || 'cs';
    });
    var tags = article.tags;
    var blogArticleComponentData = (0, _objTraverse.findFirst)(content.content, 'content', {
      name: 'BlogArticle'
    });

    if (blogArticleComponentData) {
      var _a = (0, _objTraverse.findFirst)(content.content, 'content', {
        name: 'BlogArticle'
      }).data,
          perex = _a.perex,
          image = _a.image,
          name_1 = _a.title;
      return React.createElement(_blogCard.BlogCard, {
        id: article.id,
        title: name_1,
        text: perex,
        key: index,
        color: '#386fa2',
        img: image,
        special: false
      });
    }

    return React.createElement("div", null);
  };

  return Blog;
}(React.Component);

var _default = Blog;
exports.default = _default;
var templateObject_1, templateObject_2, templateObject_3;