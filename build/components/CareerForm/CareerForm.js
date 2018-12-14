var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import Button from '../../partials/Button';
import ReactMarkdown from 'react-markdown';
var CareerForm = /** @class */ (function (_super) {
    __extends(CareerForm, _super);
    function CareerForm(props) {
        var _this = _super.call(this, props) || this;
        _this.changeInputValue = function (e) {
            var _a;
            _this.setState({
                formValues: __assign({}, _this.state.formValues, (_a = {}, _a[e.target.name] = e.target.value, _a)),
            });
        };
        _this.state = {
            formValues: {
                firstName: '',
                lastName: '',
                telephone: '',
                email: '',
                message: '',
            },
        };
        return _this;
    }
    CareerForm.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, gdprLink = _a.gdprLink, title = _a.title, text = _a.text;
        return (React.createElement("div", { className: 'fullWidthContainer' },
            React.createElement("section", { className: 'careerForm form' },
                React.createElement("div", { className: 'container' },
                    React.createElement("h3", { className: 'gradientHeading' }, title),
                    React.createElement(ReactMarkdown, { source: text, renderers: {
                            paragraph: function (props) { return React.createElement("p", null, props.children); },
                        } }),
                    React.createElement("form", null,
                        React.createElement("div", { className: 'form__row form__row--first' },
                            React.createElement("div", null,
                                React.createElement("div", { className: 'form__input active' },
                                    React.createElement("input", { type: "text", name: "firstName", className: this.state.formValues.firstName ? 'active' : '', onChange: function (e) { return _this.changeInputValue(e); } }),
                                    React.createElement("span", { className: 'form__input__label' }, "Jm\u00E9no"),
                                    React.createElement("div", { className: 'form__input__bar' }))),
                            React.createElement("div", null,
                                React.createElement("div", { className: 'form__input' },
                                    React.createElement("input", { type: "text", name: "lastName", className: this.state.formValues.lastName ? 'active' : '', onChange: function (e) { return _this.changeInputValue(e); } }),
                                    React.createElement("span", { className: 'form__input__label' }, "P\u0159\u00EDjmen\u00ED"),
                                    React.createElement("div", { className: 'form__input__bar' }))),
                            React.createElement("div", null,
                                React.createElement("div", { className: 'form__input' },
                                    React.createElement("input", { type: "tel", name: "telephone", className: this.state.formValues.telephone ? 'active' : '', onChange: function (e) { return _this.changeInputValue(e); } }),
                                    React.createElement("span", { className: 'form__input__label' }, "Telefon"),
                                    React.createElement("div", { className: 'form__input__bar' }))),
                            React.createElement("div", null,
                                React.createElement("div", { className: 'form__input' },
                                    React.createElement("input", { type: "email", name: "email", className: this.state.formValues.email ? 'active' : '', onChange: function (e) { return _this.changeInputValue(e); } }),
                                    React.createElement("span", { className: 'form__input__label' }, "E-mail"),
                                    React.createElement("div", { className: 'form__input__bar' })))),
                        React.createElement("div", { className: 'form__row form__row--second' },
                            React.createElement("div", { className: 'form__selectInput' },
                                React.createElement("select", null,
                                    React.createElement("option", null, "Lokalita kde chcete pracovat")),
                                React.createElement("div", { className: 'form__input__bar' })),
                            React.createElement("div", { className: 'form__inputBtn' },
                                React.createElement("button", null,
                                    "Nahr\u00E1t \u017Eivotopis",
                                    React.createElement("span", null,
                                        React.createElement("svg", { enableBackground: "new 0 0 353.7 386.4", viewBox: "0 0 353.7 386.4", xmlSpace: "preserve", xmlns: "http://www.w3.org/2000/svg" },
                                            React.createElement("path", { d: "m340.7 360.3h-327.7c-7.2 0-13 5.8-13 13s5.8 13 13 13h327.7c7.2 0 13-5.8 13-13s-5.8-13-13-13z" }),
                                            React.createElement("path", { d: "m307.7 105.8l-109.1-97.5c-12.4-11.1-31-11.1-43.4 0l-109.2 97.5c-5.4 4.8-5.8 13-1 18.4s13 5.8 18.4 1l100.5-89.8v252.6c0 7.2 5.8 13 13 13s13-5.8 13-13v-252.5l100.5 89.8c2.5 2.2 5.6 3.3 8.7 3.3 3.6 0 7.1-1.5 9.7-4.4 4.8-5.3 4.3-13.6-1.1-18.4z" })))),
                                React.createElement("div", { className: 'form__input__bar' }))),
                        React.createElement("div", { className: 'form__textarea' },
                            React.createElement("label", null, "Pr\u016Fvodn\u00ED dopis"),
                            React.createElement("textarea", { name: "message", onChange: function (e) { return _this.changeInputValue(e); } })),
                        React.createElement("div", { className: 'form__terms' },
                            React.createElement("div", null,
                                React.createElement("input", { className: 'checkbox', id: "styled-checkbox-1", type: "checkbox" }),
                                React.createElement("label", { htmlFor: "styled-checkbox-1" })),
                            React.createElement("div", null,
                                "Souhlas\u00EDm se ",
                                React.createElement("a", { href: gdprLink }, "zpracov\u00E1n\u00EDm osobn\u00EDch"),
                                " \u00FAdaj\u016F.")),
                        React.createElement("div", { className: 'flexRow flexAlign--center' },
                            React.createElement(Button, { classes: "btn--blueBkg btn--fullWidth" }, "Odeslat")))))));
    };
    return CareerForm;
}(React.Component));
export default CareerForm;
//# sourceMappingURL=CareerForm.js.map