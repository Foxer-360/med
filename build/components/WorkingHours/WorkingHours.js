import * as React from 'react';
import DividerCircles from '../DividerCircles';
var WorkingHours = function (props) {
    console.log('%c Emilio: ', 'background: #222; color: #83FFFF', props);
    return (React.createElement("div", { className: "workingHours" },
        React.createElement("div", { className: "container" },
            React.createElement("table", null,
                React.createElement("tbody", null, props.data &&
                    props.data.items.length > 0 &&
                    props.data.items.map(function (item, index) {
                        return (React.createElement(React.Fragment, null,
                            React.createElement("tr", { className: 'mobileHeading' },
                                React.createElement("td", { colSpan: 3 }, item.day)),
                            React.createElement("tr", { className: 'normalRow' },
                                React.createElement("td", null, item.day),
                                React.createElement("td", null,
                                    React.createElement("p", null, item.morningHours),
                                    React.createElement("p", null, item.morningHoursDescription)),
                                React.createElement("td", null,
                                    React.createElement(DividerCircles, null)),
                                React.createElement("td", null,
                                    React.createElement("p", null, item.eveningHours),
                                    React.createElement("p", null, item.eveningHoursDescription)))));
                    }))))));
};
export default WorkingHours;
//# sourceMappingURL=WorkingHours.js.map