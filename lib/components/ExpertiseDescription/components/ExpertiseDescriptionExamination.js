"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Link = _interopRequireDefault(require("../../../../lib/partials/Link"));

var _Examination = _interopRequireDefault(require("./components/Examination"));

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

// tslint:disable-next-line:max-line-length
var ExpertiseDescriptionExamination =
/** @class */
function (_super) {
  __extends(ExpertiseDescriptionExamination, _super);

  function ExpertiseDescriptionExamination(props) {
    return _super.call(this, props) || this;
  }

  ExpertiseDescriptionExamination.prototype.render = function () {
    var _a = this.props,
        title = _a.title,
        examinations = _a.examinations;
    return React.createElement("div", {
      className: 'examination'
    }, title && React.createElement("h3", {
      style: {
        paddingTop: 45
      }
    }, title), React.createElement("div", {
      className: 'examination__list grid'
    }, examinations && examinations.map(function (examination, i) {
      var lastLong = examinations.length % 2 !== 0 && examinations.length - 1 === i;
      return examination.url ? React.createElement(_Link.default, {
        key: i,
        style: examination.url ? {} : {
          cursor: 'default'
        },
        className: "examination__list__item " + (lastLong ? 'examination__list__item--last-long' : ''),
        url: examination.url && examination.url.url
      }, examination.title && examination.title) : React.createElement(_Examination.default, {
        key: i,
        description: examination.description,
        title: examination.title,
        lastLong: lastLong
      });
    })));
  };

  return ExpertiseDescriptionExamination;
}(React.Component);

var _default = ExpertiseDescriptionExamination;
exports.default = _default;