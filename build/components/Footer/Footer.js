var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import * as React from 'react';
import Social from './components/Social';
import HelpPopup from './components/HelpPopup';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { adopt } from 'react-adopt';
import { Link as DomLink } from 'react-router-dom';
var GET_CONTEXT = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client\n  }\n"], ["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client\n  }\n"])));
var GET_PAGES_URLS = gql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  query pagesUrls($language: ID!) {\n    pagesUrls(where: { language: $language }) {\n      id\n      page\n      url\n      name\n      description\n    }\n  }\n"], ["\n  query pagesUrls($language: ID!) {\n    pagesUrls(where: { language: $language }) {\n      id\n      page\n      url\n      name\n      description\n    }\n  }\n"])));
var ComposedQuery = adopt({
    context: function (_a) {
        var render = _a.render;
        return React.createElement(Query, { query: GET_CONTEXT }, function (_a) {
            var data = _a.data;
            return render(data);
        });
    },
    getPagesUrls: function (_a) {
        var render = _a.render, languageData = _a.context.languageData;
        if (!languageData) {
            return render({});
        }
        return (React.createElement(Query, { query: GET_PAGES_URLS, variables: { language: languageData.id } }, function (data) {
            return render(data);
        }));
    },
});
var Footer = /** @class */ (function (_super) {
    __extends(Footer, _super);
    function Footer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Footer.prototype.render = function () {
        var _this = this;
        return (React.createElement(ComposedQuery, null, function (_a) {
            var _b = _a.getPagesUrls, loading = _b.loading, error = _b.error, data = _b.data, context = _a.context;
            if (!context.navigationsData || !context.languageData || !context.languagesData || !data || !data.pagesUrls) {
                return React.createElement("div", null, "Loading...");
            }
            if (error) {
                return "Error..." + error;
            }
            var navigations = context.navigationsData, languageCode = context.languageData.code;
            var transformedNavigations = _this.transformNavigationsIntoTree(navigations, data.pagesUrls);
            var footerFirstNav = 'footerFirst';
            var footerSecondNav = 'footerSecond';
            var footerThirdNav = 'footerThird';
            var footerFirstNavItems = transformedNavigations && transformedNavigations[footerFirstNav]
                ? transformedNavigations[footerFirstNav]
                : [];
            var footerSecondNavItems = transformedNavigations && transformedNavigations[footerSecondNav]
                ? transformedNavigations[footerSecondNav]
                : [];
            var footerThirdNavItems = transformedNavigations && transformedNavigations[footerThirdNav]
                ? transformedNavigations[footerThirdNav]
                : [];
            return (React.createElement("footer", { className: 'footer' },
                React.createElement(HelpPopup, null),
                React.createElement("div", { className: "container" },
                    React.createElement("div", { className: "flexRow flexAlign--space-between" },
                        React.createElement("ul", { className: 'footer__list' }, footerFirstNavItems &&
                            footerFirstNavItems.map(function (navItem, i) { return (React.createElement("li", { key: i },
                                React.createElement(DomLink, { to: navItem.url }, navItem.name))); })),
                        React.createElement("ul", { className: 'footer__list' }, footerSecondNavItems &&
                            footerSecondNavItems.map(function (navItem, i) { return (React.createElement("li", { key: i },
                                React.createElement(DomLink, { to: navItem.url }, navItem.name))); })),
                        React.createElement("ul", { className: 'footer__list' }, footerThirdNavItems &&
                            footerThirdNavItems.map(function (navItem, i) { return (React.createElement("li", { key: i },
                                React.createElement(DomLink, { to: navItem.url }, navItem.name))); })),
                        React.createElement(Social, null))),
                React.createElement("div", { className: "bottom" },
                    React.createElement("div", { className: "container" },
                        React.createElement("div", { className: "copyrights grid" },
                            React.createElement("p", null, "\u00A9 2018 - MEDICON a.s."),
                            React.createElement("a", { href: "#" },
                                React.createElement("p", null, "Prohl\u00E1\u0161en\u00ED o ochran\u011B osobn\u00EDch \u00FAdaj\u016F")))))));
        }));
    };
    Footer.prototype.transformNavigationsIntoTree = function (navigation, urls) {
        var _this = this;
        var tree = {};
        if (!navigation || navigation.length < 1) {
            return null;
        }
        navigation.forEach(function (nav) {
            tree[nav.name] = _this.buildNavTree(nav.nodes, null, urls);
        });
        return tree;
    };
    Footer.prototype.buildNavTree = function (nav, parent, urls) {
        var _this = this;
        var res = [];
        nav.forEach(function (node) {
            if (node.parent === parent) {
                var url = urls.find(function (u) { return u.page === node.page; });
                var item = __assign({}, node, url);
                if (node.page) {
                    var children = _this.buildNavTree(nav, node.page, urls);
                    if (children && children.length > 0) {
                        item.children = children;
                    }
                }
                if (node.title && node.link) {
                    item.url = node.link;
                }
                res.push(item);
            }
        });
        res.sort(function (a, b) { return a.order - b.order; });
        return res;
    };
    return Footer;
}(React.Component));
export default Footer;
var templateObject_1, templateObject_2;
//# sourceMappingURL=Footer.js.map