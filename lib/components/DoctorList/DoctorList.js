"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../partials/Button"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _List = _interopRequireDefault(require("../List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var DoctorList =
/** @class */
function (_super) {
  __extends(DoctorList, _super);

  function DoctorList(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      showMore: false
    };
    return _this;
  }

  DoctorList.prototype.render = function () {
    var _this = this;

    var _a = this.props.data,
        doctors = _a.doctors,
        title = _a.title;
    return React.createElement(_List.default, {
      data: doctors
    }, function (_a) {
      var data = _a.data;
      var otherDoctors = [];
      var sourcedDoctors = data;

      if (sourcedDoctors.length > 4) {
        otherDoctors = sourcedDoctors.slice(4, sourcedDoctors.length);
      }

      return React.createElement("section", {
        className: 'doctorList'
      }, React.createElement("div", {
        className: 'container'
      }, title && React.createElement("h3", null, title), React.createElement("div", {
        className: "doctorList__wrapper"
      }, sourcedDoctors && sourcedDoctors.slice(0, 4).map(function (doctor, index) {
        return React.createElement("div", {
          className: 'doctorList__item',
          key: index
        }, React.createElement("div", {
          className: 'doctorList__item__img'
        }, doctor.image && doctor.image.filename && React.createElement(_Media.default, {
          data: doctor.image,
          type: "image"
        }) || React.createElement("img", {
          className: "avatarImg",
          src: '../../../assets/medicon/images/doctorIcon.svg',
          alt: "Medicon Doctor Icon"
        })), React.createElement("div", {
          className: 'doctorList__item__info'
        }, React.createElement("h3", null, doctor.name), React.createElement("p", null, doctor.field), React.createElement(_Link.default, {
          url: doctor.clinicUrl,
          className: 'doctorList__item__info__link'
        }, doctor.clinicName), React.createElement(_Button.default, {
          classes: "btn--blueBorder btn--small",
          url: doctor.doctorUrl
        }, "vice info")));
      })), _this.state.showMore ? React.createElement("div", {
        className: "doctorList__wrapper"
      }, otherDoctors && otherDoctors.map(function (doc, i) {
        return React.createElement("div", {
          className: 'doctorList__item',
          key: i
        }, React.createElement("div", {
          className: 'doctorList__item__img'
        }, doc.image && doc.image.filename && React.createElement(_Media.default, {
          data: doc.image,
          type: "image"
        }) || React.createElement("img", {
          className: "avatarImg",
          src: '../../../assets/medicon/images/doctorIcon.svg',
          alt: "Medicon Doctor Icon"
        })), React.createElement("div", {
          className: 'doctorList__item__info'
        }, React.createElement("h3", null, doc.name), React.createElement("p", null, doc.field), React.createElement(_Link.default, {
          url: doc.clinicUrl,
          className: 'doctorList__item__info__link'
        }, doc.clinicName), React.createElement(_Button.default, {
          classes: "btn--blueBorder btn--small",
          url: doc.doctorUrl
        }, "vice info")));
      })) : '', otherDoctors.length >= 1 ? React.createElement("div", {
        className: "doctorList__btnHolder"
      }, React.createElement("button", {
        onClick: function onClick() {
          return _this.setState({
            showMore: !_this.state.showMore
          });
        },
        className: 'btn btn--blueBkg'
      }, "zobrazit ", _this.state.showMore ? "m\xE9n\u011B \u2BC5" : "vice \u2BC6")) : ''));
    });
  };

  return DoctorList;
}(React.Component);

var _default = DoctorList;
exports.default = _default;