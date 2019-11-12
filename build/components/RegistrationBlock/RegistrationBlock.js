"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactMarkdown = require("react-markdown/with-html");
var Button_1 = require("../../partials/Button");
var getImageUrl_1 = require("../../helpers/getImageUrl");
var RegistrationBlock = function (props) {
    var _a = props.data, title = _a.title, text = _a.text, btnTitle = _a.btnTitle, btnUrl = _a.btnUrl, conditionsFile = _a.conditionsFile;
    return (React.createElement("div", { className: 'registration-block' },
        React.createElement("div", { className: "container" },
            title && React.createElement("h3", null, title),
            text && React.createElement(ReactMarkdown, { skipHtml: false, escapeHtml: false, source: text }),
            btnTitle && btnUrl &&
                React.createElement("div", { className: 'registration-block__btn-holder' },
                    React.createElement(Button_1.default, { url: btnUrl, classes: 'btn--blueBorder' }, btnTitle)),
            conditionsFile && conditionsFile.filename &&
                React.createElement("a", { download: true, target: '_blank', href: getImageUrl_1.default(conditionsFile), className: 'registration-block__conditions' }, "V\u0161eobecn\u00E9 obchodn\u00ED podm\u00EDnky"))));
};
exports.default = RegistrationBlock;
//# sourceMappingURL=RegistrationBlock.js.map