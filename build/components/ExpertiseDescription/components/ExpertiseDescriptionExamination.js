"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Examination_1 = require("./components/Examination");
// tslint:disable-next-line:max-line-length
var ExpertiseDescriptionExamination = /** @class */ (function (_super) {
    __extends(ExpertiseDescriptionExamination, _super);
    function ExpertiseDescriptionExamination(props) {
        return _super.call(this, props) || this;
    }
    ExpertiseDescriptionExamination.prototype.render = function () {
        var _a = this.props, title = _a.title, examinations = _a.examinations;
        return (React.createElement("div", { className: 'examination' },
            title && React.createElement("h3", null, title),
            examinations && examinations.length > 0 && React.createElement("div", { className: 'examination__list row' }, examinations.map(function (examination, i) {
                return (React.createElement("div", { key: i, className: "col-12 " + (i === 2 ? 'col-md-12' : 'col-md-6') },
                    React.createElement(Examination_1.default, { url: examination.url, title: examination.title, description: examination.description })));
            }))));
    };
    return ExpertiseDescriptionExamination;
}(React.Component));
exports.default = ExpertiseDescriptionExamination;
//# sourceMappingURL=ExpertiseDescriptionExamination.js.map