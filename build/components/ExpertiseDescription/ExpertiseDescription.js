import * as React from 'react';
import DividerCircles from '../DividerCircles';
import ExpertiseDescriptionCare from './components/ExpertiseDescriptionCare';
import ExpertiseDescriptionExamination from './components/ExpertiseDescriptionExamination';
import ExpertiseDescriptionBoxes from './components/ExpertiseDescriptionBoxes';
var Description = function (props) {
    var _a = props.data, titleCare = _a.titleCare, firstText = _a.firstText, secondText = _a.secondText, titleExamination = _a.titleExamination, examinations = _a.examinations, boxes = _a.boxes;
    return (React.createElement("div", { className: 'container' },
        React.createElement("section", { className: 'expertiseDescription' },
            React.createElement(ExpertiseDescriptionCare, { title: titleCare, firstText: firstText, secondText: secondText }),
            React.createElement(ExpertiseDescriptionExamination, { title: titleExamination, examinations: examinations }),
            React.createElement(DividerCircles, null),
            React.createElement(ExpertiseDescriptionBoxes, { boxes: boxes }))));
};
export default Description;
//# sourceMappingURL=ExpertiseDescription.js.map