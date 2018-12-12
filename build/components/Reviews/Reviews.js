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
import * as React from 'react';
import ReviewElement from './components/ReviewElement';
var data = {
    items: [
        {
            img: '/assets/medicon/images/photo-1.jpg',
            cite: '„Jedna z nejlepších poliklinik v Praze, od recepčních po lékaře.“',
            starCount: 5,
        },
        {
            img: '/assets/medicon/images/photo-2.jpg',
            cite: '„Jedna z nejlepších poliklinik v Praze, od recepčních po lékaře.“',
            starCount: 5,
        },
        {
            img: '/assets/medicon/images/photo-3.jpg',
            cite: '„Jedna z nejlepších poliklinik v Praze, od recepčních po lékaře.“',
            starCount: 5,
        },
    ],
};
var Reviews = /** @class */ (function (_super) {
    __extends(Reviews, _super);
    function Reviews() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Reviews.prototype.render = function () {
        return (React.createElement("section", { className: "reviews" },
            React.createElement("h3", null, "\u0159ekli o n\u00E1s"),
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: "grid reviews__list" }, data.items.map(function (item, index) { return (React.createElement(ReviewElement, { key: index, img: item.img, cite: item.cite, starCount: item.starCount })); })))));
    };
    return Reviews;
}(React.Component));
export default Reviews;
//# sourceMappingURL=Reviews.js.map