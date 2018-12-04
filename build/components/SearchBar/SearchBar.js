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
import SearchIcon from '../Svg/SearchIcon';
var SearchBar = /** @class */ (function (_super) {
    __extends(SearchBar, _super);
    function SearchBar(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    SearchBar.prototype.render = function () {
        var _a = this.props, placeholder = _a.placeholder, barColor = _a.barColor;
        return (React.createElement("div", { className: 'searchBar' },
            React.createElement("div", { className: 'searchBar__input' },
                React.createElement("input", { type: "text", placeholder: placeholder }),
                React.createElement(SearchIcon, { name: 'lightBlue' })),
            React.createElement("div", { className: "searchBar__bar searchBar__bar--" + barColor })));
    };
    return SearchBar;
}(React.Component));
export default SearchBar;
//# sourceMappingURL=SearchBar.js.map