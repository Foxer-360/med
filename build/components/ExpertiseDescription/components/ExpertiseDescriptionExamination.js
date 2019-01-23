import * as React from 'react';
var ExpertiseDescriptionExamination = function (props) {
    var title = props.title, examinations = props.examinations;
    var lastLong = {};
    return (React.createElement("div", { className: 'examination' },
        title && React.createElement("h3", null, title),
        React.createElement("div", { className: 'grid examination__blocks hCenterBlock' }, examinations && examinations.map(function (examination, i) {
            if (examinations.length % 2 !== 0) {
                lastLong = {
                    gridColumnStart: 'span 2'
                };
            }
            return (React.createElement("a", { style: examinations.length - 1 === i ? lastLong : null, href: examination.url, className: 'examination__block', key: i },
                React.createElement("p", null, examination.title)));
        }))));
};
export default ExpertiseDescriptionExamination;
//# sourceMappingURL=ExpertiseDescriptionExamination.js.map