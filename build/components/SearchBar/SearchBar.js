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
var lodash_1 = require("lodash");
var SvgIcon_1 = require("../../partials/SvgIcon");
var BlogSearchResults_1 = require("./components/BlogSearchResults");
var DoctorSearchResults_1 = require("./components/DoctorSearchResults");
var doctorSearchResultsTemplate = {
    datasourceId: 'cjrkew3eu02gp0d71xoi0i5em',
    data: {
        // tslint:disable-next-line: max-line-length
        name: '%doctorPersonalInformation,prenominal% %doctorPersonalInformation,firstName% %doctorPersonalInformation,lastName% %doctorPersonalInformation,postnominal%',
        speciality: '%doctorPersonalInformation,expertises,0,name% ',
        clinic: '%doctorPersonalInformation,polyclinic,name% ',
        workingHours: '%doctorPersonalInformation,workingHours% ',
        link: {
            url: '/cs/ds:doctor',
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
        _this.state = {
            query: '',
            focused: false,
            doctorResults: null,
            blogResults: null
        };
        _this.input = React.createRef();
        _this.searchBar = React.createRef();
        _this.checkDoctorResults = lodash_1.debounce(_this.checkDoctorResults, 50).bind(_this);
        _this.checkBlogResults = lodash_1.debounce(_this.checkBlogResults, 50).bind(_this);
        _this.handleClick = _this.handleClick.bind(_this);
        _this.clearData = lodash_1.debounce(_this.clearData, 600).bind(_this);
        _this.changeSearchQuery = lodash_1.debounce(_this.changeSearchQuery, 600).bind(_this);
        return _this;
    }
    SearchBar.prototype.componentDidMount = function () {
        document.addEventListener('click', this.handleClick, false);
    };
    SearchBar.prototype.componentWillUnmount = function () {
        document.removeEventListener('click', this.handleClick, false);
    };
    SearchBar.prototype.checkDoctorResults = function (doctorResults) {
        if (doctorResults !== this.state.doctorResults) {
            return this.setState({ doctorResults: doctorResults });
        }
    };
    SearchBar.prototype.checkBlogResults = function (blogResults) {
        if (blogResults !== this.state.blogResults) {
            return this.setState({ blogResults: blogResults });
        }
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
    SearchBar.prototype.clearData = function () {
        this.setState({ focused: false, query: '' });
        if (this.input.current) {
            this.input.current.value = '';
        }
    };
    SearchBar.prototype.renderNoResults = function () {
        if (!this.state.doctorResults && !this.state.blogResults) {
            return (React.createElement("div", { className: 'searchBarResults__noResults' }, "Bohu\u017Eel jsme nena\u0161li \u017E\u00E1dn\u00E9 vysledky."));
        }
        else {
            return React.createElement(React.Fragment, null);
        }
    };
    SearchBar.prototype.render = function () {
        var _this = this;
        var _a = this.props, placeholder = _a.placeholder, barColor = _a.barColor;
        var doctorSearchResults = __assign({}, doctorSearchResultsTemplate);
        if (this.props.doctorsLink) {
            doctorSearchResults = __assign({}, doctorSearchResults, { data: __assign({}, doctorSearchResults.data, { link: this.props.doctorsLink }) });
        }
        return (React.createElement("div", { ref: this.searchBar, className: "searchBar " + (this.state.focused ? 'searchBar--focused' : '') + " searchBar--" + barColor },
            React.createElement("div", { className: 'searchBar__input' },
                React.createElement("input", { type: "text", ref: this.input, placeholder: placeholder, onFocus: function () { return _this.handleFocus(); }, onBlur: function () { return _this.handleFocus(); }, onChange: function (e) { return _this.changeSearchQuery(e.target.value); } }),
                React.createElement(SvgIcon_1.default, { name: 'search', type: barColor })),
            React.createElement("div", { className: "searchBar__bar" }),
            this.state.query.length > 1 &&
                React.createElement("div", { className: "searchBarResults " + (this.state.query.length > 1 ? 'active' : '') },
                    this.props.blogSearchResults && this.state.query.length > 1 && (React.createElement(BlogSearchResults_1.default, { query: this.state.query, searchKeys: [
                            'pi.page.name',
                            'pi.page.annotations.perex',
                            'pi.page.annotations.title'
                        ], searchResults: this.props.blogSearchResults, checkBlogResults: this.checkBlogResults })),
                    doctorSearchResults && this.state.query.length > 1 && (React.createElement(DoctorSearchResults_1.default, { searchResults: doctorSearchResults, query: this.state.query, searchKeys: [
                            'di.doctorPersonalInformation.firstName',
                            'di.doctorPersonalInformation.lastName',
                            'di.doctorPersonalInformation.expertises.0.name',
                            'di.doctorPersonalInformation.polyclinic.name',
                            'di.doctorPersonalInformation.prenominal',
                            'di.doctorPersonalInformation.postnominal'
                        ], clearData: this.clearData, checkDoctorResults: this.checkDoctorResults })),
                    this.renderNoResults())));
    };
    return SearchBar;
}(React.Component));
exports.default = SearchBar;
//# sourceMappingURL=SearchBar.js.map