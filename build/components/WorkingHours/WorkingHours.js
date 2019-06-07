"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var List_1 = require("../List");
var DividerCircles_1 = require("../DividerCircles");
var WorkingHours = function (props) {
    return (React.createElement(List_1.default, { data: props.data.items }, function (_a) {
        var data = _a.data;
        return (React.createElement("div", { className: "workingHours" },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: 'workingHours__title' },
                    React.createElement("h4", null, (props && props.data && props.data.title) || '')),
                React.createElement("table", null,
                    React.createElement("tbody", null, data && data.map(function (item, index) {
                        return (React.createElement(React.Fragment, null,
                            React.createElement("tr", { className: 'mobileHeading' },
                                React.createElement("td", { colSpan: 3 }, item.day)),
                            React.createElement("tr", { className: 'normalRow' },
                                React.createElement("td", null, item.day),
                                React.createElement("td", null,
                                    React.createElement("p", null, item.morningHours),
                                    React.createElement("p", null, item.morningHoursDescription)),
                                React.createElement("td", null,
                                    React.createElement(DividerCircles_1.default, null)),
                                React.createElement("td", null,
                                    React.createElement("p", null, item.eveningHours),
                                    React.createElement("p", null, item.eveningHoursDescription)))));
                    }))))));
    }));
};
exports.default = WorkingHours;
//# sourceMappingURL=WorkingHours.js.map