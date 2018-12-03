import * as React from 'react';
var ExpertiseDescriptionInvestigation = function (props) {
    var title = props.title, items = props.items;
    return (React.createElement("div", { className: 'investigation' },
        React.createElement("h3", null, title),
        React.createElement("div", { className: 'grid investigation__blocks hCenterBlock' }, items && items.map(function (item, i) { return (React.createElement("a", { href: "#", className: 'investigation__block' },
            React.createElement("p", null, item))); }))));
};
export default ExpertiseDescriptionInvestigation;
//# sourceMappingURL=ExpertiseDescriptionInvestigation.js.map