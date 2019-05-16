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
    Blog.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, title = _a.title, displaySearch = _a.displaySearch, articles = _a.articles;
        return (React.createElement("section", { className: 'blog' },
            React.createElement("div", { className: "container" },
                title && React.createElement("h1", { style: displaySearch ? { paddingBottom: 0 } : {} }, title),
                displaySearch &&
                    React.createElement(searchBar_1.default, { value: this.state.searchQuery, onChange: this.onSearchChange, placeholder: 'Search', barColor: 'gray' }),
                React.createElement(List_1.default, { data: articles, searchedText: this.state.searchQuery }, function (_a) {
                    var getPage = _a.getPage;
                    var _b = getPage(_this.state.numberOfPage, 'infinite', 6), items = _b.items, lastPage = _b.lastPage;
                    return (React.createElement(React.Fragment, null,
                        React.createElement(react_masonry_css_1.default, { breakpointCols: { default: 3, 4000: 3, 800: 2, 500: 1 }, className: "my-masonry-grid", columnClassName: "my-masonry-grid_column" }, items.map(function (article, i) { return (React.createElement(blogCard_1.BlogCard, { key: i, url: article.url, title: article.title, text: (article.text && article.text.length > 35
                                ? article.text.slice(0, 35)
                                : article.text) + " ..\n                        ", color: '#386fa2', img: article.image, special: false })); })),
                        _this.state.numberOfPage < lastPage &&
                            React.createElement("button", { style: { margin: '0 auto' }, className: 'btn btn--greenBkg btn--fullWidth', onClick: function () { return _this.setState({ numberOfPage: _this.state.numberOfPage + 1 }); } }, "Na\u010D\u00EDst dal\u0161\u00ED")));
                }))));
    };
    return Blog;
}(React.Component));
exports.default = Blog;
//# sourceMappingURL=Blog.js.map