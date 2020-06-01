"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var graphql_tag_1 = require("graphql-tag");
var react_apollo_1 = require("react-apollo");
var Link_1 = require("../../partials/Link");
var Loader_1 = require("../../partials/Loader");
var testEmail_1 = require("../../helpers/testEmail");
var readEnvVariable_1 = require("../../helpers/readEnvVariable");
var ModalWindow_1 = require("../../partials/ModalWindow");
var Select_1 = require("../../partials/Select");
var REACT_APP_REST_API_URL = readEnvVariable_1.default('REACT_APP_REST_API_URL');
var GET_CONTEXT = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    pageData @client\n    languageData @client\n  }\n"], ["\n  {\n    pageData @client\n    languageData @client\n  }\n"])));
var ExaminationForm = /** @class */ (function (_super) {
    __extends(ExaminationForm, _super);
    function ExaminationForm(props) {
        var _this = _super.call(this, props) || this;
        _this.changeInputValue = function (e) {
            var _a;
            var newState = __assign({}, _this.state, { formValues: __assign({}, _this.state.formValues, (_a = {}, _a[e.target.name] = e.target.value, _a)) });
            _this.setState(newState);
        };
        _this.resetForm = function () {
            _this.setState({
                formStatus: null,
                formErrorMessage: null,
                formValues: {
                    center: '',
                    examinationType: '',
                    examinationSpecific: '',
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                    agreement: false,
                },
                errors: {
                    center: null,
                    examinationType: null,
                    examinationSpecific: null,
                    firstName: null,
                    lastName: null,
                    email: null,
                    phone: null,
                    message: null,
                },
            });
        };
        _this.submit = function (e, subject) {
            e.preventDefault();
            if (_this.isValid()) {
                var data = new FormData();
                data.append('center', _this.state.formValues.center);
                data.append('examinationType', _this.state.formValues.examinationType);
                data.append('examinationSpecific', _this.state.formValues.examinationSpecific);
                data.append('firstName', _this.state.formValues.firstName);
                data.append('lastName', _this.state.formValues.lastName);
                data.append('email', _this.state.formValues.email);
                data.append('phone', '-');
                data.append('text', _this.state.formValues.message);
                data.append('url', window.location.href);
                data.append('subject', subject);
                data.append('formType', 'examination');
                try {
                    // axios
                    //   .post(REACT_APP_REST_API_URL + '/inquiry/upload', data)
                    //   .then(response => {
                    //     this.setState({ ...this.state, formStatus: 'success' });
                    //   })
                    //   .catch(err => {
                    //     this.setState({ ...this.state, formStatus: 'error', formErrorMessage: err.toString() });
                    //   });
                }
                catch (e) {
                    return _this.setState(__assign({}, _this.state, { formStatus: 'error', formErrorMessage: 'Network Problem' }));
                }
                _this.resetForm();
            }
        };
        _this.state = {
            formStatus: null,
            formErrorMessage: null,
            formValues: {
                center: '',
                examinationType: '',
                examinationSpecific: '',
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: '',
                agreement: false,
            },
            errors: {
                center: null,
                examinationType: null,
                examinationSpecific: null,
                firstName: null,
                lastName: null,
                email: null,
                phone: null,
                message: null,
            },
        };
        return _this;
    }
    ExaminationForm.prototype.isValid = function () {
        var _this = this;
        var valid = true;
        var newError = __assign({}, this.state.errors);
        Object.keys(newError).forEach(function (field) {
            console.log(field, 'dalsi', _this.state.formValues[field]);
            if (field === 'agreement') {
                newError[field] = _this.state.formValues[field] === false ? 'Tento údaj je povinný' : '';
            }
            if (field === 'email') {
                if (_this.state.formValues[field] === '') {
                    newError[field] = 'Tento údaj je povinný';
                }
                else if (_this.state.formValues[field] !== '' && !testEmail_1.default(_this.state.formValues[field])) {
                    newError[field] = 'not an email';
                }
                else {
                    newError[field] = '';
                }
            }
            else {
                newError[field] = _this.state.formValues[field] === '' ? 'Tento údaj je povinný' : '';
            }
            if (newError[field] !== '') {
                valid = false;
            }
        });
        this.setState({
            errors: newError,
        });
        return valid;
    };
    ExaminationForm.prototype.toggleAgreement = function () {
        this.setState(__assign({}, this.state, { formValues: __assign({}, this.state.formValues, { agreement: !this.state.formValues.agreement }) }));
    };
    ExaminationForm.prototype.handleChangeSelect = function (event, name) {
        var _a;
        this.setState(__assign({}, this.state, { formValues: __assign({}, this.state.formValues, (_a = {}, _a[name] = event.target.value, _a)) }));
        console.log(event.target.value, name);
    };
    ExaminationForm.prototype.getList = function (list) {
        return list ? list.split('\n') : [''];
    };
    ExaminationForm.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, examinationList = _a.examinationList, examinationSpecificationList = _a.examinationSpecificationList, gdprLink = _a.gdprLink, enableModal = _a.enableModal, modalTextBig = _a.modalTextBig, modalTextSmall = _a.modalTextSmall;
        var _b = this.state, _c = _b.formValues, center = _c.center, examinationType = _c.examinationType, examinationSpecific = _c.examinationSpecific, firstName = _c.firstName, lastName = _c.lastName, email = _c.email, phone = _c.phone, message = _c.message, agreement = _c.agreement, errors = __rest(_b.errors, []), formStatus = _b.formStatus;
        return (React.createElement("div", { className: 'fullWidthContainer' },
            React.createElement(react_apollo_1.Query, { query: GET_CONTEXT }, function (_a) {
                var data = _a.data, loading = _a.loading;
                if (loading) {
                    return React.createElement(Loader_1.default, null);
                }
                // if (error) {
                //   return `Error...${error}`;
                // }
                var pageData = data.pageData, languageData = data.languageData;
                var code = languageData.code;
                return (React.createElement("section", { className: 'examinationForm form' },
                    React.createElement("div", { className: 'container' },
                        React.createElement("h3", { className: 'gradientHeading' }, "Objednejte se"),
                        React.createElement("form", { method: 'POST', onSubmit: function (e) { return _this.submit(e, pageData.name); } },
                            React.createElement("div", { className: 'form__row' },
                                React.createElement("div", { className: 'short' },
                                    React.createElement("div", { className: 'form__input' },
                                        React.createElement(Select_1.default, { value: _this.state.formValues.center, className: "" + (_this.state.formValues.center ? 'active' : ''), onChange: function (e) { return _this.handleChangeSelect(e, 'center'); }, defaultValue: 'Pracoviště', items: ['Budějovická', 'Vysočany'] }),
                                        errors.center
                                            && React.createElement("div", { className: "form__textarea " + (errors.center ? 'error' : '') + " " },
                                                React.createElement("label", null, errors.center ? errors.center : '')))),
                                React.createElement("div", { className: 'short' },
                                    React.createElement("div", { className: 'form__input' },
                                        React.createElement(Select_1.default, { value: _this.state.formValues.examinationType, className: "" + (_this.state.formValues.center ? 'active' : ''), onChange: function (e) { return _this.handleChangeSelect(e, 'examinationType'); }, defaultValue: 'Typ vyšetření', items: _this.getList(examinationList) }),
                                        errors.examinationType
                                            && React.createElement("div", { className: "form__textarea " + (errors.examinationType ? 'error' : '') + " " },
                                                React.createElement("label", null, errors.examinationType ? errors.examinationType : '')))),
                                React.createElement("div", { className: 'long' },
                                    React.createElement("div", { className: 'form__input' },
                                        React.createElement(Select_1.default, { value: _this.state.formValues.examinationSpecific, className: 'long', onChange: function (e) { return _this.handleChangeSelect(e, 'examinationSpecific'); }, defaultValue: 'Část k vyšetření', items: _this.getList(examinationSpecificationList) }),
                                        errors.examinationSpecific
                                            && React.createElement("div", { className: "form__textarea " + (errors.examinationSpecific ? 'error' : '') + " " },
                                                React.createElement("label", null, errors.examinationSpecific ? errors.examinationSpecific : '')))),
                                React.createElement("div", { className: 'short' },
                                    React.createElement("div", { className: "form__input " + (errors.firstName ? 'error' : '') },
                                        React.createElement("input", { value: firstName, type: "text", name: "firstName", className: "" + (_this.state.formValues.firstName ? 'active' : ''), onChange: function (e) { return _this.changeInputValue(e); } }),
                                        React.createElement("span", { className: 'form__input__label' }, errors.firstName ? errors.firstName : 'Křesní jméno'),
                                        React.createElement("div", { className: 'form__input__bar' }))),
                                React.createElement("div", { className: 'short' },
                                    React.createElement("div", { className: "form__input " + (errors.lastName ? 'error' : '') },
                                        React.createElement("input", { value: lastName, type: "text", name: "lastName", className: "" + (_this.state.formValues.lastName ? 'active' : ''), onChange: function (e) { return _this.changeInputValue(e); } }),
                                        React.createElement("span", { className: 'form__input__label' }, errors.lastName ? errors.lastName : 'Příjmení'),
                                        React.createElement("div", { className: 'form__input__bar' }))),
                                React.createElement("div", { className: 'short' },
                                    React.createElement("div", { className: "form__input " + (errors.email ? 'error' : '') + " " },
                                        React.createElement("input", { value: email, type: "email", name: "email", className: (_this.state.formValues.email ? 'active' : '') + " ", onChange: function (e) { return _this.changeInputValue(e); } }),
                                        React.createElement("span", { className: 'form__input__label' }, errors.email ? errors.email : 'E-mail'),
                                        React.createElement("div", { className: 'form__input__bar' }))),
                                React.createElement("div", { className: 'short' },
                                    React.createElement("div", { className: "form__input " + (errors.phone ? 'error' : '') + " " },
                                        React.createElement("input", { value: phone, type: "text", name: "phone", className: (_this.state.formValues.email ? 'active' : '') + " ", onChange: function (e) { return _this.changeInputValue(e); } }),
                                        React.createElement("span", { className: 'form__input__label' }, errors.phone ? errors.phone : 'Telefon'),
                                        React.createElement("div", { className: 'form__input__bar' })))),
                            React.createElement("div", { className: "form__textarea " + (errors.message ? 'error' : '') + " " },
                                React.createElement("label", null, errors.message ? errors.message : 'Poznámka'),
                                React.createElement("textarea", { name: "message", onChange: function (e) { return _this.changeInputValue(e); }, value: message })),
                            React.createElement("div", { className: 'form__messageHolder', style: formStatus !== null ? { padding: '4rem 0' } : {} },
                                formStatus === 'error' && (React.createElement("div", { className: 'form__message form__message--error' },
                                    React.createElement("p", null, code === 'en' ? 'There was an error.' : 'Během odesílání formuláře se vyskytla chyba.'),
                                    _this.state.formErrorMessage && React.createElement("p", null, _this.state.formErrorMessage))),
                                formStatus === 'success' && !enableModal && (React.createElement("div", { className: 'form__message form__message--success' }, code === 'en'
                                    ? 'Thank You for contacting us.'
                                    : 'Děkujeme za odeslání formuláře. Brzy se Vám ozveme.'))),
                            React.createElement("div", { className: 'form__terms' },
                                React.createElement("div", null,
                                    React.createElement("input", { className: 'checkbox', id: "styled-checkbox-1", type: "checkbox", checked: agreement, onChange: function (e) { return _this.toggleAgreement(); } }),
                                    React.createElement("label", { htmlFor: "styled-checkbox-1" })),
                                React.createElement("div", null,
                                    "Souhlas\u00EDm se ",
                                    React.createElement(Link_1.default, __assign({}, gdprLink), "zpracov\u00E1n\u00EDm osobn\u00EDch"),
                                    " \u00FAdaj\u016F.")),
                            React.createElement("div", { className: 'flexRow flexAlign--center' },
                                React.createElement("button", { className: "btn btn--blueBkg", type: "submit", disabled: !_this.state.formValues.agreement }, "Odeslat"))),
                        enableModal && _this.state.formStatus === 'success' && (React.createElement(ModalWindow_1.default, { textBig: modalTextBig, textSmall: modalTextSmall })))));
            })));
    };
    return ExaminationForm;
}(React.Component));
exports.default = ExaminationForm;
var templateObject_1;
//# sourceMappingURL=ExaminationForm.js.map