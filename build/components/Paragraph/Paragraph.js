"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_responsive_1 = require("react-responsive");
var ParagraphText_1 = require("./components/ParagraphText");
var ParagraphMedia_1 = require("./components/ParagraphMedia");
var LEFT_TEXT_RIGHT_TEXT = 'ltrt';
var LEFT_IMAGE_RIGHT_IMAGE = 'liri';
var LEFT_TEXT_RIGHT_IMAGE = 'ltri';
var LEFT_IMAGE_RIGHT_TEXT = 'lirt';
var FULL_IMAGE = 'fi';
var FULL_TEXT = 'ft';
var FULL = 'f';
var Paragraph = function (props) {
    var _a = props.data, leftMedia = _a.leftMedia, rightMedia = _a.rightMedia, leftText = _a.leftText, rightText = _a.rightText;
    var layout;
    var LEFT_MEDIA = leftMedia && (leftMedia.filename || leftMedia.type === 'embeddedVideo');
    var LEFT_TEXT = leftText && leftText.length > 0;
    var RIGHT_MEDIA = rightMedia && rightMedia.filename;
    var RIGHT_TEXT = rightText && rightText.length > 0;
    if (LEFT_TEXT && RIGHT_TEXT && !LEFT_MEDIA && !RIGHT_MEDIA) {
        layout = LEFT_TEXT_RIGHT_TEXT;
    }
    if (LEFT_MEDIA && RIGHT_MEDIA && !LEFT_TEXT && !RIGHT_TEXT) {
        layout = LEFT_IMAGE_RIGHT_IMAGE;
    }
    if (LEFT_MEDIA && RIGHT_TEXT && !LEFT_TEXT && !RIGHT_MEDIA) {
        layout = LEFT_IMAGE_RIGHT_TEXT;
    }
    if (LEFT_TEXT && RIGHT_MEDIA && !LEFT_MEDIA && !RIGHT_TEXT) {
        layout = LEFT_TEXT_RIGHT_IMAGE;
    }
    if (LEFT_MEDIA && !RIGHT_MEDIA && !RIGHT_TEXT && !LEFT_TEXT) {
        layout = FULL_IMAGE;
    }
    if (LEFT_TEXT && !RIGHT_MEDIA && !RIGHT_TEXT && !LEFT_MEDIA) {
        layout = FULL_TEXT;
    }
    if (LEFT_TEXT && RIGHT_TEXT && LEFT_MEDIA && RIGHT_MEDIA) {
        layout = FULL;
    }
    var renderLayout = function (value) {
        switch (value) {
            case LEFT_IMAGE_RIGHT_IMAGE:
                return (React.createElement("div", { className: 'row' },
                    React.createElement("div", { className: "col-12 col-md-6" },
                        React.createElement(ParagraphMedia_1.default, { source: leftMedia, width: '438' })),
                    React.createElement("div", { className: "col-12 col-md-6 imgWithMarginTop" },
                        React.createElement(ParagraphMedia_1.default, { source: rightMedia, width: '438' }))));
            case LEFT_TEXT_RIGHT_TEXT:
                return (React.createElement("div", { className: 'row' },
                    React.createElement("div", { className: "col-12 col-md-6" },
                        React.createElement(ParagraphText_1.default, { source: leftText })),
                    React.createElement("div", { className: "col-12 col-md-6" },
                        React.createElement(ParagraphText_1.default, { source: rightText }))));
            case LEFT_TEXT_RIGHT_IMAGE:
                return (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "row" },
                        React.createElement(react_responsive_1.default, { minDeviceWidth: 992 },
                            React.createElement("div", { className: 'col-12 col-lg-6' },
                                React.createElement(ParagraphText_1.default, { source: leftText, class: 'textWithImg' })),
                            React.createElement("div", { className: "col-12 col-lg-6" },
                                React.createElement(ParagraphMedia_1.default, { source: rightMedia, width: '438' }))),
                        React.createElement(react_responsive_1.default, { maxDeviceWidth: 991 },
                            React.createElement("div", { className: "col-12 col-lg-6" },
                                React.createElement(ParagraphMedia_1.default, { source: rightMedia, width: '438' })),
                            React.createElement("div", { className: 'col-12 col-lg-6' },
                                React.createElement(ParagraphText_1.default, { source: leftText, class: 'textWithImg' }))))));
            case LEFT_IMAGE_RIGHT_TEXT:
                return (React.createElement("div", { className: 'row' },
                    React.createElement("div", { className: "col-12 col-lg-6" },
                        React.createElement(ParagraphMedia_1.default, { source: leftMedia, width: '438' })),
                    React.createElement("div", { className: 'col-12 col-lg-6' },
                        React.createElement(ParagraphText_1.default, { source: rightText, class: 'textWithImg' }))));
            case FULL_IMAGE:
                return (React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col" },
                        React.createElement(ParagraphMedia_1.default, { source: leftMedia, width: '876' }))));
            case FULL_TEXT:
                return (React.createElement("div", { className: "row" },
                    React.createElement("div", { className: "col" },
                        React.createElement(ParagraphText_1.default, { source: leftText }))));
            case FULL: // ALL CONTENT
                return (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-12 col-lg-6" },
                            React.createElement(ParagraphMedia_1.default, { source: leftMedia, width: '438' })),
                        React.createElement("div", { className: 'col-12 col-lg-6' },
                            React.createElement(ParagraphText_1.default, { source: rightText, class: 'textWithImg' }))),
                    React.createElement("div", { className: "row" },
                        React.createElement(react_responsive_1.default, { minDeviceWidth: 992 },
                            React.createElement("div", { className: 'col-12 col-lg-6' },
                                React.createElement(ParagraphText_1.default, { source: leftText })),
                            React.createElement("div", { className: "col-12 col-lg-6" },
                                React.createElement(ParagraphMedia_1.default, { source: rightMedia, width: '438' }))),
                        React.createElement(react_responsive_1.default, { maxDeviceWidth: 991 },
                            React.createElement("div", { className: "col-12 col-lg-6" },
                                React.createElement(ParagraphMedia_1.default, { source: rightMedia, width: '438' })),
                            React.createElement("div", { className: 'col-12 col-lg-6' },
                                React.createElement(ParagraphText_1.default, { source: leftText, class: 'textAllContent' }))))));
            default:
                return (React.createElement("div", { style: { padding: '3rem 0' } },
                    React.createElement("p", { style: { fontSize: 24 } },
                        React.createElement("b", null, "Left text:"),
                        ' ',
                        React.createElement("span", { style: { color: '#c92731' } }, "can be used only with right text or right image")),
                    React.createElement("p", { style: { fontSize: 24 } },
                        React.createElement("b", null, "Left image:"),
                        ' ',
                        React.createElement("span", { style: { color: '#c92731' } }, "can be used only with right text or right image")),
                    React.createElement("p", { style: { fontSize: 24 } },
                        React.createElement("b", null, "Right text:"),
                        ' ',
                        React.createElement("span", { style: { color: '#c92731' } }, "can be used only with left text and left image")),
                    React.createElement("p", { style: { fontSize: 24 } },
                        React.createElement("b", null, "Right Image:"),
                        ' ',
                        React.createElement("span", { style: { color: '#c92731' } }, "can be used only with left text or left image"))));
        }
    };
    var _b = props.data, paddingTop = _b.paddingTop, paddingBottom = _b.paddingBottom;
    return (React.createElement("div", { className: "paragraph " + (paddingTop ? 'paragraph--paddingTop' : '') + " " + (paddingBottom ? 'paragraph--paddingBottom' : '') },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "paragraph__content" }, renderLayout(layout)))));
};
exports.default = Paragraph;
//# sourceMappingURL=Paragraph.js.map