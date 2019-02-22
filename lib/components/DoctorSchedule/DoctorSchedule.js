"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _DividerCircles = _interopRequireDefault(require("../DividerCircles"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var getDayOfWeek = function getDayOfWeek(day) {
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

var withinTime = function withinTime(from, to, min, max) {
  from = (0, _moment.default)(from, 'HH:mm');
  to = (0, _moment.default)(to, 'HH:mm');

  if (from.isSameOrAfter((0, _moment.default)(min, 'HH:mm')) && to.isSameOrBefore((0, _moment.default)(max, 'HH:mm'))) {
    return true;
  } else {
    return false;
  }
};

var categorizeTimeSlot = function categorizeTimeSlot(from, to) {
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
  } else {
    return null;
  }
};

var getWeekStructure = function getWeekStructure(week) {
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
            time: time.from + " - " + time.to
          };
        }
      });
    }

    structuredWeek.push(weekDay);
  });
  return structuredWeek;
};

var getScheduleTitle = function getScheduleTitle(regularity, oddWeekTitle, evenWeekTitle, regularWeekTitle) {
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

var DoctorSchedule = function DoctorSchedule(props) {
  var _a = props.data,
      schedule = _a.schedule,
      oddWeekTitle = _a.oddWeekTitle,
      evenWeekTitle = _a.evenWeekTitle,
      regularWeekTitle = _a.regularWeekTitle;
  return React.createElement("section", {
    className: 'container doctorScheduleSection'
  }, schedule && schedule.weeks && schedule.weeks.map(function (week, i) {
    return React.createElement("div", {
      className: "doctorSchedule",
      key: i
    }, React.createElement("div", {
      className: 'doctorSchedule__title'
    }, React.createElement("h4", null, getScheduleTitle(week.regularity, oddWeekTitle, evenWeekTitle, regularWeekTitle))), React.createElement("table", null, React.createElement("tbody", null, week && getWeekStructure(week).map(function (item, index) {
      return React.createElement(React.Fragment, null, React.createElement("tr", {
        className: 'mobileHeading'
      }, React.createElement("td", {
        colSpan: 7
      }, item.day)), React.createElement("tr", {
        className: 'normalRow'
      }, React.createElement("td", null, item.day), React.createElement("td", null, React.createElement("p", null, item.morningHours && item.morningHours.time || ' - '), item.morningHours && item.morningHours.description && React.createElement("p", null, item.morningHours.description)), React.createElement("td", {
        className: 'circleCell'
      }, React.createElement(_DividerCircles.default, null)), React.createElement("td", null, React.createElement("p", null, item.noonHours && item.noonHours.time || ' - '), item.noonHours && item.noonHours.description && React.createElement("p", null, item.noonHours.description)), React.createElement("td", {
        className: 'circleCell'
      }, React.createElement(_DividerCircles.default, null)), React.createElement("td", null, React.createElement("p", null, item.afternoonHours && item.afternoonHours.time || ' - '), item.afternoonHours && item.afternoonHours.description && React.createElement("p", null, item.afternoonHours.description)), React.createElement("td", {
        className: 'circleCell'
      }, React.createElement(_DividerCircles.default, null)), React.createElement("td", null, React.createElement("p", null, item.lateAfternoonHours && item.lateAfternoonHours.time || ' - '), item.lateAfternoonHours && item.lateAfternoonHours.description && React.createElement("p", null, item.lateAfternoonHours.description))));
    }))));
  }));
};

var _default = DoctorSchedule;
exports.default = _default;