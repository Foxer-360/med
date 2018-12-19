"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Avatar = _interopRequireDefault(require("./components/Avatar"));

var _SvgIcon = _interopRequireDefault(require("../../../lib/partials/SvgIcon"));

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

var specializations = [{
  name: 'alergologie a imunologie',
  head: true,
  chest: false,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: true
}, {
  name: 'angiologie (cévní)',
  head: false,
  chest: false,
  belly: false,
  arm: false,
  legs: true,
  feet: false,
  body: true
}, {
  name: 'audiometrie',
  head: true,
  chest: false,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: false
}, {
  name: 'dermarologie (kožní)',
  head: true,
  chest: false,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: true
}, {
  name: 'diabetologie',
  head: false,
  chest: false,
  belly: true,
  arm: false,
  legs: false,
  feet: false,
  body: true
}, {
  name: 'domácí péče (Home Care)',
  head: false,
  chest: false,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: true
}, {
  name: 'EEG',
  head: true,
  chest: false,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: false
}, {
  name: 'EKG',
  head: false,
  chest: true,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: false
}, {
  name: 'EMG',
  head: true,
  chest: true,
  belly: false,
  arm: true,
  legs: false,
  feet: false,
  body: false
}, {
  name: 'endokrinologie',
  head: false,
  chest: false,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: true
}, {
  name: 'foniatrie',
  head: true,
  chest: false,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: false
}, {
  name: 'gastroenterologie',
  head: false,
  chest: false,
  belly: true,
  arm: false,
  legs: false,
  feet: false,
  body: false
}, {
  name: 'gynekologie',
  head: false,
  chest: false,
  belly: true,
  arm: false,
  legs: false,
  feet: false,
  body: false
}, {
  name: 'chirurgie (proktologie)',
  head: false,
  chest: false,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: true
}, {
  name: 'infuzní terapie',
  head: false,
  chest: false,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: true
}, {
  name: 'interna (a geriatrie)',
  head: false,
  chest: false,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: true
}, {
  name: 'kalmetizace',
  head: false,
  chest: false,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: true
}, {
  name: 'kardiologie (a EKG)',
  head: false,
  chest: true,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: false
}, {
  name: 'lymfodrenáže',
  head: false,
  chest: false,
  belly: false,
  arm: false,
  legs: true,
  feet: false,
  body: false
}, {
  name: 'Mammacentrum',
  head: false,
  chest: true,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: false
}, {
  name: 'mas�e',
  head: false,
  chest: false,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: true
}, {
  name: 'neurologie',
  head: true,
  chest: true,
  belly: false,
  arm: true,
  legs: true,
  feet: false,
  body: false
}, {
  name: 'neurologie - dětská',
  head: true,
  chest: false,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: false
}, {
  name: 'oční - dětské',
  head: true,
  chest: false,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: false
}, {
  name: 'ORL',
  head: true,
  chest: false,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: false
}, {
  name: 'ortopedie',
  head: false,
  chest: false,
  belly: false,
  arm: false,
  legs: true,
  feet: true,
  body: false
}, {
  name: 'osteologie',
  head: false,
  chest: false,
  belly: false,
  arm: true,
  legs: true,
  feet: false,
  body: true
}, {
  name: 'pediatrie (dětský praktický lékař)',
  head: false,
  chest: false,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: true
}, {
  name: 'plicní (pneumologie)',
  head: false,
  chest: true,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: true
}, {
  name: 'praktický lékař',
  head: false,
  chest: false,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: true
}, {
  name: 'psychiatrie',
  head: true,
  chest: false,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: false
}, {
  name: 'psychologie',
  head: true,
  chest: false,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: false
}, {
  name: 'RDG a zobrazovací metody',
  head: false,
  chest: false,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: true
}, {
  name: 'revmatologie',
  head: false,
  chest: false,
  belly: false,
  arm: true,
  legs: true,
  feet: true,
  body: false
}, {
  name: 'urologie',
  head: false,
  chest: false,
  belly: true,
  arm: false,
  legs: false,
  feet: false,
  body: false
}, {
  name: 'Onkologie',
  head: false,
  chest: false,
  belly: false,
  arm: false,
  legs: false,
  feet: false,
  body: true
}, {
  name: 'reprodukční medicína',
  head: false,
  chest: false,
  belly: true,
  arm: false,
  legs: false,
  feet: false,
  body: false
}];

var MyProblem =
/** @class */
function (_super) {
  __extends(MyProblem, _super);

  function MyProblem(props) {
    var _this = _super.call(this, props) || this;

    _this.clickArea = function (area) {
      var availableSpecializations = [];

      for (var i = 0; i < specializations.length; i++) {
        if (specializations[i][area] === true) {
          availableSpecializations.push(specializations[i]);
        }
      }

      _this.setState({
        availableSpecializations: availableSpecializations,
        area: area
      });
    };

    _this.closeInfoBox = function () {
      _this.setState({
        area: ''
      });
    };

    _this.state = {
      area: '',
      availableSpecializations: null
    };
    return _this;
  }

  MyProblem.prototype.render = function () {
    var _this = this;

    return React.createElement("div", {
      className: "container"
    }, React.createElement("section", {
      className: 'myProblem'
    }, React.createElement("h3", null, "M\u016Fj Probl\xE9m se t\xFDk\xE1"), React.createElement("p", null, "Klikn\u011Bte na \u010D\xE1st t\u011Bla se kterou m\xE1te probl\xE9m."), React.createElement("div", {
      className: 'flexRow myProblem__holder'
    }, React.createElement(_Avatar.default, {
      onClick: this.clickArea,
      activeArea: this.state.area ? 'active--' + this.state.area : ''
    }), this.state.area && React.createElement("div", {
      className: "infoBox " + (this.state.area ? 'infoBox--' + this.state.area : '')
    }, React.createElement("div", {
      className: 'infoBox__close',
      onClick: function onClick() {
        return _this.closeInfoBox();
      }
    }, React.createElement(_SvgIcon.default, {
      name: "close",
      type: "gray"
    })), this.state.availableSpecializations && this.state.availableSpecializations.map(function (specialization, i) {
      return React.createElement("div", {
        className: 'infoBox__item',
        key: i
      }, React.createElement("a", {
        href: ""
      }, specialization.name));
    })))));
  };

  return MyProblem;
}(React.Component);

var _default = MyProblem;
exports.default = _default;