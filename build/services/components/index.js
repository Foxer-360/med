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
import { Dummy, AlertNotFound, Hero, Header, CrossRoads, Benefits, Highlight, Footer, Reviews, TextBlock, Map, InfoBoxes, DoctorList, PolyclinicsList, ExpertiseList, InfoRectangles, PolyclinicInfo, Blog, PolyclinicBoxes, DoctorCard, Odbornost, MyProblem, JobPositions, JobOffers, CareerForm, ExpertiseDescription, MedicalGroup, Timeline, ViewsAboutUs, ContactInfo, ContactForm, Downloads, ContactsBlock, Faq, } from '../../components';
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
            MYPROBLEM: 'MyProblem',
            JOBPOSITIONS: 'JobPositions',
            JOBOFFERS: 'JobOffers',
            CAREERFORM: 'CareerForm',
            EXPERTISEDESCRIPTION: 'ExpertiseDescription',
            MEDICALGROUP: 'MedicalGroup',
            TIMELINE: 'Timeline',
            VIEWSABOUTUS: 'ViewsAboutUs',
            CONTACTINFO: 'ContactInfo',
            CONTACTFORM: 'ContactForm',
            DOWNLOADS: 'Downloads',
            CONTACTSBLOCK: 'ContactsBlock',
            FAQ: 'Faq',
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
            case this.Types.MYPROBLEM:
                return MyProblem;
            case this.Types.JOBPOSITIONS:
                return JobPositions;
            case this.Types.JOBOFFERS:
                return JobOffers;
            case this.Types.CAREERFORM:
                return CareerForm;
            case this.Types.EXPERTISEDESCRIPTION:
                return ExpertiseDescription;
            case this.Types.MEDICALGROUP:
                return MedicalGroup;
            case this.Types.TIMELINE:
                return Timeline;
            case this.Types.VIEWSABOUTUS:
                return ViewsAboutUs;
            case this.Types.CONTACTINFO:
                return ContactInfo;
            case this.Types.CONTACTFORM:
                return ContactForm;
            case this.Types.DOWNLOADS:
                return Downloads;
            case this.Types.CONTACTSBLOCK:
                return ContactsBlock;
            case this.Types.FAQ:
                return Faq;
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