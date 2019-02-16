import * as React from 'react';
import Media from '@source/partials/Media';
import List from '../List';
var Benefits = function (props) {
    var items = props.data.items;
    return (React.createElement(List, { data: items }, function (_a) {
        var data = _a.data;
        return React.createElement("section", { className: 'benefits' },
            React.createElement("div", { className: 'container' },
                React.createElement("div", { className: 'benefits__list grid' }, data && data.map(function (benefit, index) {
                    return (React.createElement("div", { key: index, className: 'benefits__list__element grid' },
                        benefit.image && benefit.image.filename &&
                            React.createElement(Media, { type: 'image', data: benefit.image }),
                        benefit.text && React.createElement("p", null, benefit.text)));
                }))));
    }));
};
export default Benefits;
//# sourceMappingURL=Benefits.js.map