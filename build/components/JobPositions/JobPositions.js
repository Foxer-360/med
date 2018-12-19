import * as React from 'react';
import Button from '../../partials/Button';
import SelectButton from './components/index';
var JobPositions = function (props) {
    var _a = props.data, title = _a.title, positions = _a.positions;
    var polyclinics = [];
    if (positions && positions.length > 0) {
        positions.map(function (position, i) {
            polyclinics.push(position.polyclinic);
        });
    }
    return (React.createElement("div", { className: 'container actual-positions' },
        title && React.createElement("h3", null, title),
        React.createElement(SelectButton, { polyclinics: polyclinics }),
        React.createElement("div", { className: 'grid positions' }, positions && positions.map(function (position, index) { return (React.createElement("div", { className: 'positions__element', style: { backgroundImage: "url(/assets/medicon/images/positions-1.jpg)" }, key: index },
            React.createElement("div", { className: 'positions__element-content' },
                React.createElement("p", null, position.name),
                React.createElement(Button, { classes: 'btn--whiteBorder btn--fullWidth' }, "Vice info")),
            React.createElement("div", { className: 'positions__colorGradient', style: { background: "linear-gradient(to bottom, transparent 0%, #2473ba 100%)" } }))); })),
        React.createElement(Button, { classes: "hCenterBlock btn--blueBkg btn--down btn--fullWidth" }, "dal\u0161\u00ED pozice")));
};
export default JobPositions;
//# sourceMappingURL=JobPositions.js.map