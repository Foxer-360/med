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
import { isObjectLike } from 'lodash';
import WebFont from 'webfontloader';
import { Dummy, AlertNotFound, Hero, Header, CrossRoads, Benefits, Highlight, Footer, Reviews, TextBlock, Map, InfoBoxes, DoctorList, PolyclinicsList, ExpertiseList, InfoRectangles, PolyclinicInfo, Blog, PolyclinicBoxes, DoctorCard, Odbornost, } from '../../components';
import * as resources from './resources';
// WEB FONTS
WebFont.load({
    google: {
        families: ['Montserrat:400,500,600,700:latin-ext'],
    },
});
/**
 *
 */
var ComponentsService = /** @class */ (function () {
    function ComponentsService() {
        this.Types = {
            DUMMY: 'Dummy',
            HERO: 'Hero',
            HEADER: 'Header',
            CROSSROADS: 'CrossRoads',
            BENEFITS: 'Benefits',
            HIGHLIGHT: 'Highlight',
            FOOTER: 'Footer',
            REVIEWS: 'Reviews',
            TEXTBLOCK: 'TextBlock',
            INFOBOXES: 'InfoBoxes',
            MAP: 'Map',
            DOCTORLIST: 'DoctorList',
            POLYCLINICSLIST: 'PolyclinicsList',
            EXPERTISELIST: 'ExpertiseList',
            INFORECTANGLES: 'InfoRectangles',
            POLYCLINICINFO: 'PolyclinicInfo',
            BLOG: 'Blog',
            POLYCLINICBOXES: 'PolyclinicBoxes',
            DOCTORCARD: 'DoctorCard',
            ODBORNOST: 'Odbornost',
        };
    }
    /***/
    ComponentsService.prototype.getAllowedTypes = function () {
        var _this = this;
        var res = Object.keys(this.Types).map(function (key) {
            return _this.Types[key];
        });
        return res;
    };
    /***/
    ComponentsService.prototype.getComponent = function (type) {
        switch (type) {
            case this.Types.DUMMY:
                return Dummy;
            case this.Types.HEADER:
                return Header;
            case this.Types.HERO:
                return Hero;
            case this.Types.CROSSROADS:
                return CrossRoads;
            case this.Types.BENEFITS:
                return Benefits;
            case this.Types.HIGHLIGHT:
                return Highlight;
            case this.Types.FOOTER:
                return Footer;
            case this.Types.REVIEWS:
                return Reviews;
            case this.Types.TEXTBLOCK:
                return TextBlock;
            case this.Types.MAP:
                return Map;
            case this.Types.INFOBOXES:
                return InfoBoxes;
            case this.Types.DOCTORLIST:
                return DoctorList;
            case this.Types.POLYCLINICSLIST:
                return PolyclinicsList;
            case this.Types.EXPERTISELIST:
                return ExpertiseList;
            case this.Types.INFORECTANGLES:
                return InfoRectangles;
            case this.Types.POLYCLINICINFO:
                return PolyclinicInfo;
            case this.Types.BLOG:
                return Blog;
            case this.Types.POLYCLINICBOXES:
                return PolyclinicBoxes;
            case this.Types.DOCTORCARD:
                return DoctorCard;
            case this.Types.ODBORNOST:
                return Odbornost;
            default:
                return function () { return React.createElement(AlertNotFound, { type: "component" }); };
        }
    };
    /***/
    ComponentsService.prototype.getComponentResource = function (type) {
        var res = resources.default;
        var typedRes = resources[type.toLowerCase()];
        if (isObjectLike(typedRes)) {
            res = __assign({}, res, typedRes);
        }
        return res;
    };
    ComponentsService.prototype.getForm = function (type) {
        switch (type) {
            default:
                return function () { return React.createElement(AlertNotFound, { type: "form" }); };
        }
    };
    return ComponentsService;
}());
export default ComponentsService;
//# sourceMappingURL=index.js.map