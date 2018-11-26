"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _DoctorSchedule = _interopRequireDefault(require("./components/DoctorSchedule/DoctorSchedule"));

var _TextBlock = _interopRequireDefault(require("../TextBlock"));

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
    src: "/assets/medicon/images/lekari.png"
  }), React.createElement("h3", null, "mudr. jana pavluchov\xE1"), React.createElement("p", {
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
    className: 'doctorCard__info__item',
    style: {
      backgroundImage: 'url(/assets/medicon/images/phone.png)'
    }
  }, "Alergologie Imunologie"), React.createElement("div", {
    className: 'doctorCard__info__item',
    style: {
      backgroundImage: 'url(/assets/medicon/images/phone.png)'
    }
  }, "+420 261 003 404"), React.createElement("div", {
    className: 'doctorCard__info__item',
    style: {
      backgroundImage: 'url(/assets/medicon/images/phone.png)'
    }
  }, React.createElement("p", null, "Poliklinika Bud\u011Bjovick\xE1"), React.createElement("p", null, "Antala Sta\u0161ka 1670/80, 140 00 Praha 4")))))), React.createElement("div", {
    className: 'container'
  }, React.createElement("div", {
    className: 'doctorCard__timePlace'
  }, React.createElement("div", null, React.createElement(_DoctorSchedule.default, null)), React.createElement("div", null, React.createElement("img", {
    src: "/assets/medicon/images/floorMap.png",
    alt: ""
  }))), React.createElement("div", {
    className: 'doctorCard__btnHolder'
  }, React.createElement("button", {
    className: 'btn  btnFirst'
  }, "objednat")), React.createElement("div", {
    className: 'doctorCard__divider'
  }, React.createElement("div", {
    className: "dividerCircles"
  }, React.createElement("div", null)))), React.createElement(_TextBlock.default, null), React.createElement(_TextBlock.default, null));
};

var _default = DoctorCard;
exports.default = _default;