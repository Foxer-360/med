"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_lazyload_1 = require("react-lazyload");
var List_1 = require("../List");
var MapComponent_1 = require("./components/MapComponent");
var Map = function (props) {
    var BACKOFFICE = window && document.querySelector('.ant-layout') ? true : false;
    var map = (React.createElement(List_1.default, { data: props.data.items }, function (_a) {
        var data = _a.data;
        return React.createElement(MapComponent_1.default, { clinics: data });
    }));
    return BACKOFFICE ? map : React.createElement(react_lazyload_1.default, { height: 509, offset: 100 }, map);
};
exports.default = Map;
//# sourceMappingURL=Map.js.map