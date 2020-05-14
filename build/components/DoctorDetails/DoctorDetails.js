"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactMarkdown = require("react-markdown/with-html");
var graphql_tag_1 = require("graphql-tag");
var react_apollo_1 = require("react-apollo");
var Link_1 = require("../../partials/Link");
var GET_CONTEXT = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client\n  }\n"], ["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client\n  }\n"])));
var getLink = function (data, slug) {
    if (slug === undefined) {
        slug = '';
    }
    var link = "/" + (data.languageData && data.languageData.code) + "/" + slug.trim();
    return link;
};
var getContactCenterPhone = function (clinic) {
    var shortName = clinic && clinic.shortName && clinic.shortName.split(',')[0];
    switch (shortName) {
        case 'BUD':
            return '237 777 200';
        case 'VYS':
            return '266 006 211';
        case 'HOL':
            return '227 777 677';
        case 'ZP':
            return '234 105 402';
        default:
            // tslint:disable-next-line: no-unused-expression
            '';
    }
};
var getBuildingColor = function (clinicExtraInfo) {
    var source = [
        'Zelená budova',
        'Žlutá budova',
        'Červená budova',
        'Fialová budova',
    ];
    var result = [
        '<p style="color: green">Zelená budova</p>',
        '<p style="color: #AA8F00">Žlutá budova</p>',
        '<p style="color: red">Červená budova</p>',
        '<p style="color: purple">Fialová budova</p>',
    ];
    var building = clinicExtraInfo;
    for (var i = source.length - 1; i >= 0; i--) {
        building = building && building.replace("" + source[i], "" + result[i]);
    }
    return building;
};
var getClinicLink = function (clinic, building, officeFloor, data) {
    var clinicName = clinic && clinic.name && clinic.name.split(',')[0];
    var clinicUrl = clinic && clinic.url && clinic.url.split(',')[0];
    var officeStreet = building && building.street;
    var officeBuilding = building && building.name;
    return (React.createElement("div", { className: 'policlinicInfo__item--content' },
        clinic && React.createElement("p", null, clinic.url !== undefined ?
            React.createElement(Link_1.default, { url: getLink(data, clinicUrl) },
                "Poliklinika ",
                clinicName) :
            "Poliklinika " + clinicName),
        officeStreet && officeStreet.trim().length > 0 && officeStreet,
        officeBuilding
            && officeBuilding.trim().length > 0
            && officeBuilding.includes('budova')
            && React.createElement(ReactMarkdown, { skipHtml: false, escapeHtml: false, source: getBuildingColor(officeBuilding) }),
        officeFloor && officeFloor.trim().length > 0 && React.createElement("p", null,
            officeFloor,
            " patro")));
};
var getDoctorExpertise = function (expertise, data) {
    var expertiseNames = expertise[0].name && expertise[0].name.split(',');
    var expertiseUrls = expertise[0].url && expertise[0].url.split(',');
    var expertiseLinks = [];
    // tslint:disable-next-line: no-unused-expression
    Array.isArray(expertiseNames) && expertiseNames.map(function (expertiseName, idx) {
        expertiseLinks.push(expertiseUrls !== undefined && expertiseUrls[0].trim() ?
            React.createElement(Link_1.default, { url: getLink(data, expertiseUrls[idx]) }, expertiseName.trim()) :
            expertiseName);
    });
    return expertiseLinks;
};
var DoctorDetails = function (props) {
    var _a = props.data, doctorName = _a.doctorName, clinic = _a.clinic, building = _a.building, officeFloor = _a.officeFloor, phone = _a.phone, expertise = _a.expertise, addInfo = _a.addInfo;
    var officePhone = phone && phone.split(',')[0] && phone.split(',')[0].trim();
    var receptionPhone = phone && phone.split(',')[1] && phone.split(',')[1].trim();
    var contactCenterPhone = getContactCenterPhone(clinic);
    return (React.createElement("section", { className: 'doctorDetails' },
        React.createElement(react_apollo_1.Query, { query: GET_CONTEXT }, function (_a) {
            var data = _a.data;
            return (React.createElement("div", { className: "container" },
                doctorName && doctorName.trim().length > 0 && React.createElement("div", { className: 'doctorDetails__main' },
                    React.createElement("h3", { className: 'gradientHeading' }, doctorName)),
                React.createElement("div", { className: "row policlinicInfo__list" },
                    (clinic
                        || building
                        || officeFloor)
                        && React.createElement("div", { className: "col-12 col-lg" },
                            React.createElement("div", { className: 'policlinicInfo__item' },
                                React.createElement("img", { src: '/assets/medicon/images/geo.svg', alt: "address" }),
                                getClinicLink(clinic, building, officeFloor, data))),
                    (officePhone && officePhone.trim().length > 0
                        || receptionPhone && receptionPhone.trim().length > 0
                        || contactCenterPhone && contactCenterPhone.trim().length > 0)
                        && React.createElement("div", { className: "col-12 col-lg" },
                            React.createElement("div", { className: 'policlinicInfo__item' },
                                React.createElement("img", { src: '/assets/medicon/images/phone.svg', alt: "phone number" }),
                                React.createElement("ul", { className: 'policlinicInfo__item--content list-unstyled' },
                                    officePhone && officePhone.trim().length > 0 && React.createElement("li", null,
                                        React.createElement("b", null, 'Ordinace: '),
                                        React.createElement("a", { className: "phone", href: "callto:" + officePhone.replace(/ /g, '') }, officePhone)),
                                    receptionPhone && receptionPhone.trim().length > 0 && React.createElement("li", null,
                                        React.createElement("b", null, 'Recepce: '),
                                        React.createElement("a", { className: "phone", href: "callto:" + receptionPhone.replace(/ /g, '') }, receptionPhone)),
                                    contactCenterPhone && contactCenterPhone.trim().length > 0 && React.createElement("li", null,
                                        React.createElement("b", null, 'Kontaktní centrum: '),
                                        React.createElement("a", { className: "phone", href: "callto:" + contactCenterPhone.replace(/ /g, '') }, contactCenterPhone))))),
                    expertise && React.createElement("div", { className: "col-12 col-lg" },
                        React.createElement("div", { className: 'policlinicInfo__item' },
                            React.createElement("img", { src: '/assets/medicon/images/stethoscopeIcon.svg', alt: "expertise" }),
                            React.createElement("div", { className: 'policlinicInfo__item--content' },
                                React.createElement("b", null, 'Odbornost: '),
                                getDoctorExpertise(expertise, data))))),
                addInfo && React.createElement("div", { className: "add-info" },
                    React.createElement(ReactMarkdown, { skipHtml: false, escapeHtml: false, source: addInfo }))));
        })));
};
exports.default = DoctorDetails;
var templateObject_1;
//# sourceMappingURL=DoctorDetails.js.map