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
import Avatar from './components/Avatar';
import SvgIcon from '@source/partials/SvgIcon';
var specializations = [
    {
        name: 'alergologie a imunologie',
        head: true,
        chest: false,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: true,
    },
    {
        name: 'angiologie (cévní)',
        head: false,
        chest: false,
        belly: false,
        arm: false,
        legs: true,
        feet: false,
        body: true,
    },
    {
        name: 'audiometrie',
        head: true,
        chest: false,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: false,
    },
    {
        name: 'dermarologie (kožní)',
        head: true,
        chest: false,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: true,
    },
    {
        name: 'diabetologie',
        head: false,
        chest: false,
        belly: true,
        arm: false,
        legs: false,
        feet: false,
        body: true,
    },
    {
        name: 'domácí péče (Home Care)',
        head: false,
        chest: false,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: true,
    },
    {
        name: 'EEG',
        head: true,
        chest: false,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: false,
    },
    {
        name: 'EKG',
        head: false,
        chest: true,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: false,
    },
    {
        name: 'EMG',
        head: true,
        chest: true,
        belly: false,
        arm: true,
        legs: false,
        feet: false,
        body: false,
    },
    {
        name: 'endokrinologie',
        head: false,
        chest: false,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: true,
    },
    {
        name: 'foniatrie',
        head: true,
        chest: false,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: false,
    },
    {
        name: 'gastroenterologie',
        head: false,
        chest: false,
        belly: true,
        arm: false,
        legs: false,
        feet: false,
        body: false,
    },
    {
        name: 'gynekologie',
        head: false,
        chest: false,
        belly: true,
        arm: false,
        legs: false,
        feet: false,
        body: false,
    },
    {
        name: 'chirurgie (proktologie)',
        head: false,
        chest: false,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: true,
    },
    {
        name: 'infuzní terapie',
        head: false,
        chest: false,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: true,
    },
    {
        name: 'interna (a geriatrie)',
        head: false,
        chest: false,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: true,
    },
    {
        name: 'kalmetizace',
        head: false,
        chest: false,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: true,
    },
    {
        name: 'kardiologie (a EKG)',
        head: false,
        chest: true,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: false,
    },
    {
        name: 'lymfodrenáže',
        head: false,
        chest: false,
        belly: false,
        arm: false,
        legs: true,
        feet: false,
        body: false,
    },
    {
        name: 'Mammacentrum',
        head: false,
        chest: true,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: false,
    },
    {
        name: 'mas�e',
        head: false,
        chest: false,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: true,
    },
    {
        name: 'neurologie',
        head: true,
        chest: true,
        belly: false,
        arm: true,
        legs: true,
        feet: false,
        body: false,
    },
    {
        name: 'neurologie - dětská',
        head: true,
        chest: false,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: false,
    },
    {
        name: 'oční - dětské',
        head: true,
        chest: false,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: false,
    },
    {
        name: 'ORL',
        head: true,
        chest: false,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: false,
    },
    {
        name: 'ortopedie',
        head: false,
        chest: false,
        belly: false,
        arm: false,
        legs: true,
        feet: true,
        body: false,
    },
    {
        name: 'osteologie',
        head: false,
        chest: false,
        belly: false,
        arm: true,
        legs: true,
        feet: false,
        body: true,
    },
    {
        name: 'pediatrie (dětský praktický lékař)',
        head: false,
        chest: false,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: true,
    },
    {
        name: 'plicní (pneumologie)',
        head: false,
        chest: true,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: true,
    },
    {
        name: 'praktický lékař',
        head: false,
        chest: false,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: true,
    },
    {
        name: 'psychiatrie',
        head: true,
        chest: false,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: false,
    },
    {
        name: 'psychologie',
        head: true,
        chest: false,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: false,
    },
    {
        name: 'RDG a zobrazovací metody',
        head: false,
        chest: false,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: true,
    },
    {
        name: 'revmatologie',
        head: false,
        chest: false,
        belly: false,
        arm: true,
        legs: true,
        feet: true,
        body: false,
    },
    {
        name: 'urologie',
        head: false,
        chest: false,
        belly: true,
        arm: false,
        legs: false,
        feet: false,
        body: false,
    },
    {
        name: 'Onkologie',
        head: false,
        chest: false,
        belly: false,
        arm: false,
        legs: false,
        feet: false,
        body: true,
    },
    {
        name: 'reprodukční medicína',
        head: false,
        chest: false,
        belly: true,
        arm: false,
        legs: false,
        feet: false,
        body: false,
    },
];
var MyProblem = /** @class */ (function (_super) {
    __extends(MyProblem, _super);
    function MyProblem(props) {
        var _this = _super.call(this, props) || this;
        _this.clickArea = function (area) {
            var availableSpecializations = [];
            for (var i = 0; i < specializations.length; i++) {
                if (specializations[i][area] === true) {
                    availableSpecializations.push(specializations[i]);
                }
            }
            _this.setState({
                availableSpecializations: availableSpecializations,
                area: area,
            });
        };
        _this.closeInfoBox = function () {
            _this.setState({
                area: '',
            });
        };
        _this.state = {
            area: '',
            availableSpecializations: null,
        };
        return _this;
    }
    MyProblem.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "container" },
            React.createElement("section", { className: 'myProblem' },
                React.createElement("h3", null, "M\u016Fj Probl\u00E9m se t\u00FDk\u00E1"),
                React.createElement("p", null, "Klikn\u011Bte na \u010D\u00E1st t\u011Bla se kterou m\u00E1te probl\u00E9m."),
                React.createElement("div", { className: 'flexRow myProblem__holder' },
                    React.createElement(Avatar, { onClick: this.clickArea, activeArea: this.state.area ? 'active--' + this.state.area : '' }),
                    this.state.area && (React.createElement("div", { className: "infoBox " + (this.state.area ? 'infoBox--' + this.state.area : '') },
                        React.createElement("div", { className: 'infoBox__close', onClick: function () { return _this.closeInfoBox(); } },
                            React.createElement(SvgIcon, { name: "close", type: "gray" })),
                        this.state.availableSpecializations &&
                            this.state.availableSpecializations.map(function (specialization, i) { return (React.createElement("div", { className: 'infoBox__item', key: i },
                                React.createElement("a", { href: "" }, specialization.name))); })))))));
    };
    return MyProblem;
}(React.Component));
export default MyProblem;
//# sourceMappingURL=MyProblem.js.map