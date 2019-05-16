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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var List_1 = require("../List");
var Link_1 = require("@source/partials/Link");
var Button_1 = require("../../partials/Button");
var Media_1 = require("@source/partials/Media");
var DoctorList = /** @class */ (function (_super) {
    __extends(DoctorList, _super);
    function DoctorList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            numberOfPage: 1,
        };
        return _this;
    }
    DoctorList.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, doctors = _a.doctors, title = _a.title;
        return (React.createElement(List_1.default, { data: doctors }, function (_a) {
            var getPage = _a.getPage;
            var _b = getPage(_this.state.numberOfPage, 'infinite', 9), items = _b.items, lastPage = _b.lastPage;
            return (React.createElement("section", { className: 'doctorList' },
                React.createElement("div", { className: 'container' },
                    title && React.createElement("h3", null, title),
                    React.createElement("div", { className: "doctorList__wrapper" }, items &&
                        items.map(function (doctor, index) {
                            return (React.createElement("div", { className: 'doctorList__item', key: index },
                                React.createElement("div", { className: 'doctorList__item__img' }, (doctor.image && doctor.image.filename && React.createElement(Media_1.default, { data: doctor.image, type: "image" })) || (React.createElement("img", { className: "avatarImg", src: '../../../assets/medicon/images/doctorIcon.svg', alt: "Medicon Doctor Icon" }))),
                                React.createElement("div", { className: 'doctorList__item__info' },
                                    React.createElement("h3", null, doctor.name),
                                    React.createElement("p", null, doctor.field),
                                    React.createElement(Link_1.default, __assign({}, doctor.clinicUrl, { className: 'doctorList__item__info__link' }), doctor.clinicName),
                                    React.createElement(Button_1.default, { classes: "btn--blueBorder btn--small", url: doctor.doctorUrl }, "v\u00EDce informac\u00ED"))));
                        })),
                    _this.state.numberOfPage < lastPage && React.createElement("div", { className: "doctorList__btnHolder" },
                        React.createElement("button", { className: 'btn btn--blueBkg', onClick: function () { return _this.setState({ numberOfPage: lastPage }); } }, "zobrazit v\u00EDce")))));
        }));
    };
    return DoctorList;
}(React.Component));
exports.default = DoctorList;
//# sourceMappingURL=DoctorList.js.map