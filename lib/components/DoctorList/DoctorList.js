"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _List = _interopRequireDefault(require("../List"));

var _Link = _interopRequireDefault(require("../../../lib/partials/Link"));

var _Button = _interopRequireDefault(require("../../partials/Button"));

var _Media = _interopRequireDefault(require("../../../lib/partials/Media"));

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

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var DoctorList =
/** @class */
function (_super) {
  __extends(DoctorList, _super);

  function DoctorList(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      numberOfPage: 1
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
      var getPage = _a.getPage;

      var _b = getPage(_this.state.numberOfPage, 'infinite', 9),
          items = _b.items,
          lastPage = _b.lastPage;

      return React.createElement("section", {
        className: 'doctorList'
      }, React.createElement("div", {
        className: 'container'
      }, title && React.createElement("h3", null, title), React.createElement("div", {
        className: "doctorList__wrapper"
      }, items && items.map(function (doctor, index) {
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
        }, React.createElement("h3", null, doctor.name), React.createElement("p", null, doctor.field), React.createElement(_Link.default, __assign({}, doctor.clinicUrl, {
          className: 'doctorList__item__info__link'
        }), doctor.clinicName), React.createElement(_Button.default, {
          classes: "btn--blueBorder btn--small",
          url: doctor.doctorUrl
        }, "v\xEDce informac\xED")));
      })), _this.state.numberOfPage < lastPage && React.createElement("div", {
        className: "doctorList__btnHolder"
      }, React.createElement("button", {
        className: 'btn btn--blueBkg',
        onClick: function onClick() {
          return _this.setState({
            numberOfPage: lastPage
          });
        }
      }, "zobrazit v\xEDce"))));
    });
  };

  return DoctorList;
}(React.Component);

var _default = DoctorList;
exports.default = _default;