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
import Link from '@source/partials/Link';
import Media from '@source/partials/Media';
var Benefits = function (props) {
    var items = props.data.items;
    return (React.createElement(List, { data: items }, function (_a) {
        var data = _a.data;
        return (React.createElement("section", { className: 'benefits' },
            React.createElement("div", { className: 'container' },
                React.createElement("div", { className: 'benefits__list grid' }, data &&
                    data.map(function (benefit, index) {
                        return benefit.url ? (React.createElement(Link, __assign({ key: index }, benefit.url, { className: 'benefits__list__element grid' }),
                            benefit.image && benefit.image.filename &&
                                React.createElement(Media, { type: 'image', data: benefit.image }),
                            benefit.text && React.createElement("p", null, benefit.text))) : (React.createElement("div", { key: index, className: 'benefits__list__element grid' },
                            React.createElement("div", null, benefit.image && benefit.image.filename && React.createElement(Media, { type: 'image', data: benefit.image })),
                            benefit.text && React.createElement("p", null, benefit.text)));
                    })))));
    }));
};
export default Benefits;
//# sourceMappingURL=Benefits.js.map