"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ExpertiseDescriptionCare = _interopRequireDefault(require("./ExpertiseDescriptionCare"));

var _ExpertiseDescriptionExamination = _interopRequireDefault(require("./ExpertiseDescriptionExamination"));

var _ExpertiseDescriptionBoxes = _interopRequireDefault(require("./ExpertiseDescriptionBoxes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  ExpertiseDescriptionCare: _ExpertiseDescriptionCare.default,
  ExpertiseDescriptionExamination: _ExpertiseDescriptionExamination.default,
  ExpertiseDescriptionBoxes: _ExpertiseDescriptionBoxes.default
};
exports.default = _default;