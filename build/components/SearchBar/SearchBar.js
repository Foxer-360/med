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
import SvgIcon from '@source/partials/SvgIcon';
import List from '@source/components/List';
import Link from '@source/partials/Link';
import moment from 'moment';
import debounce from 'lodash/debounce';
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
        _this.changeSearchQuery = debounce(_this.changeSearchQuery, 300).bind(_this);
        return _this;
    }
    SearchBar.prototype.componentDidMount = function () {
        document.addEventListener('click', this.handleClick, false);
    };
    SearchBar.prototype.componentWillUnmount = function () {
        document.removeEventListener('click', this.handleClick, false);
    };
    SearchBar.prototype.changeSearchQuery = function (query) {
        this.setState({
            query: query,
        });
    };
    SearchBar.prototype.handleClick = function (e) {
        if (this.searchBar.current.contains(e.target)) {
            return;
        }
        else {
            this.changeSearchQuery('');
        }
    };
    SearchBar.prototype.render = function () {
        var _this = this;
        var _a = this.props, placeholder = _a.placeholder, barColor = _a.barColor;
        return (React.createElement("div", { className: "searchBar " + (this.state.focused ? 'searchBar--focused' : '') + " searchBar--" + barColor, ref: this.searchBar },
            React.createElement("div", { className: 'searchBar__input' },
                React.createElement("input", { type: "text", placeholder: placeholder, onFocus: function () { return _this.handleFocus(); }, onBlur: function () { return _this.handleFocus(); }, onChange: function (e) { return _this.changeSearchQuery(e.target.value); }, ref: this.input }),
                React.createElement(SvgIcon, { name: 'search', type: barColor })),
            React.createElement("div", { className: "searchBar__bar" }),
            React.createElement("div", { className: "searchBarResults " + (this.state.query.length !== 0 ? 'active' : '') },
                this.props.doctorSearchResults && (React.createElement(List, { data: this.props.doctorSearchResults, searchedText: this.state.query }, function (_a) {
                    var data = _a.data;
                    if (data.length > 0) {
                        return (React.createElement("ul", { className: 'searchBarResults__doctors' }, data.map(function (doctor, i) {
                            var workingHours = {};
                            try {
                                workingHours = JSON.parse(doctor.workingHours);
                            }
                            catch (e) { }
                            return (React.createElement("li", { key: i, className: _this.isDoctorActive(workingHours) ? 'active' : '' },
                                React.createElement(Link, __assign({}, doctor.link),
                                    React.createElement("span", null,
                                        React.createElement("p", null, doctor.name),
                                        React.createElement("p", null, doctor.speciality)),
                                    React.createElement("span", null, doctor.clinic))));
                        })));
                    }
                    else {
                        return React.createElement("div", { className: 'searchBarResults__noResults' }, "No Results!");
                    }
                })),
                React.createElement("hr", null),
                this.props.blogSearchResults && (React.createElement(List, { data: this.props.blogSearchResults, searchedText: this.state.query }, function (_a) {
                    var data = _a.data;
                    if (data.length > 0) {
                        return (React.createElement("ul", { className: 'searchBarResults__blog' },
                            React.createElement("label", null, "Blog:"),
                            data.map(function (blogItem, i) { return (React.createElement("li", { key: i },
                                React.createElement(Link, __assign({}, blogItem.link),
                                    React.createElement("div", null,
                                        React.createElement("h4", null, blogItem.title),
                                        React.createElement("p", null, blogItem.perex))))); })));
                    }
                    else {
                        return React.createElement("div", { className: 'searchBarResults__noResults' }, "No Results!");
                    }
                })))));
    };
    SearchBar.prototype.getWeekDayKey = function () {
        var day;
        switch (moment().isoWeekday()) {
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
                    var startOfShift = moment()
                        .startOf('day')
                        .add(from[1], 'hours')
                        .add(from[2], 'minutes');
                    var endOfShift = moment()
                        .startOf('day')
                        .add(to[1], 'hours')
                        .add(to[2], 'minutes');
                    var now = moment();
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
export default SearchBar;
//# sourceMappingURL=SearchBar.js.map