import * as React from 'react';
import Button from '../../partials/Button';
import SelectButton from './components/index';
var data = {
    title: 'Výpis aktuálních pozic',
    items: [
        {
            position: 'Dermatolog',
            img: '/assets/medicon/images/positions-1.jpg',
        },
        {
            position: 'Gynekolog',
            img: '/assets/medicon/images/positions-2.jpg',
        },
        {
            position: 'Ortoped',
            img: '/assets/medicon/images/positions-3.jpg',
        },
    ],
};
var JobPositions = function (props) {
    return (React.createElement("div", { className: 'container actual-positions' },
        React.createElement("h3", null, data.title),
        React.createElement(SelectButton, null),
        React.createElement("div", { className: 'grid positions' }, data.items.map(function (item, index) { return (React.createElement("div", { className: 'positions__element', style: { backgroundImage: "url(" + item.img + ")" }, key: index },
            React.createElement("div", { className: 'positions__element-content' },
                React.createElement("p", null, item.position),
                React.createElement(Button, { classes: 'btn--whiteBorder btn--fullWidth' }, "Vice info")),
            React.createElement("div", { className: 'positions__colorGradient', style: { background: "linear-gradient(to bottom, transparent 0%, #2473ba 100%)" } }))); })),
        React.createElement(Button, { classes: "hCenterBlock btn--blueBkg btn--down btn--fullWidth" }, "dal\u0161\u00ED pozice")));
};
export default JobPositions;
//# sourceMappingURL=JobPositions.js.map