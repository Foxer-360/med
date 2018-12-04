import * as React from 'react';
var Care = function (props) {
    var title = props.title, items = props.items;
    return (React.createElement("div", { className: 'care' },
        React.createElement("h3", null, title),
        React.createElement("div", { className: 'hCenterBlock' }, items && items.map(function (item, i) { return (React.createElement("p", { key: i, dangerouslySetInnerHTML: { __html: item } })); }))));
};
export default Care;
//# sourceMappingURL=Care.js.map