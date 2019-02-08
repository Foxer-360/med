import * as React from 'react';
import Link from '@source/partials/Link';
var ExpertiseDescriptionExamination = function (props) {
    var title = props.title, examinations = props.examinations;
    var lastLong = {};
    return (React.createElement("div", { className: 'examination' },
        React.createElement("div", { className: "container" },
            title && React.createElement("h3", null, title),
            React.createElement("div", { className: 'grid examination__blocks' }, examinations && examinations.map(function (examination, i) {
                if (examinations.length % 2 !== 0) {
                    lastLong = {
                        gridColumnStart: 'span 2'
                    };
                }
                return (React.createElement(Link, { key: i, className: 'examination__block', url: examination.url && examination.url.url, style: examinations.length - 1 === i ? lastLong : null }, examination.title && React.createElement("p", null, examination.title)));
            })))));
};
export default ExpertiseDescriptionExamination;
//# sourceMappingURL=ExpertiseDescriptionExamination.js.map