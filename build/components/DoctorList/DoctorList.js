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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var List_1 = require("../List");
var Link_1 = require("../../partials/Link");
var Media_1 = require("../../partials/Media");
var Select_1 = require("../../partials/Select");
var Button_1 = require("../../partials/Button");
var removeAccents = require("remove-accents");
var graphql_tag_1 = require("graphql-tag");
var react_apollo_1 = require("react-apollo");
var GET_CONTEXT = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client\n  }\n"], ["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client\n  }\n"])));
var DoctorList = /** @class */ (function (_super) {
    __extends(DoctorList, _super);
    function DoctorList(props) {
        var _this = _super.call(this, props) || this;
        _this.getLink = function (data, slug) {
            if (slug === undefined) {
                slug = '';
            }
            var link = "/" + (data.languageData && data.languageData.code) + "/" + slug.trim();
            return link;
        };
        _this.getPolyclinicUrls = function (polyclinicName, polyclinicUrl, data) {
            var polyclinicsNames = polyclinicName ? polyclinicName.split(',') : '';
            var polyclinicsUrls = polyclinicUrl ? polyclinicUrl.split(',') : '';
            var polyclinics = [];
            if (polyclinicsNames) {
                polyclinicsNames.map(function (name) {
                    polyclinics.push(polyclinicsUrls[polyclinicsNames.indexOf(name)] ?
                        (React.createElement(React.Fragment, null,
                            React.createElement(Link_1.default, { url: _this.getLink(data, polyclinicsUrls[polyclinicsNames.indexOf(name)]), className: 'doctorList__item__info__link' }, name.trim()),
                            polyclinicsNames.indexOf(name) < (polyclinicsNames.length - 1) ? ', ' : '')) :
                        name.trim());
                });
                return polyclinics;
            }
        };
        _this.getExpertiseUrl = function (expertiseName, expertiseUrl, data) {
            if (expertiseUrl.trim() !== '') {
                return (React.createElement("p", null,
                    React.createElement(Link_1.default, { url: _this.getLink(data, expertiseUrl) }, expertiseName)));
            }
            else {
                return (React.createElement("p", null, expertiseName));
            }
        };
        _this.state = {
            numberOfPage: 1,
            filter: ''
        };
        _this.handleChangeSelect = _this.handleChangeSelect.bind(_this);
        return _this;
    }
    DoctorList.prototype.componentDidMount = function () {
        var search = this.props.location.search;
        if (search.length > 0) {
            this.setFilterBySearchParam(search.split('=')[1]);
        }
    };
    DoctorList.prototype.handleChangeSelect = function (event) {
        var history = this.props.history;
        var slug = removeAccents(event.target.value).toLowerCase().replace(/[\W_]+/g, '-');
        this.setFilterBySearchParam(slug);
    };
    DoctorList.prototype.getCurrentPolyclinic = function (current, items) {
        var polyclinics = this.getUniquePolyclinicNames(items);
        if (Array.isArray(polyclinics) && current.length > 0) {
            var polyclinic = polyclinics.find(function (pol) { return pol.indexOf(current) > -1; }) || '';
            return polyclinic;
        }
        return undefined;
    };
    DoctorList.prototype.getUniquePolyclinicNames = function (items) {
        var names = items.map(function (item) { return item.clinicName
            .replace(/Poliklinika /g, '')
            .trim()
            .split(','); });
        var flatAndSplitNames = __spread(names
            .toString()
            .split(','));
        var polyclinicNames = flatAndSplitNames.map(function (item) { return 'Poliklinika '.concat(item.trim()); });
        var uniquePolyclinicNames = __spread(new Set(polyclinicNames));
        return uniquePolyclinicNames;
    };
    DoctorList.prototype.setFilterBySearchParam = function (param) {
        switch (true) {
            case /(vysocany)/.test(param):
                this.setState({ filter: 'Vysočany' });
                break;
            case /(benesov)/.test(param):
                this.setState({ filter: 'Benešov' });
                break;
            case /(budejovicka)/.test(param):
                this.setState({ filter: 'Budějovická' });
                break;
            case /(zeleny-pruh)/.test(param):
                this.setState({ filter: 'Zelený pruh' });
                break;
            case /holesovice/.test(param):
                this.setState({ filter: 'Holešovice' });
                break;
            case /(zahradni-mesto)/.test(param):
                this.setState({ filter: 'Zahradní Město' });
                break;
            default:
                this.setState({ filter: '' });
                break;
        }
    };
    DoctorList.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, doctors = _a.doctors, title = _a.title, excludedDoctor = _a.excludedDoctor;
        return (React.createElement(List_1.default, { data: doctors, searchedText: this.state.filter, exclude: { key: 'name', value: excludedDoctor }, searchKeys: ['clinicName'] }, function (_a) {
            var getPage = _a.getPage, allData = _a.allData;
            var _b = getPage(_this.state.numberOfPage, 'infinite', 6), items = _b.items, lastPage = _b.lastPage, allItems = _b.allItems;
            return items && items.length > 0 ? (React.createElement("section", { className: 'doctorList' },
                React.createElement("div", { className: 'container' },
                    title && React.createElement("h3", null, title),
                    React.createElement(Select_1.default, { value: _this.getCurrentPolyclinic(_this.state.filter, allData), className: 'hCenterBlock', onChange: _this.handleChangeSelect, defaultValue: 'Všechny polikliniky', items: _this.getUniquePolyclinicNames(allData) }),
                    React.createElement("div", { className: "doctorList__wrapper" }, items &&
                        items.map(function (doctor, index) {
                            return (React.createElement("div", { className: 'doctorList__item', key: index },
                                React.createElement("div", { className: 'doctorList__item__img' }, (doctor.image && doctor.image.filename &&
                                    React.createElement(Media_1.default, { data: doctor.image, type: "image", width: '190', height: '190' })) || (React.createElement("img", { className: "avatarImg", src: '../../../assets/medicon/images/doctorIcon.svg', alt: "Medicon Doctor Icon" }))),
                                React.createElement(react_apollo_1.Query, { query: GET_CONTEXT }, function (_a) {
                                    var data = _a.data;
                                    return (React.createElement("div", { className: 'doctorList__item__info' },
                                        React.createElement("h3", null, doctor.name),
                                        doctor.expertiseName
                                            && React.createElement("div", { className: 'doctorList__item__info__description' },
                                                React.createElement("div", { className: 'doctorList__item__info__description--container' }, _this.getExpertiseUrl(doctor.expertiseName, doctor.expertiseUrl, data))),
                                        React.createElement("p", { className: 'doctorList__item__info--mobileField' }, doctor.expertiseName),
                                        React.createElement("a", { className: 'doctorList__item__info__link' }, _this.getPolyclinicUrls(doctor.polyclinicName, doctor.polyclinicUrl, data)),
                                        doctor.doctorUrl
                                            && doctor.doctorUrl.url
                                            && React.createElement(Button_1.default, { classes: "btn--blueBorder btn--small", url: doctor.doctorUrl }, "v\u00EDce informac\u00ED")));
                                })));
                        })),
                    _this.state.numberOfPage < lastPage && React.createElement("div", { className: "doctorList__btnHolder" },
                        React.createElement("button", { className: 'btn btn--blueBkg', onClick: function () { return _this.setState({ numberOfPage: lastPage }); } }, "zobrazit v\u00EDce"))))) : React.createElement(React.Fragment, null);
        }));
    };
    return DoctorList;
}(React.Component));
exports.default = react_router_dom_1.withRouter(DoctorList);
var templateObject_1;
//# sourceMappingURL=DoctorList.js.map