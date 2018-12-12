import * as React from 'react';
import InfoElement from './components/InfoElement';
var data = {
    items: [
        {
            title: 'široký výběr zdravýchpotravin',
            img: '/assets/medicon/images/info-el-1.jpg',
            color: '#5a2a20',
            btn: 'btn--whiteBorder',
            titleColor: '#ffffff',
        },
        {
            title: 'široký výběr zdravýchpotravin',
            img: '/assets/medicon/images/info-el-3.jpg',
            color: '# ',
            btn: 'btn--blueBorder',
            titleColor: '#2eac6c',
        },
        {
            title: 'široký výběr zdravýchpotravin',
            img: '/assets/medicon/images/info-el-2.jpg',
            color: '#ffffff',
            btn: 'btn--whiteBorder',
            titleColor: '#ffffff',
        },
    ]
};
var InfoBoxes = function (props) {
    return (React.createElement("section", { className: 'info-boxes' },
        React.createElement("h3", null, "Z na\u0161ich l\u00E9k\u00E1ren"),
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'grid info-boxes__list' }, data.items.map(function (item, index) { return (React.createElement(InfoElement, { color: item.color, title: item.title, img: item.img, btn: item.btn, titleColor: item.titleColor, key: index })); })))));
};
export default InfoBoxes;
//# sourceMappingURL=InfoBoxes.js.map