var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import Masonry from 'react-masonry-css';
import { BlogCard } from './components/blogCard';
var data = {
    items: [
        {
            title: 'Těhotenství',
            text: 'Epilepsie při vhodné léčbě těhotenství nebrání',
            img: '/assets/medicon/images/blog.png',
            color: '#386fa2',
        },
        {
            title: 'Hledáme',
            text: 'Pro věrné zákazníky našich lékáren máme věrnostní program',
            img: '/assets/medicon/images/blog.png',
            color: '#d09d56',
            special: true,
        },
        {
            title: 'Věrnostní karta',
            text: 'Pro věrné zákazníky našich lékáren máme věrnostní program',
            img: '/assets/medicon/images/blog.png',
            color: '#d09d56',
        },
        {
            title: 'MAMMACENTRA',
            text: 'V našich čtyřech MAMMACENTRECH zdravotnický personál každý rok vyšetří na 50 000 žen.',
            img: '/assets/medicon/images/blog.png',
            color: '#4c959f',
        },
        { title: 'Home care', text: 'Pomáháme při domácí pěči', img: '/assets/medicon/images/blog.png', color: '#d3969f' },
        {
            title: 'in care',
            text: 'Nadstandartní zdravotní péče pro firmy i jednotlivce',
            img: '/assets/medicon/images/blog.png',
            color: '#386fa2',
        },
    ],
};
var Blog = /** @class */ (function (_super) {
    __extends(Blog, _super);
    function Blog(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    Blog.prototype.render = function () {
        return (React.createElement("section", { className: 'blog' },
            React.createElement("div", { className: "container" },
                React.createElement("h1", null, "aktuality a informace"),
                React.createElement(Masonry, { breakpointCols: { default: 3, 4000: 3, 800: 2, 400: 1 }, className: "my-masonry-grid", columnClassName: "my-masonry-grid_column" }, data.items.map(function (item, index) { return (React.createElement(BlogCard, { title: item.title, text: item.text, key: index, color: item.color, img: item.img, special: item.special })); })),
                React.createElement("div", { className: 'blog__blur' },
                    React.createElement("div", null)),
                React.createElement("div", { className: "blog__btnHolder" },
                    React.createElement("button", { className: 'btn btnFirst' }, "Na\u010D\u00EDst dal\u0161\u00ED")))));
    };
    return Blog;
}(React.Component));
export default Blog;
//# sourceMappingURL=Blog.js.map