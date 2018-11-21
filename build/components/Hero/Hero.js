var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import SearchBar from '../SearchBar/SearchBar';
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hero.prototype.render = function () {
        return (React.createElement("div", { className: "fullWidthContainer" },
            React.createElement("section", { className: 'hero' },
                React.createElement("div", { className: 'container' },
                    React.createElement("h1", null, "title"),
                    React.createElement("div", { className: 'hero__text' }, "\u0158e\u0161en\u00ED pro ka\u017Ed\u00FD zdravotn\u00ED probl\u00E9m naleznete v na\u0161ich poliklinik\u00E1ch."),
                    React.createElement(SearchBar, { placeholder: 'Hledám odbornost', barColor: 'lightBlue' })))));
    };
    return Hero;
}(React.Component));
export default Hero;
//# sourceMappingURL=Hero.js.map