"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlogCard = BlogCard;

var React = _interopRequireWildcard(require("react"));

var _SvgIcon = _interopRequireDefault(require("../../../../lib/partials/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function BlogCard(props) {
  var title = props.title,
      text = props.text,
      color = props.color,
      img = props.img,
      special = props.special;

  if (special) {
    return React.createElement("a", {
      href: "",
      className: 'blogCard blogCard--special'
    }, title && React.createElement("h3", null, title), React.createElement("ul", null, React.createElement("li", null, React.createElement("span", null, React.createElement(_SvgIcon.default, {
      name: 'arrow',
      type: 'white'
    })), "L\xE9ka\u0159e ORL"), React.createElement("li", null, React.createElement("span", null, React.createElement(_SvgIcon.default, {
      name: 'arrow',
      type: 'white'
    })), "L\xE9ka\u0159 pracovn\u011B - l\xE9ka\u0159sk\xE9 slu\u017Eby"), React.createElement("li", null, React.createElement("span", null, React.createElement(_SvgIcon.default, {
      name: 'arrow',
      type: 'white'
    })), "Dent\xE1ln\xED hygienista/ka")));
  }

  return React.createElement("a", {
    href: "",
    className: 'blogCard'
  }, title && React.createElement("h3", null, title), text && React.createElement("p", null, text), React.createElement("img", {
    src: img,
    alt: ""
  }), React.createElement("div", {
    className: 'blogCard__colorGradient',
    style: {
      background: "linear-gradient( to bottom,rgba(125, 185, 232, 0) 0%," + color + " 100%)"
    }
  }));
}