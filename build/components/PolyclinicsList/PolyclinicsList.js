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
import PcTitle from './components/title';
import Button from '../../partials/Button';
import Media from '../../partials/Media';
import ReactMarkdown from 'react-markdown';
import List from '../List';
var PolyclinicsList = /** @class */ (function (_super) {
    __extends(PolyclinicsList, _super);
    function PolyclinicsList(props) {
        var _this = _super.call(this, props) || this;
        _this.filterServices = function (services, index) {
            services = services && services.length > 0 && services
                .split('\n')
                .filter(function (service, i) { return i <= 8; })
                .join('\n') || "";
            return services;
        };
        _this.toggleDisplayServices = function (index) {
            _this.setState({
                displayAllServices: index === null ? false : true,
                activeCard: index,
            });
        };
        _this.state = {
            displayAllServices: false,
            activeCard: null,
        };
        return _this;
    }
    PolyclinicsList.prototype.render = function () {
        var _this = this;
        var clinics = this.props.data.clinics;
        return (React.createElement("section", { className: "polyclinicsList" },
            React.createElement(List, { data: clinics }, function (_a) {
                var data = _a.data;
                return data &&
                    data.map(function (clinic, index) { return (React.createElement("div", { className: 'pcitem', key: index },
                        React.createElement("div", { className: "fullWidthContainer" },
                            React.createElement("div", { className: "container" },
                                React.createElement("div", { className: "pcitem__wrapper" },
                                    React.createElement("div", { className: 'pcitem__img' }, clinic.image && React.createElement(Media, { data: clinic.image, type: "image" })),
                                    React.createElement("div", { className: 'pcitem__info' },
                                        React.createElement(PcTitle, { name: clinic.name }),
                                        React.createElement("div", { className: "pcitem__info__details" },
                                            React.createElement("div", { className: "pcitem__info__details__item" },
                                                React.createElement("img", { src: "../../../assets/medicon/images/geoIcon.svg", alt: "Medicon GeoLocation Icon" }),
                                                React.createElement("p", null,
                                                    clinic.address && clinic.address,
                                                    " ",
                                                    React.createElement("br", null),
                                                    clinic.district && clinic.district)),
                                            React.createElement("div", { className: "pcitem__info__details__item" },
                                                React.createElement("img", { src: "../../../assets/medicon/images/phoneIcon.svg", alt: "Medicon Phone Icon" }),
                                                clinic.phone && React.createElement("p", null, clinic.phone)),
                                            React.createElement("div", { className: "pcitem__info__details__item" },
                                                clinic.transportImage && React.createElement(Media, { data: clinic.transportImage, type: "image" }),
                                                !clinic.transportImage && React.createElement("img", { src: "../../../assets/medicon/images/metro2.png", alt: "" }),
                                                React.createElement("p", null,
                                                    clinic.transport && clinic.transport,
                                                    React.createElement("br", null),
                                                    clinic.station && clinic.station))),
                                        React.createElement("div", { className: 'pcitem__info__list' },
                                            React.createElement(ReactMarkdown, { source: _this.state.displayAllServices && index === _this.state.activeCard
                                                    ? clinic.services
                                                    : _this.filterServices(clinic.services, index), renderers: {
                                                    paragraph: function (rProps) {
                                                        return React.createElement("ul", null, rProps.children);
                                                    },
                                                } }),
                                            React.createElement("div", { onClick: function () { return _this.toggleDisplayServices(index === _this.state.activeCard ? null : index); } },
                                                _this.state.displayAllServices && index === _this.state.activeCard
                                                    ? 'Skrýt'
                                                    : 'Další odbornosti',
                                                ' ',
                                                React.createElement("span", { className: "arrow" }))),
                                        React.createElement("div", { className: 'pcitem__info__desc' },
                                            React.createElement("div", { className: 'pcitem__info__desc__txt' },
                                                React.createElement(ReactMarkdown, { source: clinic.description, renderers: {
                                                        paragraph: function (rProps) { return React.createElement("p", null, rProps.children); },
                                                    } })),
                                            React.createElement("div", { className: 'pcitem__info__btnHolder' },
                                                React.createElement(Button, { classes: "btn btn--blueBorder", url: clinic.url && clinic.url }, "vice info"))))))))); });
            })));
    };
    return PolyclinicsList;
}(React.Component));
export default PolyclinicsList;
//# sourceMappingURL=PolyclinicsList.js.map