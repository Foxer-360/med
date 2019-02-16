import * as React from 'react';
import DividerCircles from '../DividerCircles';
import ExpertiseDescriptionCare from './components/ExpertiseDescriptionCare';
import ExpertiseDescriptionBoxes from './components/ExpertiseDescriptionBoxes';
import List from '../List';
import ExpertiseDescriptionExamination from './components/ExpertiseDescriptionExamination';
var Description = function (props) {
    var _a = props.data, titleCare = _a.titleCare, firstText = _a.firstText, secondText = _a.secondText, titleExamination = _a.titleExamination, examinations = _a.examinations, boxes = _a.boxes;
    return (React.createElement("div", { className: 'container' },
        React.createElement("section", { className: 'expertiseDescription' },
            React.createElement(ExpertiseDescriptionCare, { title: titleCare, firstText: firstText, secondText: secondText }),
            React.createElement(List, { data: examinations }, function (_a) {
                var data = _a.data;
                return data &&
                    React.createElement(ExpertiseDescriptionExamination, { title: titleExamination, examinations: data });
            }),
            React.createElement(DividerCircles, null),
            React.createElement(List, { data: boxes }, function (_a) {
                var data = _a.data;
                return data &&
                    React.createElement(ExpertiseDescriptionBoxes, { boxes: data });
            }))));
};
export default Description;
//# sourceMappingURL=ExpertiseDescription.js.map