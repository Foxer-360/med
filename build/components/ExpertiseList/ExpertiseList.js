var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import List from '../List';
import Button from '../../partials/Button';
import Media from '@source/partials/Media';
import Link from '@source/partials/Link';
var ExpertiseList = function (props) {
    var _a = props.data, title = _a.title, expertiseList = _a.expertiseList;
    return (React.createElement("section", { className: "expertiseList" },
        title && React.createElement("h3", null, title),
        React.createElement("div", { className: "grid-container" },
            React.createElement(List, { data: expertiseList }, function (_a) {
                var data = _a.data;
                return data &&
                    data.map(function (item, index) { return (React.createElement(Link, __assign({}, item.url, { key: index }),
                        React.createElement("div", { className: "expertiseList__element" },
                            React.createElement("div", null, item.image && React.createElement(Media, { type: 'image', data: item.image })),
                            item.title && React.createElement("p", null, item.title)))); });
            })),
        expertiseList.length > 0 && (React.createElement("div", { className: 'container' },
            React.createElement(Button, { classes: "btn--blueBkg btn--fullWidth" }, "zobrazit dal\u0161i odbornosti")))));
};
export default ExpertiseList;
//# sourceMappingURL=ExpertiseList.js.map