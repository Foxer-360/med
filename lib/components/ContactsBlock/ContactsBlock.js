"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _DividerCircles = _interopRequireDefault(require("../DividerCircles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ContactsBlock = function ContactsBlock(props) {
  return React.createElement("div", {
    className: 'contacts-block'
  }, React.createElement("div", {
    className: 'container'
  }, React.createElement("h3", null, "Veden\xED spole\u010Dnosti a dal\u0161\xED kontakty"), React.createElement("div", null, React.createElement("h4", null, "Veden\xED spole\u010Dnosti"), React.createElement("div", {
    className: 'grid contacts-block__main'
  }, React.createElement("div", {
    className: 'contacts-block__main__element'
  }, React.createElement("p", {
    className: 'contacts-block__name'
  }, "Ji\u0159\xED Ad\xE1mek"), React.createElement("p", {
    className: 'contacts-block__position'
  }, "gener\xE1ln\xED \u0159editel"), React.createElement("p", null, React.createElement("a", {
    className: 'contacts-block__email',
    href: 'mailto:management@mediconas.cz'
  }, "management@mediconas.cz"))), React.createElement("div", {
    className: 'contacts-block__main__element'
  }, React.createElement("p", {
    className: 'contacts-block__name'
  }, "Ing. Andrea Sklen\xE1\u0159ov\xE1"), React.createElement("p", {
    className: 'contacts-block__position'
  }, "finan\u010Dn\xED \u0159editelka"), React.createElement("p", null, React.createElement("a", {
    className: 'contacts-block__email',
    href: 'mailto:management@mediconas.cz'
  }, "management@mediconas.cz"))))), React.createElement("div", null, React.createElement("h4", null, "Dal\u0161\xED kontakty"), React.createElement("div", {
    className: 'grid contacts-block__main'
  }, React.createElement("div", {
    className: 'contacts-block__main__element'
  }, React.createElement("p", {
    className: 'contacts-block__name'
  }, "Andrea Nedomov\xE1"), React.createElement("p", {
    className: 'contacts-block__position'
  }, "sekretari\xE1t"), React.createElement("p", null, React.createElement("a", {
    className: 'contacts-block__email',
    href: 'mailto:sekretariat@mediconas.cz'
  }, "sekretariat@mediconas.cz")), React.createElement("p", null, React.createElement("a", {
    href: 'tel:+420 261 006 630'
  }, "tel.: +420 261 006 630"))), React.createElement("div", {
    className: 'contacts-block__main__element'
  }, React.createElement("p", {
    className: 'contacts-block__name'
  }, "Hana Mal\xEDkov\xE1"), React.createElement("p", {
    className: 'contacts-block__position'
  }, "sekretari\xE1t"), React.createElement("p", null, React.createElement("a", {
    className: 'contacts-block__email',
    href: 'mailto:sekretariat@mediconas.cz'
  }, "sekretariat@mediconas.cz")), React.createElement("p", null, React.createElement("a", {
    href: 'tel:+420 261 006 524'
  }, "tel.: +420 261 006 524"))))), React.createElement(_DividerCircles.default, null), React.createElement("div", {
    className: 'grid contacts-block__list'
  }, React.createElement("div", {
    className: 'contacts-block__list__element'
  }, React.createElement("p", {
    className: 'contacts-block__name'
  }, "MUDr. Regina \u0160\xEDrov\xE1"), React.createElement("p", {
    className: 'contacts-block__position'
  }, "vedouc\xED l\xE9ka\u0159ka mamografick\xFDch"), React.createElement("p", {
    className: 'contacts-block__position'
  }, "center skupiny MEDICON"), React.createElement("p", null, React.createElement("a", {
    className: 'contacts-block__email',
    href: 'mailto:mamografie@mediconas.cz'
  }, "mamografie@mediconas.cz")), React.createElement("p", null, React.createElement("a", {
    href: 'tel:+420 261 006 630'
  }, "tel.: +420 261 006 630"))), React.createElement("div", {
    className: 'contacts-block__list__element'
  }, React.createElement("p", {
    className: 'contacts-block__name'
  }, "Ing. Eva Sokolov\xE1"), React.createElement("p", {
    className: 'contacts-block__position'
  }, "vedouc\xED odboru agendy"), React.createElement("p", {
    className: 'contacts-block__position'
  }, "zdravotn\xEDch poji\u0161\u0165oven"), React.createElement("p", null, React.createElement("a", {
    className: 'contacts-block__email',
    href: 'mailto:pojistovny@mediconas.cz'
  }, "pojistovny@mediconas.cz")), React.createElement("p", null, React.createElement("a", {
    href: 'tel:+420 731 682 290'
  }, "tel.: +420 731 682 290"))), React.createElement("div", {
    className: 'contacts-block__list__element'
  }, React.createElement("p", {
    className: 'contacts-block__name'
  }, "Mgr. Maty\xE1\u0161 Bittner"), React.createElement("p", {
    className: 'contacts-block__position'
  }, "obchodn\xED a marketingov\xFD mana\u017Eer"), React.createElement("p", {
    className: 'contacts-block__position'
  }, "(kontakt pro m\xE9dia)"), React.createElement("p", null, React.createElement("a", {
    className: 'contacts-block__email',
    href: 'mailto:marketing@mediconas.cz'
  }, "marketing@mediconas.cz")), React.createElement("p", null, React.createElement("a", {
    href: 'tel:+420 261 006 427'
  }, "tel.: +420 261 006 427")), React.createElement("p", null, React.createElement("a", {
    href: 'tel:+420 730 807 487'
  }, "tel.: +420 730 807 487"))), React.createElement("div", {
    className: 'contacts-block__list__element'
  }, React.createElement("p", {
    className: 'contacts-block__name'
  }, "Marcela V\u011Btrovcov\xE1"), React.createElement("p", {
    className: 'contacts-block__position'
  }, "koordin\xE1torka program\u016F"), React.createElement("p", {
    className: 'contacts-block__position'
  }, "INCARE"), React.createElement("p", null, React.createElement("a", {
    className: 'contacts-block__email',
    href: 'mailto:incare@mediconas.cz'
  }, "incare@mediconas.cz")), React.createElement("p", null, React.createElement("a", {
    href: 'tel:+420 273 162 162'
  }, "tel.: +420 273 162 162"))), React.createElement("div", {
    className: 'contacts-block__list__element'
  }, React.createElement("p", {
    className: 'contacts-block__name'
  }, "MUDr. Regina \u0160\xEDrov\xE1"), React.createElement("p", {
    className: 'contacts-block__position'
  }, "vedouc\xED l\xE9ka\u0159ka mamografick\xFDch"), React.createElement("p", {
    className: 'contacts-block__position'
  }, "center skupiny MEDICON"), React.createElement("p", null, React.createElement("a", {
    className: 'contacts-block__email',
    href: 'mailto:mamografie@mediconas.cz'
  }, "mamografie@mediconas.cz")), React.createElement("p", null, React.createElement("a", {
    href: 'tel:+420 261 006 630'
  }, "tel.: +420 261 006 630"))), React.createElement("div", {
    className: 'contacts-block__list__element'
  }, React.createElement("p", {
    className: 'contacts-block__name'
  }, "Ing. Eva Sokolov\xE1"), React.createElement("p", {
    className: 'contacts-block__position'
  }, "vedouc\xED odboru agendy"), React.createElement("p", {
    className: 'contacts-block__position'
  }, "zdravotn\xEDch poji\u0161\u0165oven"), React.createElement("p", null, React.createElement("a", {
    className: 'contacts-block__email',
    href: 'mailto:pojistovny@mediconas.cz'
  }, "pojistovny@mediconas.cz")), React.createElement("p", null, React.createElement("a", {
    href: 'tel:+420 731 682 290'
  }, "tel.: +420 731 682 290"))), React.createElement("div", {
    className: 'contacts-block__list__element'
  }, React.createElement("p", {
    className: 'contacts-block__name'
  }, "Mgr. Maty\xE1\u0161 Bittner"), React.createElement("p", {
    className: 'contacts-block__position'
  }, "obchodn\xED a marketingov\xFD mana\u017Eer"), React.createElement("p", {
    className: 'contacts-block__position'
  }, "(kontakt pro m\xE9dia)"), React.createElement("p", null, React.createElement("a", {
    className: 'contacts-block__email',
    href: 'mailto:marketing@mediconas.cz'
  }, "marketing@mediconas.cz")), React.createElement("p", null, React.createElement("a", {
    href: 'tel:+420 261 006 427'
  }, "tel.: +420 261 006 427")), React.createElement("p", null, React.createElement("a", {
    href: 'tel:+420 730 807 487'
  }, "tel.: +420 730 807 487"))), React.createElement("div", {
    className: 'contacts-block__list__element'
  }, React.createElement("p", {
    className: 'contacts-block__name'
  }, "Marcela V\u011Btrovcov\xE1"), React.createElement("p", {
    className: 'contacts-block__position'
  }, "koordin\xE1torka program\u016F"), React.createElement("p", {
    className: 'contacts-block__position'
  }, "INCARE"), React.createElement("p", null, React.createElement("a", {
    className: 'contacts-block__email',
    href: 'mailto:sekretariat@mediconas.cz'
  }, "incare@mediconas.cz")), React.createElement("p", null, React.createElement("a", {
    href: 'tel:+420 261 006 524'
  }, "tel.: +420 273 162 162"))))));
};

var _default = ContactsBlock;
exports.default = _default;