import * as React from 'react';
import ReviewElement from './components/ReviewElement';
var Reviews = function (props) {
    var _a = props.data, title = _a.title, reviews = _a.reviews;
    return (React.createElement("section", { className: "reviews" },
        title && React.createElement("h3", null, title),
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "grid reviews__list" }, reviews && reviews.map(function (review, index) { return (React.createElement(ReviewElement, { key: index, image: review.image, cite: review.cite, starCount: review.starCount })); })))));
};
export default Reviews;
//# sourceMappingURL=Reviews.js.map