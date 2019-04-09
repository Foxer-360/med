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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import Link from '@source/partials/Link';
import Examination from './components/Examination';
// tslint:disable-next-line:max-line-length
var ExpertiseDescriptionExamination = /** @class */ (function (_super) {
    __extends(ExpertiseDescriptionExamination, _super);
    function ExpertiseDescriptionExamination(props) {
        return _super.call(this, props) || this;
    }
    ExpertiseDescriptionExamination.prototype.render = function () {
        var _a = this.props, title = _a.title, examinations = _a.examinations;
        return (React.createElement("div", { className: 'examination' },
            title && React.createElement("h3", { style: { paddingTop: 45 } }, title),
            React.createElement("div", { className: 'examination__list grid' }, examinations && examinations.map(function (examination, i) {
                var lastLong = examinations.length % 2 !== 0 && examinations.length - 1 === i;
                return examination.url ? (React.createElement(Link, __assign({ key: i }, examination.url, { style: examination.url ? { fontWeight: 500 } : { cursor: 'default' }, className: "examination__list__item " + (lastLong ? 'examination__list__item--last-long' : '') }), examination.title && examination.title)) : (React.createElement(Examination, { key: i, description: examination.description, title: examination.title, lastLong: lastLong }));
            }))));
    };
    return ExpertiseDescriptionExamination;
}(React.Component));
export default ExpertiseDescriptionExamination;
//# sourceMappingURL=ExpertiseDescriptionExamination.js.map