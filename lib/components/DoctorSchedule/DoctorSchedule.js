"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _DividerCircles = _interopRequireDefault(require("../DividerCircles"));

var _Link = _interopRequireDefault(require("../../partials/Link"));

var _moment = _interopRequireDefault(require("moment"));

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _urlize = require("urlize");

var _reactApollo = require("react-apollo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var __makeTemplateObject = void 0 && (void 0).__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var GET_CONTEXT = (0, _graphqlTag.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client\n  }\n"], ["\n  {\n    languageData @client\n    pageData @client\n    websiteData @client\n    languagesData @client\n    navigationsData @client\n  }\n"])));

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

var getAbsenceLink = function getAbsenceLink(data, alternate) {
  if (alternate && data) {
    var firstName = alternate.firstName,
        lastName = alternate.lastName;
    var doctorSlug = (0, _urlize.urlize)(firstName + "-" + lastName);
    var link = "/" + (data.websiteData && data.websiteData.title.toLowerCase()) + "/" + (data.languageData && data.languageData.code) + "/" + doctorSlug;
    return link;
  }

  return null;
};

var DoctorSchedule = function DoctorSchedule(props) {
  var _a = props.data,
      schedule = _a.schedule,
      oddWeekTitle = _a.oddWeekTitle,
      evenWeekTitle = _a.evenWeekTitle,
      regularWeekTitle = _a.regularWeekTitle,
      absences = _a.absences;
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
  }), React.createElement(_reactApollo.Query, {
    query: GET_CONTEXT
  }, function (_a) {
    var data = _a.data;
    return React.createElement(React.Fragment, null, absences && Array.isArray(absences) && absences.length > 0 && React.createElement("div", {
      className: 'absences'
    }, React.createElement("h4", null, "Nep\u0159\xEDtomnost"), React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("td", null, "Od"), React.createElement("td", null, "Do"), React.createElement("td", null, "Zastupuje"))), React.createElement("tbody", null, absences.map(function (absence, i) {
      if (absence) {
        return React.createElement("tr", {
          key: i
        }, React.createElement("td", null, absence.fromDate && (0, _moment.default)(absence.fromDate.date).format('YYYY-MM-DD') || ''), React.createElement("td", null, absence.toDate.date && (0, _moment.default)(absence.toDate.date).format('YYYY-MM-DD') || ''), React.createElement("td", null, React.createElement(_Link.default, {
          dynamic: true,
          url: getAbsenceLink(data, absence.alternate)
        }, (absence.alternate && absence.alternate.firstName || '') + " " + (absence.alternate && absence.alternate.lastName || ''))));
      }
    })))));
  }));
};

var _default = DoctorSchedule;
exports.default = _default;
var templateObject_1;