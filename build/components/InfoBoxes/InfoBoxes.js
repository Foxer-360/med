import * as React from 'react';
import InfoElement from './components/InfoElement';
var InfoBoxes = function (props) {
    var _a = props.data, title = _a.title, boxes = _a.boxes;
    return (React.createElement("section", { className: 'info-boxes' },
        title && React.createElement("h3", null, title),
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'grid info-boxes__list' }, boxes && boxes.map(function (box, i) { return (React.createElement(InfoElement, { gradientColor: box.gradientColor, title: box.title, image: box.image, button: box.button, titleColor: box.titleColor, key: i })); })))));
};
export default InfoBoxes;
//# sourceMappingURL=InfoBoxes.js.map