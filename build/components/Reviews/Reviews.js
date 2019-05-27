"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var List_1 = require("../List");
var ReviewElement_1 = require("./components/ReviewElement");
var Reviews = function (props) {
    var _a = props.data, title = _a.title, reviews = _a.reviews;
    return (React.createElement(List_1.default, { data: reviews }, function (_a) {
        var data = _a.data;
        return (React.createElement("section", { className: 'reviews' },
            React.createElement("div", { className: 'container' },
                title && React.createElement("h3", null, title),
                React.createElement("div", { className: 'reviews__list row' }, data && data.map(function (review, i) { return (React.createElement(ReviewElement_1.default, { key: i, image: review.image, cite: review.cite, starCount: review.starCount })); })))));
    }));
};
exports.default = Reviews;
//# sourceMappingURL=Reviews.js.map