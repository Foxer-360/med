var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import moment from 'moment';
import gql from 'graphql-tag';
import { urlize } from 'urlize';
import { Query } from 'react-apollo';
import Link from '@source/partials/Link';
import DividerCircles from '../DividerCircles';
var GET_CONTEXT = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client\n  }\n"], ["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client\n  }\n"])));
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
        var firstName = alternate.firstName, lastName = alternate.lastName;
        var doctorSlug = urlize(firstName + "-" + lastName);
        var link = "/" + (data.websiteData && data.websiteData.title.toLowerCase()) + "/" + (data.languageData &&
            data.languageData.code) + "/" + doctorSlug;
        return link;
    }
    return null;
};
var DoctorSchedule = function (props) {
    var _a = props.data, schedule = _a.schedule, oddWeekTitle = _a.oddWeekTitle, evenWeekTitle = _a.evenWeekTitle, regularWeekTitle = _a.regularWeekTitle, absences = _a.absences;
    return (React.createElement("section", { className: 'container doctorScheduleSection' },
        schedule &&
            schedule.weeks &&
            schedule.weeks.map(function (week, i) { return (React.createElement("div", { className: "doctorSchedule", key: i },
                React.createElement("div", { className: 'doctorSchedule__title' },
                    React.createElement("h4", null, getScheduleTitle(week.regularity, oddWeekTitle, evenWeekTitle, regularWeekTitle))),
                React.createElement("table", null,
                    React.createElement("tbody", null, week &&
                        getWeekStructure(week).map(function (item, index) {
                            if (item.day === 'sobota' || item.day === 'neděle') {
                                return '';
                            }
                            return (React.createElement(React.Fragment, null,
                                React.createElement("tr", { className: 'mobileHeading' },
                                    React.createElement("td", { colSpan: 7 }, item.day)),
                                React.createElement("tr", { className: 'normalRow' },
                                    React.createElement("td", null, item.day),
                                    React.createElement("td", null,
                                        React.createElement("p", null, (item['0'] && item['0'].time) || ' - '),
                                        item['0'] && item['0'].note && React.createElement("p", null, item['0'].note)),
                                    React.createElement("td", { className: 'circleCell' },
                                        React.createElement(DividerCircles, null)),
                                    React.createElement("td", null,
                                        React.createElement("p", null, (item['1'] && item['1'].time) || ' - '),
                                        item['1'] && item['1'].note && React.createElement("p", null, item['1'].note)),
                                    React.createElement("td", { className: 'circleCell' },
                                        React.createElement(DividerCircles, null)),
                                    React.createElement("td", null,
                                        React.createElement("p", null, (item['2'] && item['2'].time) || ' - '),
                                        item['2'] && item['2'].note && React.createElement("p", null, item['2'].note)),
                                    React.createElement("td", { className: 'circleCell' },
                                        React.createElement(DividerCircles, null)),
                                    React.createElement("td", null,
                                        React.createElement("p", null, (item['3'] && item['3'].time) || ' - '),
                                        item['3'] && item['3'].note && React.createElement("p", null, item['3'].note)))));
                        }))))); }),
        React.createElement(Query, { query: GET_CONTEXT }, function (_a) {
            var data = _a.data;
            return (React.createElement(React.Fragment, null, absences && Array.isArray(absences) && absences.length > 0 && (React.createElement("div", { className: 'absences' },
                React.createElement("h4", null, "Nep\u0159\u00EDtomnost"),
                React.createElement("table", null,
                    React.createElement("thead", null,
                        React.createElement("tr", null,
                            React.createElement("td", null, "Od"),
                            React.createElement("td", null, "Do"),
                            React.createElement("td", null, "Zastupuje"))),
                    React.createElement("tbody", null, absences.map(function (absence, i) {
                        if (absence) {
                            return (React.createElement("tr", { key: i },
                                React.createElement("td", null, (absence.fromDate && moment(absence.fromDate.date).format('DD-MM-YYYY')) || ''),
                                React.createElement("td", null, (absence.toDate.date && moment(absence.toDate.date).format('DD-MM-YYYY')) || ''),
                                React.createElement("td", null,
                                    React.createElement(Link, { dynamic: true, url: getAbsenceLink(data, absence.alternate) }, ((absence.alternate && absence.alternate.firstName) || '') + " \n                                " + ((absence.alternate && absence.alternate.lastName) || '')))));
                        }
                    })))))));
        })));
};
export default DoctorSchedule;
var templateObject_1;
//# sourceMappingURL=DoctorSchedule.js.map