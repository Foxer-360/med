"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

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

var Man =
/** @class */
function (_super) {
  __extends(Man, _super);

  function Man() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Man.prototype.render = function () {
    return React.createElement("div", null, React.createElement("svg", {
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      x: "0px",
      y: "0px",
      viewBox: "0 0 579 692",
      xmlSpace: "preserve"
    }, React.createElement("g", {
      id: "Vrstva_1"
    }, React.createElement("path", {
      className: "st0",
      d: "M331.3,191c-12.2,9.1-26.7,14.3-42.2,14.3c-15.6,0-30.2-5.3-42.5-14.5"
    })), React.createElement("g", {
      id: "Vrstva_2"
    }, React.createElement("circle", {
      className: "st1",
      cx: "256.1",
      cy: "101.1",
      r: "8.6"
    }), React.createElement("circle", {
      className: "st1",
      cx: "324.1",
      cy: "101.1",
      r: "8.6"
    }), React.createElement("path", {
      className: "st2",
      d: "M321.2,151c0,0-7.6,18.6-31.6,18.6c-24.4,0-31.6-18.6-31.6-18.6"
    }), React.createElement("path", {
      className: "st2",
      d: "M295.7,128.5c0,0-1.5,4-6,4c-4.6,0-6-4-6-4"
    }), React.createElement("path", {
      className: "st2",
      d: "M322.5,71.5c7.3,1.8,13.9,4.8,19.5,8.7"
    }), React.createElement("path", {
      className: "st2",
      d: "M238.2,80.2c5.5-3.8,11.9-6.8,19-8.5"
    })), React.createElement("g", {
      id: "Vrstva_3"
    }, React.createElement("path", {
      className: "st0",
      d: "M290.3,11.7c51.3-0.7,93.1,45.6,93.1,96.7c0,34.5-19.1,64.6-47.2,80.2c-9,5-14.6,14.4-14.6,24.7v0\r\n\t\tc0,15.5,12.6,28.1,28.1,28.1l183.3-14.8c20.2,0,36.6,16.4,36.6,36.6v0c0,20.2-16.4,36.6-36.6,36.6l-168.2,14.5c-3,0.3-5.2,3-4.9,6\r\n\t\tl32.7,275.5c1,11.6,10.8,25.5,22.4,25.5h27.9c16.9,0,30.7,13.7,30.7,30.7v0c0,16.9-13.7,30.7-30.7,30.7h-42h-36.8\r\n\t\tc-22.9,0-42-12.5-44-35.2l-27.5-178.4c-0.4-2.4-3.8-2.4-4.2,0l-27.5,178.4c-2.1,22.8-21.1,35.2-44,35.2h-36.8h-42\r\n\t\tc-16.9,0-30.7-13.7-30.7-30.7v0c0-16.9,13.7-30.7,30.7-30.7h27.9c11.6,0,21.4-13.9,22.4-25.5l32.7-275.5c0.4-3-1.8-5.7-4.9-6\r\n\t\tL47.7,299.9c-20.2,0-36.6-16.4-36.6-36.6v0c0-20.2,16.4-36.6,36.6-36.6L231,241.5c15.5,0,28.1-12.6,28.1-28.1v0\r\n\t\tc0-10.3-5.7-19.7-14.6-24.7c-28.2-15.7-47.2-45.7-47.2-80.2C197.2,57.3,239,11,290.3,11.7z"
    }), React.createElement("path", {
      className: "st0",
      d: "M202.4,143.7c-12.3,1.5-20-10.7-21.6-23c-1.5-12.3,3.7-20,16-21.6"
    }), React.createElement("path", {
      className: "st0",
      d: "M378,143.7c12.3,1.5,20-10.7,21.6-23s-3.7-20-16-21.6"
    }))));
  };

  return Man;
}(React.Component);

var _default = Man;
exports.default = _default;