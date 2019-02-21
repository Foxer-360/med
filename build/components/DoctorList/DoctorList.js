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
import Button from '../../partials/Button';
import Media from '@source/partials/Media';
import Link from '@source/partials/Link';
import List from '../List';
var DoctorList = /** @class */ (function (_super) {
    __extends(DoctorList, _super);
    function DoctorList(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showMore: false,
        };
        return _this;
    }
    DoctorList.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, doctors = _a.doctors, title = _a.title;
        return (React.createElement(List, { data: doctors }, function (_a) {
            var data = _a.data;
            var otherDoctors = [];
            var sourcedDoctors = data;
            if (sourcedDoctors.length > 4) {
                otherDoctors = sourcedDoctors.slice(4, sourcedDoctors.length);
            }
            return (React.createElement("section", { className: 'doctorList' },
                React.createElement("div", { className: 'container' },
                    title && React.createElement("h3", null, title),
                    React.createElement("div", { className: "doctorList__wrapper" }, sourcedDoctors &&
                        sourcedDoctors.slice(0, 4).map(function (doctor, index) {
                            return (React.createElement("div", { className: 'doctorList__item', key: index },
                                React.createElement("div", { className: 'doctorList__item__img' }, (doctor.image && doctor.image.filename && React.createElement(Media, { data: doctor.image, type: "image" })) || (React.createElement("img", { className: "avatarImg", src: '../../../assets/medicon/images/doctorIcon.svg', alt: "Medicon Doctor Icon" }))),
                                React.createElement("div", { className: 'doctorList__item__info' },
                                    React.createElement("h3", null, doctor.name),
                                    React.createElement("p", null, doctor.field),
                                    React.createElement(Link, __assign({}, doctor.clinicUrl, { className: 'doctorList__item__info__link' }), doctor.clinicName),
                                    React.createElement(Button, { classes: "btn--blueBorder btn--small", url: doctor.doctorUrl }, "vice info"))));
                        })),
                    _this.state.showMore ? (React.createElement("div", { className: "doctorList__wrapper" }, otherDoctors &&
                        otherDoctors.map(function (doc, i) {
                            return (React.createElement("div", { className: 'doctorList__item', key: i },
                                React.createElement("div", { className: 'doctorList__item__img' }, (doc.image && doc.image.filename && React.createElement(Media, { data: doc.image, type: "image" })) || (React.createElement("img", { className: "avatarImg", src: '../../../assets/medicon/images/doctorIcon.svg', alt: "Medicon Doctor Icon" }))),
                                React.createElement("div", { className: 'doctorList__item__info' },
                                    React.createElement("h3", null, doc.name),
                                    React.createElement("p", null, doc.field),
                                    React.createElement(Link, __assign({}, doc.clinicUrl, { className: 'doctorList__item__info__link' }), doc.clinicName),
                                    React.createElement(Button, { classes: "btn--blueBorder btn--small", url: doc.doctorUrl }, "vice info"))));
                        }))) : (''),
                    otherDoctors.length >= 1 ? (React.createElement("div", { className: "doctorList__btnHolder" },
                        React.createElement("button", { onClick: function () { return _this.setState({ showMore: !_this.state.showMore }); }, className: 'btn btn--blueBkg' },
                            "zobrazit ",
                            _this.state.showMore ? "m\u00E9n\u011B \u2BC5" : "vice \u2BC6"))) : (''))));
        }));
    };
    return DoctorList;
}(React.Component));
export default DoctorList;
//# sourceMappingURL=DoctorList.js.map