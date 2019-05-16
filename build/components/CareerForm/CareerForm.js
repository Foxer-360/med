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
var SvgIcon_1 = require("../../partials/SvgIcon");
var ReactMarkdown = require("react-markdown");
var Link_1 = require("@source/partials/Link");
var react_apollo_1 = require("react-apollo");
var Loader_1 = require("../../partials/Loader");
var testEmail_1 = require("../../helpers/testEmail");
var axios_1 = require("axios");
var graphql_tag_1 = require("graphql-tag");
var GET_CONTEXT = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    pageData @client\n  }\n"], ["\n  {\n    pageData @client\n  }\n"])));
var CareerForm = /** @class */ (function (_super) {
    __extends(CareerForm, _super);
    function CareerForm(props) {
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
                    location: '',
                    firstName: '',
                    lastName: '',
                    telephone: '',
                    email: '',
                    message: '',
                    agreement: false,
                    file: null,
                },
                errors: {
                    firstName: null,
                    lastName: null,
                    telephone: null,
                    email: null,
                    message: null,
                },
            });
        };
        _this.submit = function (e, subject) {
            e.preventDefault();
            if (_this.isValid()) {
                var data = new FormData();
                data.append('file', _this.state.formValues.file);
                data.append('firstname', _this.state.formValues.firstName);
                data.append('lastname', _this.state.formValues.lastName);
                data.append('telephone', _this.state.formValues.telephone);
                data.append('location', _this.state.formValues.location);
                data.append('email', _this.state.formValues.email);
                data.append('text', _this.state.formValues.message);
                data.append('url', window.location.href);
                data.append('subject', subject);
                data.append('formType', 'career');
                try {
                    axios_1.default
                        .post(process.env.REACT_APP_SERVER + '/inquiry/upload', data)
                        .then(function (response) {
                        _this.setState(__assign({}, _this.state, { formStatus: 'success' }));
                    })
                        .catch(function (err) { return _this.setState(__assign({}, _this.state, { formStatus: 'error', formErrorMessage: err.toString() })); });
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
                location: '',
                firstName: '',
                lastName: '',
                telephone: '',
                email: '',
                message: '',
                agreement: false,
                file: null,
            },
            errors: {
                firstName: null,
                lastName: null,
                telephone: null,
                email: null,
                message: null,
            },
        };
        _this.fileRef = React.createRef();
        return _this;
    }
    CareerForm.prototype.isValid = function () {
        var _this = this;
        var valid = true;
        var newError = __assign({}, this.state.errors);
        Object.keys(newError).forEach(function (field) {
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
    CareerForm.prototype.toggleAgreement = function () {
        this.setState(__assign({}, this.state, { formValues: __assign({}, this.state.formValues, { agreement: !this.state.formValues.agreement }) }));
    };
    CareerForm.prototype.onChooseFile = function () {
        if (this.fileRef) {
            this.fileRef.click();
        }
    };
    CareerForm.prototype.onChangeFile = function (e) {
        var newState = __assign({}, this.state, { formValues: __assign({}, this.state.formValues, { file: e.target.files[0] }) });
        this.setState(newState);
    };
    CareerForm.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, gdprLink = _a.gdprLink, title = _a.title, text = _a.text;
        var _b = this.state, _c = _b.formValues, firstName = _c.firstName, lastName = _c.lastName, telephone = _c.telephone, email = _c.email, message = _c.message, agreement = _c.agreement, file = _c.file, location = _c.location, errors = __rest(_b.errors, []), formStatus = _b.formStatus;
        return (React.createElement("div", { className: 'fullWidthContainer' },
            React.createElement(react_apollo_1.Query, { query: GET_CONTEXT }, function (_a) {
                var data = _a.data, loading = _a.loading, error = _a.error;
                if (loading) {
                    return React.createElement(Loader_1.default, null);
                }
                if (error) {
                    return 'Error...';
                }
                var pageData = data.pageData;
                return (React.createElement("section", { className: 'careerForm form' },
                    React.createElement("div", { className: 'container' },
                        React.createElement("h3", { className: 'gradientHeading' }, title),
                        React.createElement(ReactMarkdown, { source: text, renderers: {
                                paragraph: function (props) { return React.createElement("p", null, props.children); },
                            } }),
                        React.createElement("form", { method: 'POST', onSubmit: function (e) { return _this.submit(e, pageData.name); } },
                            React.createElement("div", { className: 'form__row form__row--first' },
                                React.createElement("div", null,
                                    React.createElement("div", { className: "form__input active " + (errors.firstName ? 'error' : '') },
                                        React.createElement("input", { value: firstName, type: "text", name: "firstName", className: _this.state.formValues.firstName ? 'active' : '', onChange: function (e) { return _this.changeInputValue(e); } }),
                                        React.createElement("span", { className: 'form__input__label' }, errors.firstName ? errors.firstName : 'Jméno'),
                                        React.createElement("div", { className: 'form__input__bar' }))),
                                React.createElement("div", null,
                                    React.createElement("div", { className: "form__input " + (errors.lastName ? 'error' : '') + " " },
                                        React.createElement("input", { value: lastName, type: "text", name: "lastName", className: _this.state.formValues.lastName ? 'active' : '', onChange: function (e) { return _this.changeInputValue(e); } }),
                                        React.createElement("span", { className: 'form__input__label' }, errors.firstName ? errors.firstName : 'Příjmení'),
                                        React.createElement("div", { className: 'form__input__bar' }))),
                                React.createElement("div", null,
                                    React.createElement("div", { className: "form__input " + (errors.telephone ? 'error' : '') + " " },
                                        React.createElement("input", { value: telephone, type: "tel", name: "telephone", className: _this.state.formValues.telephone ? 'active' : '', onChange: function (e) { return _this.changeInputValue(e); } }),
                                        React.createElement("span", { className: 'form__input__label' }, errors.telephone ? errors.telephone : 'Telefon'),
                                        React.createElement("div", { className: 'form__input__bar' }))),
                                React.createElement("div", null,
                                    React.createElement("div", { className: "form__input " + (errors.email ? 'error' : '') + " " },
                                        React.createElement("input", { value: email, type: "email", name: "email", className: _this.state.formValues.email ? 'active' : '', onChange: function (e) { return _this.changeInputValue(e); } }),
                                        React.createElement("span", { className: 'form__input__label' }, errors.email ? errors.email : 'E-mail'),
                                        React.createElement("div", { className: 'form__input__bar' })))),
                            React.createElement("div", { className: 'form__row form__row--second' },
                                React.createElement("div", { className: 'form__selectInput' },
                                    React.createElement("select", { onChange: function (e) { return _this.changeInputValue(e); }, value: location, name: "location", defaultValue: '' },
                                        React.createElement("option", { value: '', disabled: true }, "Lokalita kde chcete pracovat"),
                                        React.createElement("option", { value: '1' }, "1"),
                                        React.createElement("option", { value: '2' }, "2"),
                                        React.createElement("option", { value: '3' }, "3"),
                                        React.createElement("option", { value: '4' }, "4")),
                                    React.createElement("div", { className: 'form__input__bar' })),
                                React.createElement("div", { className: 'form__inputBtn' },
                                    React.createElement("button", { onClick: function (e) {
                                            e.preventDefault();
                                            _this.onChooseFile();
                                        } },
                                        "Nahr\u00E1t \u017Eivotopis",
                                        React.createElement("span", null,
                                            React.createElement(SvgIcon_1.default, { name: "download" }))),
                                    React.createElement("input", { type: "file", name: "file", ref: function (ref) { return (_this.fileRef = ref); }, onChange: function (e) { return _this.onChangeFile(e); }, style: { display: 'none' } }),
                                    React.createElement("div", { className: 'form__input__bar' }),
                                    file && file.name && React.createElement("p", null, file.name))),
                            React.createElement("div", { className: "form__textarea  " + (errors.message ? 'error' : '') + " " },
                                React.createElement("label", null, errors.message ? errors.message : 'Průvodní dopis'),
                                React.createElement("textarea", { name: "message", onChange: function (e) { return _this.changeInputValue(e); }, value: message })),
                            React.createElement("div", { className: 'form__terms' },
                                React.createElement("div", null,
                                    React.createElement("input", { className: 'checkbox', id: "styled-checkbox-1", type: "checkbox", checked: agreement, onChange: function (e) { return _this.toggleAgreement(); } }),
                                    React.createElement("label", { htmlFor: "styled-checkbox-1" })),
                                React.createElement("div", null,
                                    "Souhlas\u00EDm se ",
                                    React.createElement(Link_1.default, __assign({}, gdprLink), "zpracov\u00E1n\u00EDm osobn\u00EDch"),
                                    " \u00FAdaj\u016F.")),
                            React.createElement("div", { className: 'flexRow flexAlign--center' },
                                React.createElement("button", { className: "btn--blueBkg", type: "submit", disabled: !_this.state.formValues.agreement }, "Odeslat")),
                            React.createElement("div", { className: 'form__messageHolder' },
                                formStatus === 'error' && (React.createElement("div", { className: 'form__message form__message--error' },
                                    React.createElement("p", null, "There was an error."),
                                    _this.state.formErrorMessage && React.createElement("p", null, _this.state.formErrorMessage))),
                                formStatus === 'success' && (React.createElement("div", { className: 'form__message form__message--success' }, "Thank You for contacting us.")))))));
            })));
    };
    return CareerForm;
}(React.Component));
exports.default = CareerForm;
var templateObject_1;
//# sourceMappingURL=CareerForm.js.map