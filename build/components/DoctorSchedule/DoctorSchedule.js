import * as React from 'react';
import DividerCircles from '../DividerCircles';
import moment from 'moment';
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
var DoctorSchedule = function (props) {
    var _a = props.data, schedule = _a.schedule, oddWeekTitle = _a.oddWeekTitle, evenWeekTitle = _a.evenWeekTitle, regularWeekTitle = _a.regularWeekTitle;
    return (React.createElement("section", { className: 'container doctorScheduleSection' }, schedule &&
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
                                    React.createElement("p", null, (item.morningHours && item.morningHours.description) || '')),
                                React.createElement("td", { className: 'circleCell' },
                                    React.createElement(DividerCircles, null)),
                                React.createElement("td", null,
                                    React.createElement("p", null, (item.noonHours && item.noonHours.time) || ' - '),
                                    React.createElement("p", null, (item.noonHours && item.noonHours.description) || '')),
                                React.createElement("td", { className: 'circleCell' },
                                    React.createElement(DividerCircles, null)),
                                React.createElement("td", null,
                                    React.createElement("p", null, (item.afternoonHours && item.afternoonHours.time) || ' - '),
                                    React.createElement("p", null, (item.afternoonHours && item.afternoonHours.description) || '')),
                                React.createElement("td", { className: 'circleCell' },
                                    React.createElement(DividerCircles, null)),
                                React.createElement("td", null,
                                    React.createElement("p", null, (item.lateAfternoonHours && item.lateAfternoonHours.time) || ' - '),
                                    React.createElement("p", null, (item.lateAfternoonHours && item.lateAfternoonHours.description) || '')))));
                    }))))); })));
};
export default DoctorSchedule;
//# sourceMappingURL=DoctorSchedule.js.map