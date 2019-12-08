"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_responsive_modal_1 = require("react-responsive-modal");
function ModalWindow(props) {
    var _a = __read(React.useState(true), 2), open = _a[0], setOpen = _a[1];
    return (React.createElement(react_responsive_modal_1.default, { classNames: { modal: 'modalWindow' }, open: open, onClose: function () { return setOpen(false); }, center: true },
        React.createElement("h1", null, props.textBig),
        React.createElement("h3", null, props.textSmall)));
}
exports.ModalWindow = ModalWindow;
exports.default = ModalWindow;
//# sourceMappingURL=ModalWindow.js.map