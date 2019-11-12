"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_masonry_css_1 = require("react-masonry-css");
var ReactMarkdown = require("react-markdown/with-html");
var List_1 = require("../List");
var searchBar_1 = require("./components/searchBar");
var blogCard_1 = require("./components/blogCard");
var Blog = /** @class */ (function (_super) {
    __extends(Blog, _super);
    function Blog(props) {
        var _this = _super.call(this, props) || this;
        _this.onSearchChange = function (e) {
            _this.setState({ searchQuery: e.target.value });
        };
        _this.state = {
            numberOfPage: 1,
            searchQuery: ''
        };
        return _this;
    }
    Blog.prototype.renderBlogCards = function (items) {
        if (!items) {
            return [];
        }
        var _a = this.props.data, specialText = _a.specialText, specialTitle = _a.specialTitle;
        var resultBlogCards = [];
        for (var i = 0; i < items.length; i++) {
            if (i === 1 && specialText && specialTitle) {
                resultBlogCards.push(React.createElement("div", { key: 'special', className: 'blogCard blogCard--special' },
                    React.createElement("h3", null, specialTitle),
                    React.createElement(ReactMarkdown, { skipHtml: false, escapeHtml: false, source: specialText, renderers: {
                            // tslint:disable-next-line:no-any
                            paragraph: function (rProps) { return React.createElement("p", null, rProps.children); },
                        } })));
            }
            resultBlogCards.push((React.createElement(blogCard_1.BlogCard, { key: i, url: items[i].url, text: items[i].text, img: items[i].image, title: items[i].title, color: items[i].color
                    && items[i].color.trim().length > 0
                    ? items[i].color : '#386fa2' })));
        }
        return resultBlogCards;
    };
    Blog.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, title = _a.title, articles = _a.articles, displaySearch = _a.displaySearch;
        return (React.createElement("section", { className: 'blog' },
            React.createElement("div", { className: "container" },
                title && React.createElement("h1", { style: displaySearch ? { paddingBottom: 0 } : {} }, title),
                displaySearch &&
                    React.createElement(searchBar_1.default, { barColor: 'gray', placeholder: 'Hledat', value: this.state.searchQuery, onChange: this.onSearchChange }),
                React.createElement(List_1.default, { data: articles, searchedText: this.state.searchQuery }, function (_a) {
                    var getPage = _a.getPage;
                    var _b = getPage(_this.state.numberOfPage, 'infinite', 6), items = _b.items, lastPage = _b.lastPage;
                    if (items && items.length <= 0) {
                        return React.createElement("div", { className: 'searchBarResults__noResults' }, "Bohu\u017Eel nebyl nalezen \u017E\u00E1dn\u00FD \u010Dl\u00E1nek.");
                    }
                    return (React.createElement(React.Fragment, null,
                        React.createElement(react_masonry_css_1.default, { breakpointCols: { default: 3, 4000: 3, 800: 2, 500: 1 }, className: "my-masonry-grid", columnClassName: "my-masonry-grid_column" }, _this.renderBlogCards(items)),
                        _this.state.numberOfPage < lastPage &&
                            React.createElement("button", { style: { margin: '0 auto' }, className: 'btn btn--blueBkg btn--fullWidth', onClick: function () { return _this.setState({ numberOfPage: _this.state.numberOfPage + 1 }); } }, "Na\u010D\u00EDst dal\u0161\u00ED")));
                }))));
    };
    return Blog;
}(React.Component));
exports.default = Blog;
//# sourceMappingURL=Blog.js.map