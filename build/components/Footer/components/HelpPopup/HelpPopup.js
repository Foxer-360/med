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
var HelpPopup = /** @class */ (function (_super) {
    __extends(HelpPopup, _super);
    function HelpPopup(props) {
        var _this = _super.call(this, props) || this;
        _this.toggleList = function () {
            _this.setState({
                active: !_this.state.active,
            });
        };
        _this.state = {
            active: false,
        };
        return _this;
    }
    HelpPopup.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "helpPopup " + (this.state.active ? 'helpPopup--active' : '') + " " },
            React.createElement("div", { className: 'helpPopup__main', style: { backgroundImage: 'url(/assets/medicon/images/phone2.png)' }, onClick: function () { return _this.toggleList(); } },
                React.createElement("h4", null, "Pot\u0159ebujete poradit")),
            React.createElement("ul", { className: 'helpPopup__list' },
                React.createElement("li", { style: { backgroundImage: 'url(/assets/medicon/images/phone2.png)' } },
                    React.createElement("p", null, "Poliklinika Bud\u011Bjovick\u00E1"),
                    React.createElement("a", { href: "tel:+420261006111" }, "+420 261 006 111")),
                React.createElement("li", { style: { backgroundImage: 'url(/assets/medicon/images/phone2.png)' } },
                    React.createElement("p", null, "Poliklinika Zelen\u00FD pruh"),
                    React.createElement("a", { href: "tel:+420234105111" }, "+420 234 105 111")),
                React.createElement("li", { style: { backgroundImage: 'url(/assets/medicon/images/phone2.png)' } },
                    React.createElement("p", null, "Poliklinika Vyso\u010Dany"),
                    React.createElement("a", { href: "tel:+420266006211" }, "+420 266 006 211")),
                React.createElement("li", { style: { backgroundImage: 'url(/assets/medicon/images/phone2.png)' } },
                    React.createElement("p", null, "Poliklinika Hole\u0161ovice"),
                    React.createElement("a", { href: "tel:+420227777677" }, "+420 227 777 677")))));
    };
    return HelpPopup;
}(React.Component));
export default HelpPopup;
//# sourceMappingURL=HelpPopup.js.map