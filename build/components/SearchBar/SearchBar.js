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
import * as React from 'react';
import SvgIcon from '@source/partials/SvgIcon';
import Media from '@source/partials/Media';
import List from '@source/components/List';
var SearchBar = /** @class */ (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar(props) {
        var _this = _super.call(this, props) || this;
        _this.handleFocus = function () {
            _this.setState({
                focused: !_this.state.focused,
            });
        };
        _this.changeSearchQuery = function (query) {
            _this.setState({
                query: query,
            });
        };
        _this.searchBar = React.createRef();
        _this.state = { focused: false, query: '' };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }
    SearchBar.prototype.componentDidMount = function () {
        document.addEventListener('click', this.handleClick, false);
    };
    SearchBar.prototype.componentWillUnmount = function () {
        document.removeEventListener('click', this.handleClick, false);
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
                React.createElement("input", { type: "text", placeholder: placeholder, onFocus: function () { return _this.handleFocus(); }, onBlur: function () { return _this.handleFocus(); }, onChange: function (e) { return _this.changeSearchQuery(e.target.value); }, value: this.state.query }),
                React.createElement(SvgIcon, { name: 'search', type: barColor })),
            React.createElement("div", { className: "searchBar__bar" }),
            React.createElement("div", { className: "searchBarResults " + (this.state.query.length !== 0 ? 'active' : '') },
                this.props.doctorSearchResults && (React.createElement(List, { data: this.props.doctorSearchResults }, function (_a) {
                    var data = _a.data;
                    if (data) {
                        return (React.createElement("ul", { className: 'searchBarResults__doctors' }, data.map(function (doctor, i) { return (React.createElement("li", { className: doctor.active ? 'active' : '', key: i },
                            React.createElement("span", null,
                                React.createElement("p", null, doctor.name),
                                React.createElement("p", null, doctor.speciality)),
                            React.createElement("span", null, doctor.clinic))); })));
                    }
                })),
                React.createElement("hr", null),
                this.props.blogSearchResults && (React.createElement(List, { data: this.props.blogSearchResults }, function (_a) {
                    var data = _a.data;
                    if (data) {
                        return (React.createElement("ul", { className: 'searchBarResults__blog' },
                            data.length > 0 && React.createElement("label", null, "Blog:"),
                            data.map(function (blogItem, i) { return (React.createElement("li", { key: i },
                                React.createElement("div", null, blogItem.image && React.createElement(Media, { type: "", data: blogItem.image })),
                                React.createElement("div", null,
                                    React.createElement("h4", null, blogItem.title),
                                    React.createElement("p", null, blogItem.perex)))); })));
                    }
                })))));
    };
    return SearchBar;
}(React.Component));
export default SearchBar;
//# sourceMappingURL=SearchBar.js.map