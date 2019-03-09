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
var TemporaryPopup = /** @class */ (function (_super) {
    __extends(TemporaryPopup, _super);
    function TemporaryPopup(props) {
        var _this = _super.call(this, props) || this;
        _this.close = function () {
            _this.setState({
                active: !_this.state.active,
            });
        };
        _this.state = {
            active: true,
            // tslint:disable-next-line:max-line-length
            text: 'Vážení návštěvníci, právě jste se dostali na vývojovou verzi webu a informace na něm mohou být neúplné a nepřesné. Tato verze webu slouží pouze pro pracovní účely marketingu a nelze podle něj vyvozovat žádné informace. Pokud chcete získat informace o našich provozech, prosím přejděte na: '
        };
        return _this;
    }
    TemporaryPopup.prototype.render = function () {
        return (React.createElement("div", { className: "temporaryPopup " + (this.state.active ? '' : 'temporaryPopup--disabled') + " " },
            React.createElement("i", { className: 'temporaryPopup__close', onClick: this.close }),
            React.createElement("p", null,
                this.state.text,
                React.createElement("a", { href: "http://www.mediconas.cz/" }, "mediconas.cz"),
                ". D\u011Bkujeme.")));
    };
    return TemporaryPopup;
}(React.Component));
export default TemporaryPopup;
//# sourceMappingURL=TemporaryPopup.js.map