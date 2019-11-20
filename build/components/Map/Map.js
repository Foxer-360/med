"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_lazyload_1 = require("react-lazyload");
var List_1 = require("../List");
var MapComponent_1 = require("./components/MapComponent");
var Map = function (props) {
    return (React.createElement(react_lazyload_1.default, { height: 509, offset: 100 },
        React.createElement(List_1.default, { data: props.data.items }, function (_a) {
            var data = _a.data;
            return React.createElement(MapComponent_1.default, { clinics: data });
        })));
};
exports.default = Map;
//# sourceMappingURL=Map.js.map