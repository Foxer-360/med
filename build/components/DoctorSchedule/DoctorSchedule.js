"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var moment = require("moment");
var ReactMarkdown = require("react-markdown/with-html");
var graphql_tag_1 = require("graphql-tag");
var urlize_1 = require("urlize");
var react_apollo_1 = require("react-apollo");
var react_router_dom_1 = require("react-router-dom");
var Link_1 = require("../../partials/Link");
var DividerCircles_1 = require("../DividerCircles");
var Highlight_1 = require("../Highlight");
var GET_CONTEXT = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client\n  }\n"], ["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client\n  }\n"])));
var getDayOfWeek = function (day) {
    switch (day) {
        case 'mo':
            return 'pondělí';
        case 'tu':
            return 'úterý';
        case 'we':
            return 'středa';
        case 'th':
            return 'čtvrtek';
        case 'fr':
            return 'pátek';
        case 'st':
            return 'sobota';
        case 'su':
            return 'neděle';
        default:
            return 'neděle';
    }
};
var getWeekStructure = function (week) {
    var structuredWeek = [];
    var weekDays = Object.keys(week.days);
    weekDays.forEach(function (day) {
        var weekDay = {};
        weekDay.day = getDayOfWeek(day);
        if (week.days[day] && week.days[day].length > 0) {
            for (var i = 0; i < week.days[day].length; i++) {
                week.days[day].map(function (time, index) {
                    weekDay[index] = {
                        note: time.note || '',
                        time: time.from + " - " + time.to,
                    };
                });
            }
        }
        structuredWeek.push(weekDay);
    });
    return structuredWeek;
};
var getScheduleTitle = function (regularity, oddWeekTitle, evenWeekTitle, regularWeekTitle) {
    if (regularity === 'regular' && regularWeekTitle) {
        return regularWeekTitle;
    }
    if (regularity === 'odd' && oddWeekTitle) {
        return oddWeekTitle;
    }
    if (regularity === 'even' && evenWeekTitle) {
        return evenWeekTitle;
    }
    return null;
};
var getAbsenceLink = function (data, alternate) {
    if (alternate && data) {
        var firstName = alternate.firstName, lastName = alternate.lastName, id = alternate.id;
        var doctorSlug = urlize_1.urlize(firstName + "-" + lastName + "-" + id);
        var link = "/" + (data.languageData && data.languageData.code) + "/" + doctorSlug;
        return link;
    }
    return null;
};
var getClinicLink = function (polyclinic) {
    return (React.createElement(react_apollo_1.Query, { query: GET_CONTEXT }, function (_a) {
        var data = _a.data;
        return (polyclinic.url !== undefined ?
            React.createElement(Link_1.default, { url: "/" + (data.languageData && data.languageData.code) + "/" + polyclinic.url, className: 'doctorSchedule__title__link' },
                "poliklinika ",
                polyclinic.name) :
            "poliklinika " + polyclinic.name);
    }));
};
var highlightAbsence = function (defaultAbsenceMessage, absences, absenceMessage) {
    var e_1, _a;
    var props = {
        text: defaultAbsenceMessage || 'Dnes lékař neordinuje',
        description: null,
        urlTitle: Array.isArray(absenceMessage) ? absenceMessage[3] : null,
        url: Array.isArray(absenceMessage) ? { url: absenceMessage[4] } : null
    };
    try {
        for (var absences_1 = __values(absences), absences_1_1 = absences_1.next(); !absences_1_1.done; absences_1_1 = absences_1.next()) {
            var absence = absences_1_1.value;
            if (absence.fromDate && absence.toDate
                && moment(absence.fromDate.date) < moment()
                && moment(absence.toDate.date) > moment()) {
                return (React.createElement(Highlight_1.default, { data: props }));
            }
            return null;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (absences_1_1 && !absences_1_1.done && (_a = absences_1.return)) _a.call(absences_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
};
var absenceSettings = function (extraAbsenceSettings, doctor) {
    if (extraAbsenceSettings) {
        var absenceDict = extraAbsenceSettings.split('\n');
        doctor = doctor.trim();
        for (var i = 0; i < absenceDict.length; i++) {
            absenceDict[i] = absenceDict[i].split(/(\d+\,\w+):(\[(.*)\]\((.*)\))/);
            if (absenceDict[i][1] === doctor) {
                return absenceDict[i];
            }
        }
    }
    return null;
};
var getPolyclinicPhone = function (phones, doctor) {
    var polyclinicPhones = phones.split(',').map(function (i) {
        var item = i.split(':');
        return { 'polyclinicName': item[0], 'polyclinicPhone': item[1] };
    });
    var phone = polyclinicPhones.find(function (i) { return i.polyclinicName.trim() === doctor.trim(); });
    return phone && phone.polyclinicPhone || null;
};
var futureEmployee = function (date) {
    return moment(date) > moment();
};
var hasSchedule = function (schedule) {
    return schedule && schedule.weeks && schedule.weeks
        .some(function (week) { return Object.keys(week.days)
        .some(function (day) { return week.days[day].length > 0; }); });
};
var getDoctorUrl = function (polylinicsSlug, expertiseSlug, doctorSlug, data) {
    var polyclinicUrl = polylinicsSlug ? "/" + polylinicsSlug.split(',')[0] : '';
    var expertiseUrl = expertiseSlug ? "/" + expertiseSlug.split(',')[0] : '';
    var doctorUrl = doctorSlug ? "/" + doctorSlug : '';
    var url = "/" + (data.languageData && data.languageData.code) + polyclinicUrl + expertiseUrl + doctorUrl;
    return url;
};
var DoctorSchedule = function (props) {
    var _a = props.data, schedule = _a.schedule, oddWeekTitle = _a.oddWeekTitle, evenWeekTitle = _a.evenWeekTitle, regularWeekTitle = _a.regularWeekTitle, absences = _a.absences, extraAbsenceSettings = _a.extraAbsenceSettings, doctor = _a.doctor, defaultAbsenceMessage = _a.defaultAbsenceMessage, doctorName = _a.doctorName, employmentFrom = _a.employmentFrom, phone = _a.phone, polyclinicSlug = _a.polyclinicSlug, expertiseSlug = _a.expertiseSlug;
    var Helmet = props.Helmet;
    var absenceMessage = absenceSettings(extraAbsenceSettings, doctor);
    var doctorUrl;
    React.useEffect(function () {
        if (props.info && props.location && props.location.pathname !== doctorUrl) {
            props.history.push(doctorUrl);
        }
        // tslint:disable-next-line: align
    }, [props && props.info]);
    return (React.createElement("section", { className: 'container doctorScheduleSection' },
        React.createElement(react_apollo_1.Query, { query: GET_CONTEXT }, function (_a) {
            var data = _a.data;
            doctorUrl = getDoctorUrl(polyclinicSlug, expertiseSlug, props.info
                && props.info.datasources
                && props.info.datasources.doctor[0], data);
            return (React.createElement(Helmet, null,
                React.createElement("link", { rel: "canonical", href: "https://mediconas.cz" + doctorUrl })));
        }),
        futureEmployee(employmentFrom)
            && doctorName
            ? React.createElement(Highlight_1.default, { data: {
                    text: React.createElement(React.Fragment, null,
                        doctorName,
                        " za\u010D\u00EDn\u00E1 ordinovat od ",
                        moment(employmentFrom).format('DD.MM.YYYY'),
                        ".",
                        React.createElement("br", null),
                        "Ji\u017E nyn\u00ED se ale k n\u011Bmu m\u016F\u017Eete objedn\u00E1vat."),
                    description: null,
                    urlTitle: null,
                    url: null
                } })
            : '',
        Array.isArray(absences)
            && hasSchedule(schedule)
            && highlightAbsence(defaultAbsenceMessage, absences, absenceMessage),
        schedule
            && schedule.weeks
            && schedule.weeks.map(function (week, i) { return (React.createElement("div", { className: "doctorSchedule", key: week.regularity },
                React.createElement("div", { className: 'doctorSchedule__title' },
                    React.createElement("h4", null,
                        getScheduleTitle(week.regularity, oddWeekTitle, evenWeekTitle, regularWeekTitle),
                        ' - ',
                        getClinicLink(week.polyclinic))),
                React.createElement("table", null,
                    React.createElement("tbody", null, week
                        && getWeekStructure(week).map(function (item, j) {
                            if (item.day === 'sobota' || item.day === 'neděle') {
                                return null;
                            }
                            return (React.createElement(React.Fragment, { key: j },
                                React.createElement("tr", { key: j, className: 'mobileHeading' },
                                    React.createElement("td", { colSpan: 7 }, item.day)),
                                React.createElement("tr", { className: 'normalRow' },
                                    React.createElement("td", null, item.day),
                                    React.createElement("td", null,
                                        React.createElement("p", null, (item['0'] && item['0'].time) || ' - '),
                                        item['0'] && item['0'].note && React.createElement("p", null, item['0'].note)),
                                    React.createElement("td", { className: 'circleCell' },
                                        React.createElement(DividerCircles_1.default, null)),
                                    React.createElement("td", null,
                                        React.createElement("p", null, (item['1'] && item['1'].time) || ' - '),
                                        item['1'] && item['1'].note && React.createElement("p", null, item['1'].note)),
                                    React.createElement("td", { className: 'circleCell' },
                                        React.createElement(DividerCircles_1.default, null)),
                                    React.createElement("td", null,
                                        React.createElement("p", null, (item['2'] && item['2'].time) || ' - '),
                                        item['2'] && item['2'].note && React.createElement("p", null, item['2'].note)),
                                    React.createElement("td", { className: 'circleCell' },
                                        React.createElement(DividerCircles_1.default, null)),
                                    React.createElement("td", null,
                                        React.createElement("p", null, (item['3'] && item['3'].time) || ' - '),
                                        item['3'] && item['3'].note && React.createElement("p", null, item['3'].note)))));
                        }))),
                schedule.note && React.createElement("b", null, schedule.note),
                React.createElement("br", null),
                phone
                    && getPolyclinicPhone(phone, week.polyclinic.shortName)
                    && React.createElement("b", null,
                        "V urgentn\u00EDch p\u0159\u00EDpadech volejte ",
                        getPolyclinicPhone(phone, week.polyclinic.shortName),
                        "."))); }),
        hasSchedule(schedule)
            && React.createElement(react_apollo_1.Query, { query: GET_CONTEXT }, function (_a) {
                var data = _a.data;
                var nextMonthAbsences = Array.isArray(absences) && absences.filter(function (absence) {
                    return absence && moment(absence.fromDate.date) < moment().add(1, 'M')
                        && moment(absence.toDate.date) > moment();
                });
                return (React.createElement(React.Fragment, null, nextMonthAbsences && Array.isArray(nextMonthAbsences) && nextMonthAbsences.length > 0 && (React.createElement("div", { className: 'absences' },
                    React.createElement("h4", null, "Nep\u0159\u00EDtomnost"),
                    React.createElement("table", null,
                        React.createElement("thead", null,
                            React.createElement("tr", null,
                                React.createElement("td", null, "Od"),
                                React.createElement("td", null, "Do"),
                                React.createElement("td", null, "Zastupuje"))),
                        React.createElement("tbody", null, nextMonthAbsences.map(function (absence, i) { return (React.createElement("tr", { key: i },
                            React.createElement("td", null, (absence.fromDate && moment(absence.fromDate.date).format('DD.MM.YYYY')) || ''),
                            React.createElement("td", null, (absence.toDate.date && absence.subcategory.id !== 31
                                && moment(absence.toDate.date).format('DD.MM.YYYY')) || ''),
                            React.createElement("td", null, Array.isArray(absenceMessage) ? (React.createElement(ReactMarkdown, { skipHtml: false, escapeHtml: false, source: absenceMessage[2] })) :
                                React.createElement(Link_1.default, { dynamic: true, url: getAbsenceLink(data, absence.alternate) }, ((absence.alternate && absence.alternate.firstName) || '') + " \n                            " + ((absence.alternate && absence.alternate.lastName) || ''))))); })))))));
            })));
};
exports.default = react_router_dom_1.withRouter(DoctorSchedule);
var templateObject_1;
//# sourceMappingURL=DoctorSchedule.js.map