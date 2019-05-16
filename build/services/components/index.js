"use strict";
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
var components_1 = require("../../components");
var resources = require("./resources");
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
            BLOGARTICLE: 'BlogArticle',
            DOCTORSCHEDULE: 'DoctorSchedule',
            WORKINGHOURS: 'WorkingHours',
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
                return components_1.Dummy;
            case this.Types.HEADER:
                return components_1.Header;
            case this.Types.HERO:
                return components_1.Hero;
            case this.Types.CROSSROADS:
                return components_1.CrossRoads;
            case this.Types.BENEFITS:
                return components_1.Benefits;
            case this.Types.HIGHLIGHT:
                return components_1.Highlight;
            case this.Types.FOOTER:
                return components_1.Footer;
            case this.Types.REVIEWS:
                return components_1.Reviews;
            case this.Types.TEXTBLOCK:
                return components_1.TextBlock;
            case this.Types.MAP:
                return components_1.Map;
            case this.Types.INFOBOXES:
                return components_1.InfoBoxes;
            case this.Types.DOCTORLIST:
                return components_1.DoctorList;
            case this.Types.POLYCLINICSLIST:
                return components_1.PolyclinicsList;
            case this.Types.EXPERTISELIST:
                return components_1.ExpertiseList;
            case this.Types.INFORECTANGLES:
                return components_1.InfoRectangles;
            case this.Types.POLYCLINICINFO:
                return components_1.PolyclinicInfo;
            case this.Types.BLOG:
                return components_1.Blog;
            case this.Types.POLYCLINICBOXES:
                return components_1.PolyclinicBoxes;
            case this.Types.DOCTORCARD:
                return components_1.DoctorCard;
            case this.Types.ODBORNOST:
                return components_1.Odbornost;
            case this.Types.MYPROBLEM:
                return components_1.MyProblem;
            case this.Types.JOBPOSITIONS:
                return components_1.JobPositions;
            case this.Types.JOBOFFERS:
                return components_1.JobOffers;
            case this.Types.CAREERFORM:
                return components_1.CareerForm;
            case this.Types.EXPERTISEDESCRIPTION:
                return components_1.ExpertiseDescription;
            case this.Types.MEDICALGROUP:
                return components_1.MedicalGroup;
            case this.Types.TIMELINE:
                return components_1.Timeline;
            case this.Types.VIEWSABOUTUS:
                return components_1.ViewsAboutUs;
            case this.Types.CONTACTINFO:
                return components_1.ContactInfo;
            case this.Types.CONTACTFORM:
                return components_1.ContactForm;
            case this.Types.DOWNLOADS:
                return components_1.Downloads;
            case this.Types.CONTACTSBLOCK:
                return components_1.ContactsBlock;
            case this.Types.FAQ:
                return components_1.Faq;
            case this.Types.BLOGARTICLE:
                return components_1.BlogArticle;
            case this.Types.DOCTORSCHEDULE:
                return components_1.DoctorSchedule;
            case this.Types.WORKINGHOURS:
                return components_1.WorkingHours;
            default:
                return function () { return React.createElement(components_1.AlertNotFound, { type: "component" }); };
        }
    };
    /***/
    ComponentsService.prototype.getComponentResource = function (type) {
        var res = resources.default;
        var typedRes = resources[type.toLowerCase()];
        if (lodash_1.isObjectLike(typedRes)) {
            res = __assign({}, res, typedRes);
        }
        return res;
    };
    ComponentsService.prototype.getForm = function (type) {
        switch (type) {
            default:
                return function () { return React.createElement(components_1.AlertNotFound, { type: "form" }); };
        }
    };
    return ComponentsService;
}());
exports.default = ComponentsService;
//# sourceMappingURL=index.js.map