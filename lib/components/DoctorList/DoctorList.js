"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../partials/Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

// ! MOCK DATA ONLY
var data = {
  title: 'text',
  items: [{
    name: 'MUDr. Jana Pavluchová',
    field: 'Alergologie a Imunologie',
    img: '/assets/medicon/images/doctorlist1.png'
  }, {
    name: 'MUDr. Michala Jakubíková, Ph.D.',
    field: 'Neurologie',
    clinic: 'Poliklinika Vysočany',
    img: '/assets/medicon/images/doctorlist1.png'
  }, {
    name: 'MUDr. Michala Pelikánová',
    field: 'Diabetologie',
    clinic: ' Poliklinika Budějovická',
    img: '/assets/medicon/images/doctorlist1.png'
  }, {
    name: 'MUDr. Petr Novák',
    field: 'Ortopedie',
    clinic: 'Poliklinika Zelený pruh',
    img: '/assets/medicon/images/doctorlist1.png'
  }]
};

var DoctorList = function DoctorList(props) {
  var items = data.items,
      title = data.title;
  return React.createElement("section", {
    className: 'doctorList'
  }, React.createElement("div", {
    className: 'container'
  }, title && React.createElement("h3", null, title), React.createElement("div", {
    className: "doctorList__wrapper"
  }, items && items.map(function (item, index) {
    return React.createElement("div", {
      className: 'doctorList__item',
      key: index
    }, React.createElement("div", {
      className: 'doctorList__item__img'
    }, item.img && React.createElement("img", {
      src: item.img,
      alt: ""
    }) || React.createElement("img", {
      className: "avatar",
      src: '/assets/medicon/images/lekari.png',
      alt: "Medicon Lekari Avatart"
    })), React.createElement("div", {
      className: 'doctorList__item__info'
    }, React.createElement("h3", null, item.name), React.createElement("p", null, item.field), React.createElement("a", {
      className: 'doctorList__item__info__link',
      href: ""
    }, item.clinic), React.createElement(_Button.default, {
      classes: "btn--blueBorder btn--small"
    }, "vice info")));
  })), React.createElement("div", {
    className: "doctorList__btnHolder"
  }, React.createElement(_Button.default, {
    classes: "btn--blueBkg btn--down"
  }, "zobrazit vice"))));
};

var _default = DoctorList;
exports.default = _default;