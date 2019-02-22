import * as React from 'react';
import DividerCircles from '../../../DividerCircles';
var DoctorSchedule = function (props) {
    var title = props.title, data = props.data;
    return (React.createElement("div", { className: "doctorSchedule" },
        React.createElement("div", { className: 'doctorSchedule__title' },
            React.createElement("h4", null, title)),
        React.createElement("table", null,
            React.createElement("tbody", null, data &&
                data.map(function (item, index) {
                    return (React.createElement(React.Fragment, null,
                        React.createElement("tr", { className: 'mobileHeading' },
                            React.createElement("td", { colSpan: 7 }, item.day)),
                        React.createElement("tr", { className: 'normalRow' },
                            React.createElement("td", null, item.day),
                            React.createElement("td", null,
                                React.createElement("p", null, (item.morningHours && item.morningHours.time) || ''),
                                React.createElement("p", null, (item.morningHours && item.morningHours.description) || '')),
                            React.createElement("td", { className: 'circleCell' },
                                React.createElement(DividerCircles, null)),
                            React.createElement("td", null,
                                React.createElement("p", null, (item.noonHours && item.noonHours.time) || ''),
                                React.createElement("p", null, (item.noonHours && item.noonHours.description) || '')),
                            React.createElement("td", { className: 'circleCell' },
                                React.createElement(DividerCircles, null)),
                            React.createElement("td", null,
                                React.createElement("p", null, (item.afternoonHours && item.afternoonHours.time) || ''),
                                React.createElement("p", null, (item.afternoonHours && item.afternoonHours.description) || '')),
                            React.createElement("td", { className: 'circleCell' },
                                React.createElement(DividerCircles, null)),
                            React.createElement("td", null,
                                React.createElement("p", null, (item.lateAfternoonHours && item.lateAfternoonHours.time) || ''),
                                React.createElement("p", null, (item.lateAfternoonHours && item.lateAfternoonHours.description) || '')))));
                })))));
};
export default DoctorSchedule;
//# sourceMappingURL=DoctorSchedule.js.map