"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _title = _interopRequireDefault(require("./components/title"));

var _Button = _interopRequireDefault(require("../Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var data = {
  items: [{
    name: 'asd'
  }, {
    name: 'asd'
  }, {
    name: 'asd'
  }]
};

var PolyclinicsList = function PolyclinicsList() {
  return React.createElement("section", {
    className: "polyclinicsList"
  }, data.items.map(function (item, index) {
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
    }, React.createElement("img", {
      src: "/assets/medicon/images/policlinic1.png",
      alt: ""
    })), React.createElement("div", {
      className: 'pcitem__info'
    }, React.createElement(_title.default, null), React.createElement("div", {
      className: "pcitem__info__details"
    }, React.createElement("div", {
      className: "pcitem__info__details__item",
      style: {
        backgroundImage: 'url(/assets/medicon/images/geo.png)'
      }
    }, React.createElement("p", null, "Antala Sta\u0161ka 1670/80 ", React.createElement("br", null), "140 00 Praha 4")), React.createElement("div", {
      className: "pcitem__info__details__item",
      style: {
        backgroundImage: 'url(/assets/medicon/images/phone.png)'
      }
    }, React.createElement("p", null, "+420 261 006 111")), React.createElement("div", {
      className: "pcitem__info__details__item",
      style: {
        backgroundImage: 'url(/assets/medicon/images/metro.png)'
      }
    }, React.createElement("p", null, "Metro C ", React.createElement("br", null), "stanice Bud\u011Bjovick\xE1"))), React.createElement("div", {
      className: 'pcitem__info__list'
    }, React.createElement("ul", null, React.createElement("li", null, "Psychologie"), React.createElement("li", null, "Neurologie"), React.createElement("li", null, "Mammacentrum"), React.createElement("li", null, "Psychologie"), React.createElement("li", null, "Neurologie"), React.createElement("li", null, "Mammacentrum"), React.createElement("li", null, "Psychologie"), React.createElement("li", null, "Neurologie"), React.createElement("li", null, "Mammacentrum")), React.createElement("div", null, "Dal\u0161\xED odbornosti")), React.createElement("div", {
      className: 'pcitem__info__desc'
    }, React.createElement("div", {
      className: 'pcitem__info__desc__txt'
    }, "Poliklinika Bud\u011Bjovick\xE1 je nejv\u011Bt\u0161\xED nest\xE1tn\xED ambulantn\xED za\u0159\xEDzen\xED v Praze. Klient\u016Fm poskytuje \u0161irok\xE9 spektrum ambulantn\xEDch specializac\xED v\u010Detn\u011B nejmodern\u011Bj\u0161\xEDmi p\u0159\xEDstroji vybaven\xE9 gastroenterologie a \u0161pi\u010Dkov\u011B vybaven\xE9ho odd\u011Blen\xED RDG a zobrazovac\xEDch metod. To v\u0161e pod jednou st\u0159echou."), React.createElement("div", null, React.createElement(_Button.default, {
      classes: "btn--small btn--blueBorder"
    }, "vice info"))))))));
  }));
};

var _default = PolyclinicsList;
exports.default = _default;