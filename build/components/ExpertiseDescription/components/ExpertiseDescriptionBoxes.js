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
import Link from '@source/partials/Link';
import Button from '@source/partials/Button';
import getImageUrl from '@source/helpers/getImageUrl';
var ExpertiseDescriptionBoxes = function (props) {
    var boxes = props.boxes;
    return (React.createElement("section", { className: "info" },
        React.createElement("div", { className: "grid-container" }, boxes && boxes.map(function (box, i) { return (React.createElement("div", { key: i, className: 'info__element', style: { backgroundImage: box.image && "url(" + getImageUrl(box.image) + ")" } },
            React.createElement("div", { className: 'info__element--cell' },
                box.title && React.createElement("h5", null, box.title),
                !box.url2 && !box.url3 &&
                    React.createElement("div", null,
                        React.createElement(Button, { url: box.url1, classes: 'btn--whiteBorder' }, box.url1Title ? box.url1Title : 'více informací')),
                (box.url2 || box.url3) &&
                    React.createElement("div", { style: { paddingLeft: 20 } },
                        box.url1 && (box.url2 || box.url3) &&
                            React.createElement(Link, __assign({}, box.url1, { className: 'downloadLink' }), box.url1Title ? box.url1Title : 'více informací'),
                        box.url2 && React.createElement(Link, __assign({}, box.url2, { className: 'downloadLink' }), box.url2Title ? box.url2Title : 'více informací'),
                        box.url3 && React.createElement(Link, __assign({}, box.url3, { className: 'downloadLink' }), box.url3Title ? box.url3Title : 'více informací'))),
            React.createElement("div", { className: 'info__element--colorGradient' }))); }))));
};
export default ExpertiseDescriptionBoxes;
//# sourceMappingURL=ExpertiseDescriptionBoxes.js.map