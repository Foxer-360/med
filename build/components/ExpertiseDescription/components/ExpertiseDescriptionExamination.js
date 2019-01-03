import * as React from 'react';
var ExpertiseDescriptionExamination = function (props) {
    var title = props.title, examinations = props.examinations;
    return (React.createElement("div", { className: 'examination' },
        title && React.createElement("h3", null, title),
        React.createElement("div", { className: 'grid examination__blocks hCenterBlock' }, examinations && examinations.map(function (examination, i) { return (React.createElement("a", { href: examination.url, className: 'examination__block', key: i },
            React.createElement("p", null, examination.title))); }))));
};
export default ExpertiseDescriptionExamination;
//# sourceMappingURL=ExpertiseDescriptionExamination.js.map