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

var PolyclinicsList =
/** @class */
function (_super) {
  __extends(PolyclinicsList, _super);

  function PolyclinicsList(props) {
    var _this = _super.call(this, props) || this;

    _this.filterServices = function (services, index) {
      services = services.split('\n').filter(function (service, i) {
        return i <= 8;
      }).join('\n');
      return services;
    };

    _this.toggleDisplayServices = function (index) {
      _this.setState({
        displayAllServices: index === null ? false : true,
        activeCard: index
      });
    };

    _this.state = {
      displayAllServices: false,
      activeCard: null
    };
    return _this;
  }

  PolyclinicsList.prototype.render = function () {
    var _this = this;

    var clinics = this.props.data.clinics;
    return React.createElement("section", {
      className: "polyclinicsList"
    }, React.createElement(_List.default, {
      data: clinics
    }, function (_a) {
      var data = _a.data;
      return data && data.map(function (clinic, index) {
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
        }), React.createElement("p", null, clinic.address && clinic.address, " ", React.createElement("br", null), clinic.district && clinic.district)), React.createElement("div", {
          className: "pcitem__info__details__item"
        }, React.createElement("img", {
          src: "../../../assets/medicon/images/phoneIcon.svg",
          alt: "Medicon Phone Icon"
        }), clinic.phone && React.createElement("p", null, clinic.phone)), React.createElement("div", {
          className: "pcitem__info__details__item"
        }, clinic.transportImage && React.createElement(_Media.default, {
          data: clinic.transportImage,
          type: "image"
        }), !clinic.transportImage && React.createElement("img", {
          src: "../../../assets/medicon/images/metro2.png",
          alt: ""
        }), React.createElement("p", null, clinic.transport && clinic.transport, React.createElement("br", null), clinic.station && clinic.station))), React.createElement("div", {
          className: 'pcitem__info__list'
        }, React.createElement(_reactMarkdown.default, {
          source: _this.state.displayAllServices && index === _this.state.activeCard ? clinic.services : _this.filterServices(clinic.services, index),
          renderers: {
            paragraph: function paragraph(rProps) {
              return React.createElement("ul", null, rProps.children);
            }
          }
        }), React.createElement("div", {
          onClick: function onClick() {
            return _this.toggleDisplayServices(index === _this.state.activeCard ? null : index);
          }
        }, _this.state.displayAllServices && index === _this.state.activeCard ? 'skrýt' : 'Další odbornosti', ' ', React.createElement("span", {
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
          classes: "btn btn--blueBorder",
          url: clinic.url && clinic.url
        }, "vice info"))))))));
      });
    }));
  };

  return PolyclinicsList;
}(React.Component);

var _default = PolyclinicsList;
exports.default = _default;