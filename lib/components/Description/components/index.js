"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Care = _interopRequireDefault(require("./Care"));

var _Investigation = _interopRequireDefault(require("./Investigation"));

var _Boxes = _interopRequireDefault(require("./Boxes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Care: _Care.default,
  Investigation: _Investigation.default,
  Boxes: _Boxes.default
};
exports.default = _default;