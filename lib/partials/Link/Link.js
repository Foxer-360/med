"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactApollo = require("react-apollo");

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _Loader = _interopRequireDefault(require("../../partials/Loader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  }
  return t;
};

var isExternalLink = function isExternalLink(url) {
  var pattern = /^https?|^www/i;
  return pattern.test(url);
};

var GET_PAGES_URLS = (0, _graphqlTag.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query pagesUrls($languageCode: String) {\n    pagesUrls(where: { languageCode: $languageCode }) {\n      id\n      page\n      url\n      name\n      description\n    }\n  }\n"], ["\n  query pagesUrls($languageCode: String) {\n    pagesUrls(where: { languageCode: $languageCode }) {\n      id\n      page\n      url\n      name\n      description\n    }\n  }\n"])));

var ComposerLink = function ComposerLink(props) {
  var children = props.children,
      urlNewWindow = props.urlNewWindow,
      url = props.url,
      pageId = props.pageId,
      languageCode = props.languageCode,
      args = __rest(props, ["children", "urlNewWindow", "url", "pageId", "languageCode"]);

  return _react.default.createElement(_reactApollo.Query, {
    query: GET_PAGES_URLS,
    variables: {
      languageCode: languageCode
    }
  }, function (_a) {
    var pagesUrls = _a.data.pagesUrls,
        loading = _a.loading,
        error = _a.error;

    if (loading) {
      return _react.default.createElement(_Loader.default, null);
    }

    if (error) {
      return "Error: " + error;
    }

    var pageUrlObj;

    if (pagesUrls) {
      pageUrlObj = pagesUrls.find(function (u) {
        return u.page === pageId || u.url === url;
      });
    }

    if (isExternalLink(url) || args.forceHtml || urlNewWindow) {
      return _react.default.createElement("a", __assign({
        href: isExternalLink(url) && url || pageUrlObj && pageUrlObj.url || '/404'
      }, args, {
        target: urlNewWindow ? '_blank' : ''
      }), children);
    } else {
      return _react.default.createElement(_reactRouterDom.Link, __assign({
        to: pageUrlObj ? pageUrlObj.url : '/404'
      }, args), children);
    }
  });
};

var _default = ComposerLink;
exports.default = _default;
var templateObject_1;