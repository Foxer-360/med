"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _DoctorSchedule = _interopRequireDefault(require("./components/DoctorSchedule/DoctorSchedule"));

var _TextBlock = _interopRequireDefault(require("../TextBlock"));

var _Button = _interopRequireDefault(require("../../partials/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var DoctorCard = function DoctorCard(props) {
  return React.createElement("section", {
    className: 'doctorCard'
  }, React.createElement("div", {
    className: "container"
  }, React.createElement("div", {
    className: 'doctorCard__main'
  }, React.createElement("img", {
    src: "/assets/medicon/images/doctorIcon.svg"
  }), React.createElement("h3", {
    className: 'gradientHeading'
  }, "mudr. jana pavluchov\xE1"), React.createElement("p", {
    className: 'doctorCard__main__spe'
  }, "Alergologie a imunologie"), React.createElement("p", {
    className: 'doctorCard__main__sis'
  }, "Sestra: ", React.createElement("strong", null, "Ji\u0159ina Slez\xE1kov\xE1")))), React.createElement("div", {
    className: 'fullwidthContainer'
  }, React.createElement("div", {
    className: "doctorCard__info"
  }, React.createElement("div", {
    className: 'container'
  }, React.createElement("div", {
    className: "doctorCard__info__wrapper"
  }, React.createElement("div", {
    className: 'doctorCard__info__item'
  }, React.createElement("img", {
    src: "/assets/medicon/images/stethoscopeIcon.svg"
  }), React.createElement("p", null, "Alergologie", React.createElement("br", null), "Imunologie")), React.createElement("div", {
    className: 'doctorCard__info__item'
  }, React.createElement("img", {
    src: "/assets/medicon/images/phoneIcon.svg"
  }), React.createElement("p", null, "+420 261 003 404")), React.createElement("div", {
    className: 'doctorCard__info__item'
  }, React.createElement("img", {
    src: "/assets/medicon/images/geoIcon.svg"
  }), React.createElement("div", null, React.createElement("p", null, React.createElement("strong", null, "Poliklinika Bud\u011Bjovick\xE1 "), "\u010Cerven\xE1 budova 9. patro"), React.createElement("p", null, "Antala Sta\u0161ka 1670/80, 140 00 Praha 4"))))))), React.createElement("div", {
    className: 'container'
  }, React.createElement("div", {
    className: 'doctorCard__timePlace'
  }, React.createElement("div", null, React.createElement(_DoctorSchedule.default, null)), React.createElement("div", null, React.createElement("img", {
    src: "/assets/medicon/images/floorMap.png",
    alt: ""
  }))), React.createElement("div", {
    className: 'doctorCard__btnHolder'
  }, React.createElement(_Button.default, {
    classes: 'btn--blueBkg',
    noArrow: true
  }, "objednat")), React.createElement("div", {
    className: 'doctorCard__divider'
  }, React.createElement("div", {
    className: "dividerCircles"
  }, React.createElement("div", null)))), React.createElement(_TextBlock.default, {
    data: {
      title: 'Poskytovaná péče'
    }
  }), React.createElement(_TextBlock.default, {
    data: {
      title: 'typy provadenych vysetreni'
    }
  }));
};

var _default = DoctorCard;
exports.default = _default;