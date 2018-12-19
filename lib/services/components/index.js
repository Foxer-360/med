"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _lodash = require("lodash");

var _webfontloader = _interopRequireDefault(require("webfontloader"));

var _components = require("../../components");

var resources = _interopRequireWildcard(require("./resources"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

// WEB FONTS
_webfontloader.default.load({
  google: {
    families: ['Montserrat:400,500,600,700:latin-ext']
  }
});
/**
 *
 */


var ComponentsService =
/** @class */
function () {
  function ComponentsService() {
    this.Types = {
      DUMMY: 'Dummy',
      HERO: 'Hero',
      HEADER: 'Header',
      CROSSROADS: 'CrossRoads',
      BENEFITS: 'Benefits',
      HIGHLIGHT: 'Highlight',
      FOOTER: 'Footer',
      REVIEWS: 'Reviews',
      TEXTBLOCK: 'TextBlock',
      INFOBOXES: 'InfoBoxes',
      MAP: 'Map',
      DOCTORLIST: 'DoctorList',
      POLYCLINICSLIST: 'PolyclinicsList',
      EXPERTISELIST: 'ExpertiseList',
      INFORECTANGLES: 'InfoRectangles',
      POLYCLINICINFO: 'PolyclinicInfo',
      BLOG: 'Blog',
      POLYCLINICBOXES: 'PolyclinicBoxes',
      DOCTORCARD: 'DoctorCard',
      ODBORNOST: 'Odbornost',
      MYPROBLEM: 'MyProblem',
      JOBPOSITIONS: 'JobPositions',
      JOBOFFERS: 'JobOffers',
      CAREERFORM: 'CareerForm',
      EXPERTISEDESCRIPTION: 'ExpertiseDescription',
      MEDICALGROUP: 'MedicalGroup',
      TIMELINE: 'Timeline',
      VIEWSABOUTUS: 'ViewsAboutUs',
      CONTACTINFO: 'ContactInfo',
      CONTACTFORM: 'ContactForm',
      DOWNLOADS: 'Downloads',
      CONTACTSBLOCK: 'ContactsBlock',
      FAQ: 'Faq'
    };
  }
  /***/


  ComponentsService.prototype.getAllowedTypes = function () {
    var _this = this;

    var res = Object.keys(this.Types).map(function (key) {
      return _this.Types[key];
    });
    return res;
  };
  /***/


  ComponentsService.prototype.getComponent = function (type) {
    switch (type) {
      case this.Types.DUMMY:
        return _components.Dummy;

      case this.Types.HEADER:
        return _components.Header;

      case this.Types.HERO:
        return _components.Hero;

      case this.Types.CROSSROADS:
        return _components.CrossRoads;

      case this.Types.BENEFITS:
        return _components.Benefits;

      case this.Types.HIGHLIGHT:
        return _components.Highlight;

      case this.Types.FOOTER:
        return _components.Footer;

      case this.Types.REVIEWS:
        return _components.Reviews;

      case this.Types.TEXTBLOCK:
        return _components.TextBlock;

      case this.Types.MAP:
        return _components.Map;

      case this.Types.INFOBOXES:
        return _components.InfoBoxes;

      case this.Types.DOCTORLIST:
        return _components.DoctorList;

      case this.Types.POLYCLINICSLIST:
        return _components.PolyclinicsList;

      case this.Types.EXPERTISELIST:
        return _components.ExpertiseList;

      case this.Types.INFORECTANGLES:
        return _components.InfoRectangles;

      case this.Types.POLYCLINICINFO:
        return _components.PolyclinicInfo;

      case this.Types.BLOG:
        return _components.Blog;

      case this.Types.POLYCLINICBOXES:
        return _components.PolyclinicBoxes;

      case this.Types.DOCTORCARD:
        return _components.DoctorCard;

      case this.Types.ODBORNOST:
        return _components.Odbornost;

      case this.Types.MYPROBLEM:
        return _components.MyProblem;

      case this.Types.JOBPOSITIONS:
        return _components.JobPositions;

      case this.Types.JOBOFFERS:
        return _components.JobOffers;

      case this.Types.CAREERFORM:
        return _components.CareerForm;

      case this.Types.EXPERTISEDESCRIPTION:
        return _components.ExpertiseDescription;

      case this.Types.MEDICALGROUP:
        return _components.MedicalGroup;

      case this.Types.TIMELINE:
        return _components.Timeline;

      case this.Types.VIEWSABOUTUS:
        return _components.ViewsAboutUs;

      case this.Types.CONTACTINFO:
        return _components.ContactInfo;

      case this.Types.CONTACTFORM:
        return _components.ContactForm;

      case this.Types.DOWNLOADS:
        return _components.Downloads;

      case this.Types.CONTACTSBLOCK:
        return _components.ContactsBlock;

      case this.Types.FAQ:
        return _components.Faq;

      default:
        return function () {
          return React.createElement(_components.AlertNotFound, {
            type: "component"
          });
        };
    }
  };
  /***/


  ComponentsService.prototype.getComponentResource = function (type) {
    var res = resources.default;
    var typedRes = resources[type.toLowerCase()];

    if ((0, _lodash.isObjectLike)(typedRes)) {
      res = __assign({}, res, typedRes);
    }

    return res;
  };

  ComponentsService.prototype.getForm = function (type) {
    switch (type) {
      default:
        return function () {
          return React.createElement(_components.AlertNotFound, {
            type: "form"
          });
        };
    }
  };

  return ComponentsService;
}();

var _default = ComponentsService;
exports.default = _default;