var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import DividerCircles from '../DividerCircles';
import Link from '../../partials/Link';
import moment from 'moment';
import gql from 'graphql-tag';
import { urlize } from 'urlize';
import { Query } from 'react-apollo';
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
            return 'pondělí';
        case 'fr':
            return 'čtvrtek';
        case 'st':
            return 'pátek';
        case 'su':
            return 'sobota';
        default:
            return 'neděle';
    }
};
var withinTime = function (from, to, min, max) {
    from = moment(from, 'HH:mm');
    to = moment(to, 'HH:mm');
    if (from.isSameOrAfter(moment(min, 'HH:mm')) && to.isSameOrBefore(moment(max, 'HH:mm'))) {
        return true;
    }
    else {
        return false;
    }
};
var categorizeTimeSlot = function (from, to) {
    if (withinTime(from, to, '00:00', '09:30')) {
        return 'morning';
    }
    if (withinTime(from, to, '10:00', '12:00')) {
        return 'noon';
    }
    if (withinTime(from, to, '12:00', '15:00')) {
        return 'afternoon';
    }
    if (withinTime(from, to, '15:00', '00:00')) {
        return 'lateAfternoon';
    }
    else {
        return null;
    }
};
var getWeekStructure = function (week) {
    var structuredWeek = [];
    var weekDays = Object.keys(week.days);
    weekDays.forEach(function (day) {
        var weekDay = {};
        weekDay.day = getDayOfWeek(day);
        if (week.days[day] && week.days[day].length > 0) {
            week.days[day].forEach(function (time) {
                var timeSlot = categorizeTimeSlot(time.from, time.to);
                if (timeSlot) {
                    weekDay[categorizeTimeSlot(time.from, time.to) + 'Hours'] = {
                        description: time.note || '',
                        time: time.from + " - " + time.to,
                    };
                }
            });
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
                            return (React.createElement(React.Fragment, null,
                                React.createElement("tr", { className: 'mobileHeading' },
                                    React.createElement("td", { colSpan: 7 }, item.day)),
                                React.createElement("tr", { className: 'normalRow' },
                                    React.createElement("td", null, item.day),
                                    React.createElement("td", null,
                                        React.createElement("p", null, (item.morningHours && item.morningHours.time) || ' - '),
                                        item.morningHours && item.morningHours.description && (React.createElement("p", null, item.morningHours.description))),
                                    React.createElement("td", { className: 'circleCell' },
                                        React.createElement(DividerCircles, null)),
                                    React.createElement("td", null,
                                        React.createElement("p", null, (item.noonHours && item.noonHours.time) || ' - '),
                                        item.noonHours && item.noonHours.description && React.createElement("p", null, item.noonHours.description)),
                                    React.createElement("td", { className: 'circleCell' },
                                        React.createElement(DividerCircles, null)),
                                    React.createElement("td", null,
                                        React.createElement("p", null, (item.afternoonHours && item.afternoonHours.time) || ' - '),
                                        item.afternoonHours && item.afternoonHours.description && (React.createElement("p", null, item.afternoonHours.description))),
                                    React.createElement("td", { className: 'circleCell' },
                                        React.createElement(DividerCircles, null)),
                                    React.createElement("td", null,
                                        React.createElement("p", null, (item.lateAfternoonHours && item.lateAfternoonHours.time) || ' - '),
                                        item.lateAfternoonHours && item.lateAfternoonHours.description && (React.createElement("p", null, item.lateAfternoonHours.description))))));
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
                                    React.createElement(Link, { dynamic: true, url: getAbsenceLink(data, absence.alternate) }, ((absence.alternate && absence.alternate.firstName) || '') + " " + ((absence.alternate &&
                                        absence.alternate.lastName) ||
                                        '')))));
                        }
                    })))))));
        })));
};
export default DoctorSchedule;
var templateObject_1;
//# sourceMappingURL=DoctorSchedule.js.map