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

var Reviews =
/** @class */
function (_super) {
  __extends(Reviews, _super);

  function Reviews() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  Reviews.prototype.render = function () {
    return React.createElement("section", {
      className: "reviews"
    }, React.createElement("h3", null, "\u0159ekli o n\xE1s"), React.createElement("div", {
      className: "container-center"
    }, React.createElement("div", {
      className: "grid-container"
    }, React.createElement("div", {
      className: "review-el"
    }, React.createElement("img", {
      className: "review-img",
      src: "/assets/medicon/images/photo-1.jpg",
      alt: "photo"
    }), React.createElement("div", {
      className: "el"
    }, React.createElement("cite", null, "\u201EJedna z nejlep\u0161\xEDch poliklinik v Praze, od recep\u010Dn\xEDch po l\xE9ka\u0159e.\u201C"), React.createElement("div", {
      className: "stars"
    }, React.createElement("img", {
      src: "/assets/medicon/images/star.png",
      alt: "star"
    }), React.createElement("img", {
      src: "/assets/medicon/images/star.png",
      alt: "star"
    }), React.createElement("img", {
      src: "/assets/medicon/images/star.png",
      alt: "star"
    }), React.createElement("img", {
      src: "/assets/medicon/images/star.png",
      alt: "star"
    }), React.createElement("img", {
      src: "/assets/medicon/images/star.png",
      alt: "star"
    })))), React.createElement("div", {
      className: "review-el"
    }, React.createElement("img", {
      className: "review-img",
      src: "/assets/medicon/images/photo-2.jpg",
      alt: "photo"
    }), React.createElement("div", {
      className: "el"
    }, React.createElement("cite", null, "\u201EJedna z nejlep\u0161\xEDch poliklinik v Praze, od recep\u010Dn\xEDch po l\xE9ka\u0159e.\u201C"), React.createElement("div", {
      className: "stars"
    }, React.createElement("img", {
      src: "/assets/medicon/images/star.png",
      alt: "star"
    }), React.createElement("img", {
      src: "/assets/medicon/images/star.png",
      alt: "star"
    }), React.createElement("img", {
      src: "/assets/medicon/images/star.png",
      alt: "star"
    }), React.createElement("img", {
      src: "/assets/medicon/images/star.png",
      alt: "star"
    }), React.createElement("img", {
      src: "/assets/medicon/images/star.png",
      alt: "star"
    })))), React.createElement("div", {
      className: "review-el"
    }, React.createElement("img", {
      className: "review-img",
      src: "/assets/medicon/images/photo-3.jpg",
      alt: "photo"
    }), React.createElement("div", {
      className: "el"
    }, React.createElement("cite", null, "\u201EJedna z nejlep\u0161\xEDch poliklinik v Praze, od recep\u010Dn\xEDch po l\xE9ka\u0159e.\u201C"), React.createElement("div", {
      className: "stars"
    }, React.createElement("img", {
      src: "/assets/medicon/images/star.png",
      alt: "star"
    }), React.createElement("img", {
      src: "/assets/medicon/images/star.png",
      alt: "star"
    }), React.createElement("img", {
      src: "/assets/medicon/images/star.png",
      alt: "star"
    }), React.createElement("img", {
      src: "/assets/medicon/images/star.png",
      alt: "star"
    }), React.createElement("img", {
      src: "/assets/medicon/images/star.png",
      alt: "star"
    })))))));
  };

  return Reviews;
}(React.Component);

var _default = Reviews;
exports.default = _default;