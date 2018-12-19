"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _title = _interopRequireDefault(require("./components/title"));

var _Button = _interopRequireDefault(require("../../partials/Button"));

var _Media = _interopRequireDefault(require("../../partials/Media"));

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var PolyclinicsList = function PolyclinicsList(props) {
  var clinics = props.data.clinics;
  return React.createElement("section", {
    className: "polyclinicsList"
  }, clinics && clinics.map(function (clinic, index) {
    return React.createElement("div", {
      className: 'pcitem',
      key: index
    }, React.createElement("div", {
      className: "fullWidthContainer"
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: "pcitem__wrapper"
    }, React.createElement("div", {
      className: 'pcitem__img'
    }, clinic.image && React.createElement(_Media.default, {
      data: clinic.image,
      type: "image"
    })), React.createElement("div", {
      className: 'pcitem__info'
    }, React.createElement(_title.default, {
      name: clinic.name
    }), React.createElement("div", {
      className: "pcitem__info__details"
    }, React.createElement("div", {
      className: "pcitem__info__details__item"
    }, React.createElement("img", {
      src: "../../../assets/medicon/images/geoIcon.svg",
      alt: "Medicon GeoLocation Icon"
    }), React.createElement("p", null, clinic.address, " ", React.createElement("br", null), clinic.district)), React.createElement("div", {
      className: "pcitem__info__details__item"
    }, React.createElement("img", {
      src: "../../../assets/medicon/images/phoneIcon.svg",
      alt: "Medicon Phone Icon"
    }), React.createElement("p", null, clinic.phone)), React.createElement("div", {
      className: "pcitem__info__details__item"
    }, clinic.transportImage && React.createElement(_Media.default, {
      data: clinic.transportImage,
      type: "image"
    }), !clinic.transportImage && React.createElement("img", {
      src: "../../../assets/medicon/images/metro2.png",
      alt: ""
    }), React.createElement("p", null, clinic.transport, React.createElement("br", null), clinic.station))), React.createElement("div", {
      className: 'pcitem__info__list'
    }, React.createElement(_reactMarkdown.default, {
      source: clinic.services,
      renderers: {
        paragraph: function paragraph(rProps) {
          return React.createElement("ul", null, rProps.children);
        }
      }
    }), React.createElement("div", null, "Dal\u0161\xED odbornosti ", React.createElement("span", {
      className: "arrow"
    }))), React.createElement("div", {
      className: 'pcitem__info__desc'
    }, React.createElement("div", {
      className: 'pcitem__info__desc__txt'
    }, React.createElement(_reactMarkdown.default, {
      source: clinic.description,
      renderers: {
        paragraph: function paragraph(rProps) {
          return React.createElement("p", null, rProps.children);
        }
      }
    })), React.createElement("div", {
      className: 'pcitem__info__btnHolder'
    }, React.createElement(_Button.default, {
      classes: "btn btn--blueBorder"
    }, "vice info"))))))));
  }));
};

var _default = PolyclinicsList;
exports.default = _default;