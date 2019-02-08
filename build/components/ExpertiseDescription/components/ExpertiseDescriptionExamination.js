import * as React from 'react';
import Link from '@source/partials/Link';
var ExpertiseDescriptionExamination = function (props) {
    var title = props.title, examinations = props.examinations;
    return (React.createElement("div", { className: 'examination' },
        title && React.createElement("h3", { style: { paddingTop: 45 } }, title),
        React.createElement("div", { className: 'examination__list grid' }, examinations && examinations.map(function (examination, i) {
            var lastLong = examinations.length % 2 !== 0 && examinations.length - 1 === i;
            return (React.createElement(Link, { key: i, className: "examination__list__item " + (lastLong ? 'examination__list__item--last-long' : ''), url: examination.url && examination.url.url }, examination.title && examination.title));
        }))));
};
export default ExpertiseDescriptionExamination;
//# sourceMappingURL=ExpertiseDescriptionExamination.js.map