"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../partials/Button"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var DoctorList = function DoctorList(props) {
  var _a = props.data,
      doctors = _a.doctors,
      title = _a.title;
  return React.createElement("section", {
    className: 'doctorList'
  }, React.createElement("div", {
    className: 'container'
  }, title && React.createElement("h3", null, title), React.createElement("div", {
    className: "doctorList__wrapper"
  }, doctors && doctors.map(function (doctor, index) {
    return React.createElement("div", {
      className: 'doctorList__item',
      key: index
    }, React.createElement("div", {
      className: 'doctorList__item__img'
    }, doctor.image && doctor.image.filename && React.createElement(_Media.default, {
      data: doctor.image,
      type: "image"
    }) || React.createElement("img", {
      className: "avatar",
      src: '../../../assets/medicon/images/doctorIcon.svg',
      alt: "Medicon Doctor Icon"
    })), React.createElement("div", {
      className: 'doctorList__item__info'
    }, React.createElement("h3", null, doctor.name), React.createElement("p", null, doctor.field), React.createElement("a", {
      className: 'doctorList__item__info__link',
      href: ""
    }, doctor.clinicName), React.createElement(_Button.default, {
      classes: "btn--blueBorder btn--small"
    }, "vice info")));
  })), React.createElement("div", {
    className: "doctorList__btnHolder"
  }, React.createElement(_Button.default, {
    classes: "btn--blueBkg btn--down"
  }, "zobrazit vice"))));
};

var _default = DoctorList;
exports.default = _default;