"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../partials/Button"));

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

var CareerForm =
/** @class */
function (_super) {
  __extends(CareerForm, _super);

  function CareerForm(props) {
    var _this = _super.call(this, props) || this;

    _this.changeInputValue = function (e) {
      var _a;

      _this.setState({
        formValues: __assign({}, _this.state.formValues, (_a = {}, _a[e.target.name] = e.target.value, _a))
      });
    };

    _this.state = {
      formValues: {
        firstName: '',
        lastName: '',
        telephone: '',
        email: '',
        message: ''
      }
    };
    return _this;
  }

  CareerForm.prototype.render = function () {
    var _this = this;

    return React.createElement("div", {
      className: 'fullWidthContainer'
    }, React.createElement("section", {
      className: 'careerForm form'
    }, React.createElement("div", {
      className: 'container'
    }, React.createElement("h3", {
      className: 'gradientHeading'
    }, "Nena\u0161li jste pozici, kterou hled\xE1te"), React.createElement("p", null, "M\xE1te-li z\xE1jem o pr\xE1ci u n\xE1s, ", React.createElement("strong", null, "vypl\u0148te formul\xE1\u0159"), " a my v\xE1s za\u0159ad\xEDme do datab\xE1ze z\xE1jemc\u016F."), React.createElement("form", null, React.createElement("div", {
      className: 'form__row form__row--first'
    }, React.createElement("div", null, React.createElement("div", {
      className: 'form__input active'
    }, React.createElement("input", {
      type: "text",
      name: "firstName",
      className: this.state.formValues.firstName ? 'active' : '',
      onChange: function onChange(e) {
        return _this.changeInputValue(e);
      }
    }), React.createElement("span", {
      className: 'form__input__label'
    }, "Jm\xE9no"), React.createElement("div", {
      className: 'form__input__bar'
    }))), React.createElement("div", null, React.createElement("div", {
      className: 'form__input'
    }, React.createElement("input", {
      type: "text",
      name: "lastName",
      className: this.state.formValues.lastName ? 'active' : '',
      onChange: function onChange(e) {
        return _this.changeInputValue(e);
      }
    }), React.createElement("span", {
      className: 'form__input__label'
    }, "P\u0159\xEDjmen\xED"), React.createElement("div", {
      className: 'form__input__bar'
    }))), React.createElement("div", null, React.createElement("div", {
      className: 'form__input'
    }, React.createElement("input", {
      type: "tel",
      name: "telephone",
      className: this.state.formValues.telephone ? 'active' : '',
      onChange: function onChange(e) {
        return _this.changeInputValue(e);
      }
    }), React.createElement("span", {
      className: 'form__input__label'
    }, "Telefon"), React.createElement("div", {
      className: 'form__input__bar'
    }))), React.createElement("div", null, React.createElement("div", {
      className: 'form__input'
    }, React.createElement("input", {
      type: "email",
      name: "email",
      className: this.state.formValues.email ? 'active' : '',
      onChange: function onChange(e) {
        return _this.changeInputValue(e);
      }
    }), React.createElement("span", {
      className: 'form__input__label'
    }, "E-mail"), React.createElement("div", {
      className: 'form__input__bar'
    })))), React.createElement("div", {
      className: 'form__row form__row--second'
    }, React.createElement("div", {
      className: 'form__selectInput'
    }, React.createElement("select", null, React.createElement("option", null, "Lokalita kde chcete pracovat")), React.createElement("div", {
      className: 'form__input__bar'
    })), React.createElement("div", {
      className: 'form__inputBtn'
    }, React.createElement("button", null, "Nahr\xE1t \u017Eivotopis", React.createElement("span", null, React.createElement("svg", {
      enableBackground: "new 0 0 353.7 386.4",
      viewBox: "0 0 353.7 386.4",
      xmlSpace: "preserve",
      xmlns: "http://www.w3.org/2000/svg"
    }, React.createElement("path", {
      d: "m340.7 360.3h-327.7c-7.2 0-13 5.8-13 13s5.8 13 13 13h327.7c7.2 0 13-5.8 13-13s-5.8-13-13-13z"
    }), React.createElement("path", {
      d: "m307.7 105.8l-109.1-97.5c-12.4-11.1-31-11.1-43.4 0l-109.2 97.5c-5.4 4.8-5.8 13-1 18.4s13 5.8 18.4 1l100.5-89.8v252.6c0 7.2 5.8 13 13 13s13-5.8 13-13v-252.5l100.5 89.8c2.5 2.2 5.6 3.3 8.7 3.3 3.6 0 7.1-1.5 9.7-4.4 4.8-5.3 4.3-13.6-1.1-18.4z"
    })))), React.createElement("div", {
      className: 'form__input__bar'
    }))), React.createElement("div", {
      className: 'form__textarea'
    }, React.createElement("label", null, "Pr\u016Fvodn\xED dopis"), React.createElement("textarea", {
      name: "message",
      onChange: function onChange(e) {
        return _this.changeInputValue(e);
      }
    })), React.createElement("div", {
      className: 'form__terms'
    }, React.createElement("div", null, React.createElement("input", {
      className: 'checkbox',
      id: "styled-checkbox-1",
      type: "checkbox"
    }), React.createElement("label", {
      htmlFor: "styled-checkbox-1"
    })), React.createElement("div", null, "Souhlas\xEDm se ", React.createElement("a", {
      href: ''
    }, "zpracov\xE1n\xEDm osobn\xEDch"), " \xFAdaj\u016F.")), React.createElement("div", {
      className: 'flexRow flexAlign--center'
    }, React.createElement(_Button.default, {
      classes: "btn--blueBkg"
    }, "Odeslat"))))));
  };

  return CareerForm;
}(React.Component);

var _default = CareerForm;
exports.default = _default;