"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var SelectButton = function (props) {
    var polyclinics = props.polyclinics;
    return (React.createElement("div", { className: 'select-btn hCenterBlock' },
        React.createElement("select", null,
            React.createElement("option", { value: "V\u0161echny polikliniky" }, "V\u0161echny polikliniky"),
            polyclinics && polyclinics.map(function (polyclinic, i) { return (React.createElement("option", { value: polyclinic, key: i }, polyclinic)); })),
        React.createElement("span", { className: "arrow" })));
};
exports.default = SelectButton;
//# sourceMappingURL=SelectButton.js.map