"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var List_1 = require("../List");
var MapComponent_1 = require("./components/MapComponent");
var Map = function (props) {
    return (React.createElement(List_1.default, { data: props.data.items }, function (_a) {
        var data = _a.data;
        return React.createElement(MapComponent_1.default, { clinics: data });
    }));
};
exports.default = Map;
//# sourceMappingURL=Map.js.map