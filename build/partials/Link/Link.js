var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Loader from '../../partials/Loader';
var isExternalLink = function (url) {
    var pattern = /^https?|^www/i;
    return pattern.test(url);
};
var GET_PAGES_URLS = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query pagesUrls($languageCode: String) {\n    pagesUrls(where: { languageCode: $languageCode }) {\n      id\n      page\n      url\n      name\n      description\n    }  \n  }\n"], ["\n  query pagesUrls($languageCode: String) {\n    pagesUrls(where: { languageCode: $languageCode }) {\n      id\n      page\n      url\n      name\n      description\n    }  \n  }\n"])));
var ComposerLink = function (props) {
    var children = props.children, urlNewWindow = props.urlNewWindow, url = props.url, pageId = props.pageId, languageCode = props.languageCode, args = __rest(props, ["children", "urlNewWindow", "url", "pageId", "languageCode"]);
    return (React.createElement(Query, { query: GET_PAGES_URLS, variables: { languageCode: languageCode } }, function (_a) {
        var pagesUrls = _a.data.pagesUrls, loading = _a.loading, error = _a.error;
        if (loading) {
            return React.createElement(Loader, null);
        }
        if (error) {
            return "Error: " + error;
        }
        var pageUrlObj;
        if (pagesUrls) {
            pageUrlObj = pagesUrls.find(function (u) { return u.page === pageId || u.url === url; });
        }
        if (isExternalLink(url) || args.forceHtml || urlNewWindow) {
            return (React.createElement("a", __assign({ href: (isExternalLink(url) && url) || (pageUrlObj && pageUrlObj.url) || '/404' }, args, { target: urlNewWindow ? '_blank' : '' }), children));
        }
        else {
            return (React.createElement(Link, __assign({ to: pageUrlObj ? pageUrlObj.url : '/404' }, args), children));
        }
    }));
};
export default ComposerLink;
var templateObject_1;
//# sourceMappingURL=Link.js.map