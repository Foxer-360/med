"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var List_1 = require("../List");
var DividerCircles_1 = require("../DividerCircles");
var ExpertiseDescriptionCare_1 = require("./components/ExpertiseDescriptionCare");
var ExpertiseDescriptionBoxes_1 = require("./components/ExpertiseDescriptionBoxes");
var ExpertiseDescriptionExamination_1 = require("./components/ExpertiseDescriptionExamination");
var Description = function (props) {
    var _a = props.data, titleCare = _a.titleCare, firstText = _a.firstText, secondText = _a.secondText, hideBtn = _a.hideBtn, showHiddenText = _a.showHiddenText, titleExamination = _a.titleExamination, examinations = _a.examinations, boxes = _a.boxes;
    return (React.createElement("div", { className: 'container' },
        React.createElement("section", { className: 'expertiseDescription' },
            React.createElement(ExpertiseDescriptionCare_1.default, { title: titleCare, firstText: firstText, secondText: secondText, hideBtn: hideBtn, showHiddenText: showHiddenText }),
            React.createElement(List_1.default, { data: examinations }, function (_a) {
                var data = _a.data;
                return data &&
                    React.createElement(ExpertiseDescriptionExamination_1.default, { title: titleExamination, examinations: data });
            }),
            boxes && boxes.length > 0 && React.createElement(DividerCircles_1.default, null),
            React.createElement(List_1.default, { data: boxes }, function (_a) {
                var data = _a.data;
                return data &&
                    React.createElement(ExpertiseDescriptionBoxes_1.default, { boxes: data });
            }))));
};
exports.default = Description;
//# sourceMappingURL=ExpertiseDescription.js.map