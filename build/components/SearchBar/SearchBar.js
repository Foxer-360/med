"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var moment_1 = require("moment");
var debounce_1 = require("lodash/debounce");
var SvgIcon_1 = require("@source/partials/SvgIcon");
var List_1 = require("@source/components/List");
var Link_1 = require("@source/partials/Link");
var doctorSearchResultsTemplate = {
    datasourceId: 'cjrkew3eu02gp0d71xoi0i5em',
    data: {
        name: '%doctorPersonalInformation,firstName% %doctorPersonalInformation,lastName% ',
        speciality: '%doctorPersonalInformation,expertises,0,name% ',
        clinic: '%doctorPersonalInformation,polyclinic,name% ',
        workingHours: '%doctorPersonalInformation,workingHours% ',
        link: {
            url: '/medicon/cs/ds:doctor',
            pageId: 'cjoy8qfdl001b0845fwgt2200',
            urlNewWindow: false,
        },
    },
    filters: [],
};
var SearchBar = /** @class */ (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar(props) {
        var _this = _super.call(this, props) || this;
        _this.handleFocus = function () {
            _this.setState({
                focused: !_this.state.focused,
            });
        };
        _this.searchBar = React.createRef();
        _this.state = { focused: false, query: '' };
        _this.handleClick = _this.handleClick.bind(_this);
        _this.input = React.createRef();
        _this.changeSearchQuery = debounce_1.default(_this.changeSearchQuery, 300).bind(_this);
        return _this;
    }
    SearchBar.prototype.componentDidMount = function () {
        document.addEventListener('click', this.handleClick, false);
    };
    SearchBar.prototype.componentWillUnmount = function () {
        document.removeEventListener('click', this.handleClick, false);
    };
    // tslint:disable-next-line:typedef
    SearchBar.prototype.changeSearchQuery = function (query) {
        this.setState({
            query: query,
        });
    };
    SearchBar.prototype.handleClick = function (e) {
        if (this.searchBar.current && this.searchBar && this.searchBar.current.contains(e.target)) {
            return;
        }
        else {
            this.changeSearchQuery('');
        }
    };
    SearchBar.prototype.render = function () {
        var _this = this;
        var _a = this.props, placeholder = _a.placeholder, barColor = _a.barColor;
        var doctorSearchResults = __assign({}, doctorSearchResultsTemplate);
        if (this.props.doctorsLink) {
            doctorSearchResults = __assign({}, doctorSearchResults, { data: __assign({}, doctorSearchResults.data, { link: this.props.doctorsLink }) });
        }
        return (React.createElement("div", { className: "searchBar " + (this.state.focused ? 'searchBar--focused' : '') + " searchBar--" + barColor, ref: this.searchBar },
            React.createElement("div", { className: 'searchBar__input' },
                React.createElement("input", { type: "text", placeholder: placeholder, onFocus: function () { return _this.handleFocus(); }, onBlur: function () { return _this.handleFocus(); }, onChange: function (e) { return _this.changeSearchQuery(e.target.value); }, ref: this.input }),
                React.createElement(SvgIcon_1.default, { name: 'search', type: barColor })),
            React.createElement("div", { className: "searchBar__bar" }),
            this.state.query.length > 2 &&
                React.createElement("div", { className: "searchBarResults " + (this.state.query.length > 2 ? 'active' : '') },
                    React.createElement(List_1.default, { data: doctorSearchResults, searchedText: this.state.query }, function (_a) {
                        var data = _a.data;
                        if (data.length > 0) {
                            return (React.createElement("ul", { className: 'searchBarResults__doctors' }, data
                                .map(function (item) {
                                var workingHours = null;
                                try {
                                    workingHours = JSON.parse(item.workingHours);
                                }
                                catch (e) {
                                    console.log('error', e);
                                }
                                return __assign({}, item, { isDoctorActive: _this.isDoctorActive(workingHours) });
                            })
                                .sort(function (a, b) { return (a.isDoctorActive === true ? -1 : 1); })
                                .map(function (doctor, i) {
                                return (React.createElement("li", { key: i, className: doctor.isDoctorActive ? 'active' : '' },
                                    React.createElement(Link_1.default, __assign({}, doctor.link),
                                        React.createElement("span", null,
                                            React.createElement("p", null,
                                                React.createElement("span", null, doctor.name),
                                                React.createElement("span", { style: doctor.isDoctorActive ?
                                                        { color: '#31a031' } :
                                                        { color: '#c23636' } }, doctor.isDoctorActive ? 'ordinuje' : 'Dnes již neordinuje')),
                                            React.createElement("p", null, doctor.speciality)),
                                        React.createElement("span", null, doctor.clinic))));
                            })));
                        }
                        else {
                            return (React.createElement("div", { className: 'searchBarResults__noResults' }, "Bohu\u017Eel jsme nena\u0161li \u017E\u00E1dn\u00E9 v\u00FDsledeky."));
                        }
                    }),
                    this.props.blogSearchResults && this.state.query.length > 2 && (React.createElement(List_1.default, { data: this.props.blogSearchResults, searchedText: this.state.query }, function (_a) {
                        var data = _a.data;
                        if (data.length > 0) {
                            return (React.createElement("ul", { className: 'searchBarResults__blog' },
                                React.createElement("label", null, "Mo\u017En\u00E1 jste hledali:"),
                                data.map(function (blogItem, i) { return (React.createElement("li", { key: i },
                                    React.createElement(Link_1.default, __assign({}, blogItem.link),
                                        React.createElement("div", null,
                                            React.createElement("h4", null, blogItem.title),
                                            React.createElement("p", null, blogItem.perex))))); })));
                        }
                        else {
                            return (React.createElement(React.Fragment, null));
                        }
                    })))));
    };
    SearchBar.prototype.getWeekDayKey = function () {
        var day;
        switch (moment_1.default().isoWeekday()) {
            case 1:
                day = 'mo';
                break;
            case 2:
                day = 'tu';
                break;
            case 3:
                day = 'we';
                break;
            case 4:
                day = 'th';
                break;
            case 5:
                day = 'fr';
                break;
            case 6:
                day = 'st';
                break;
            case 7:
                day = 'su';
                break;
            default:
                day = 'mo';
                break;
        }
        return day;
    };
    SearchBar.prototype.isDoctorActive = function (workingHours) {
        var weekDayKey = this.getWeekDayKey();
        if (workingHours &&
            workingHours.weeks &&
            workingHours.weeks[0] &&
            workingHours.weeks[0].days &&
            workingHours.weeks[0].days[weekDayKey] &&
            workingHours.weeks[0].days[weekDayKey] &&
            workingHours.weeks[0].days[weekDayKey] &&
            workingHours.weeks[0].days[weekDayKey].length > 0 &&
            workingHours.weeks[0].days[weekDayKey].length > 0) {
            return workingHours.weeks[0].days[weekDayKey].some(function (doctorWorkingHours) {
                var regex = /^\s*([0-9]{2}):([0-9]{2})\s*$/;
                var from = regex.exec(doctorWorkingHours.from);
                var to = regex.exec(doctorWorkingHours.to);
                if (from && from[1] && from[2] && to && to[1] && to[2]) {
                    var startOfShift = moment_1.default()
                        .startOf('day')
                        .add(from[1], 'hours')
                        .add(from[2], 'minutes');
                    var endOfShift = moment_1.default()
                        .startOf('day')
                        .add(to[1], 'hours')
                        .add(to[2], 'minutes');
                    var now = moment_1.default();
                    if (now.isSameOrBefore(endOfShift) && now.isSameOrAfter(startOfShift)) {
                        return true;
                    }
                }
                return false;
            });
        }
        return false;
    };
    return SearchBar;
}(React.Component));
exports.default = SearchBar;
//# sourceMappingURL=SearchBar.js.map