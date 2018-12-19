import * as React from 'react';
import DividerCircles from '../../../DividerCircles';
var DoctorSchedule = function (props) {
    return (React.createElement("div", { className: "doctorSchedule" },
        React.createElement("table", null,
            React.createElement("tbody", null, props.data.map(function (item, index) {
                return React.createElement(React.Fragment, null,
                    React.createElement("tr", { className: 'mobileHeading' },
                        React.createElement("td", { colSpan: 3 }, item.day)),
                    React.createElement("tr", { className: 'normalRow' },
                        React.createElement("td", null, item.day),
                        React.createElement("td", null,
                            React.createElement("p", null, item.morningOpeningHours),
                            React.createElement("p", null, item.morningHoursdescription)),
                        React.createElement("td", null,
                            React.createElement(DividerCircles, null)),
                        React.createElement("td", null,
                            React.createElement("p", null, item.eveningOpeningHours),
                            React.createElement("p", null, item.eveningHoursdescription))));
            })))));
};
export default DoctorSchedule;
//# sourceMappingURL=DoctorSchedule.js.map