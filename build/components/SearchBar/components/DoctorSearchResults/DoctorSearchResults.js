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
var List_1 = require("../../../List");
var Link_1 = require("../../../../partials/Link");
function isDoctorActive(workingHours, absence) {
    var e_1, _a;
    try {
        for (var absence_1 = __values(absence), absence_1_1 = absence_1.next(); !absence_1_1.done; absence_1_1 = absence_1.next()) {
            var item = absence_1_1.value;
            if (item.fromDate && item.toDate
                && moment(item.fromDate.date) < moment()
                && moment(item.toDate.date) > moment()) {
                return 0;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (absence_1_1 && !absence_1_1.done && (_a = absence_1.return)) _a.call(absence_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    var weekDayKey = getWeekDayKey();
    if (workingHours &&
        workingHours.weeks &&
        workingHours.weeks[0] &&
        workingHours.weeks[0].days) {
        if (!workingHours.weeks[0].days[weekDayKey] &&
            workingHours.weeks[0].days[weekDayKey].length > 0) {
            return -1;
        }
        return workingHours.weeks[0].days[weekDayKey].some(function (doctorWorkingHours) {
            var regex = /^\s*([0-9]{2}):([0-9]{2})\s*$/;
            var from = regex.exec(doctorWorkingHours.from);
            var to = regex.exec(doctorWorkingHours.to);
            if (from && from[1] && from[2] && to && to[1] && to[2]) {
                var startOfShift = moment()
                    .startOf('day')
                    .add(from[1], 'hours')
                    .add(from[2], 'minutes');
                var endOfShift = moment()
                    .startOf('day')
                    .add(to[1], 'hours')
                    .add(to[2], 'minutes');
                var now = moment();
                if (now.isSameOrBefore(endOfShift) && now.isSameOrAfter(startOfShift)) {
                    return true;
                }
            }
            return false;
        }) ? 1 : 0;
    }
    return -1;
}
function getWeekDayKey() {
    var day;
    switch (moment().isoWeekday()) {
        case 1:
            day = 'mo';
            break;
        case 2:
            day = 'tu';
            break;
        case 3:
            day = 'we';
            break;
        case 4:
            day = 'th';
            break;
        case 5:
            day = 'fr';
            break;
        case 6:
            day = 'st';
            break;
        case 7:
            day = 'su';
            break;
        default:
            day = 'mo';
            break;
    }
    return day;
}
function DoctorSearchResults(props) {
    var searchResults = props.searchResults, query = props.query, searchKeys = props.searchKeys, clearData = props.clearData, checkDoctorResults = props.checkDoctorResults;
    return (React.createElement(List_1.default, { data: searchResults, searchedText: query, searchKeys: searchKeys }, function (_a) {
        var data = _a.data;
        if (data.length > 0) {
            checkDoctorResults(true);
            // const doctors = 
            return (React.createElement("ul", { className: 'searchBarResults__doctors' }, data
                .map(function (item) {
                var workingHours = null;
                try {
                    workingHours = JSON.parse(item.workingHours);
                }
                catch (e) {
                    console.log('error', e);
                }
                var absence = null;
                absence = JSON.parse(item.absence);
                return __assign({}, item, { isDoctorActive: isDoctorActive(workingHours, absence) });
            })
                .sort(function (a, b) {
                if (a.isDoctorActive === b.isDoctorActive) {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                }
                return b.isDoctorActive - a.isDoctorActive;
            })
                .map(function (doctor, i) {
                return (React.createElement("li", { key: i, className: ([-1, 1].includes(doctor.isDoctorActive))
                        ? 'active' : '', onClick: function () { return clearData(); } },
                    React.createElement(Link_1.default, __assign({}, doctor.link),
                        React.createElement("span", null,
                            React.createElement("p", null,
                                React.createElement("span", { className: doctor.isDoctorActive === -1 ? 'noTimetable' : '' }, doctor.name),
                                doctor.isDoctorActive > -1 &&
                                    React.createElement(React.Fragment, null,
                                        React.createElement("span", { style: doctor.isDoctorActive === 1
                                                ? { color: '#31a031' }
                                                : { color: '#c23636' } }, doctor.isDoctorActive === 1 ? 'ordinuje' : 'v tuto chvíli neordinuje'))),
                            React.createElement("p", null, doctor.speciality)),
                        React.createElement("span", null, doctor.clinic))));
            })));
        }
        else {
            checkDoctorResults(false);
            return (React.createElement(React.Fragment, null));
        }
    }));
}
exports.default = DoctorSearchResults;
//# sourceMappingURL=DoctorSearchResults.js.map