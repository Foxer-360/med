import * as React from 'react';
import Media from '@source/partials/Media';
var Benefits = function (props) {
    var benefits = props.data.benefits;
    return (React.createElement("section", { className: 'benefits' },
        React.createElement("div", { className: 'container' },
            React.createElement("div", { className: 'grid benefits__list' }, benefits &&
                benefits.map(function (benefit, index) {
                    return (React.createElement("div", { key: index, className: 'grid benefits__list__element' },
                        (benefit.image && benefit.image.filename && React.createElement(Media, { type: 'image', data: benefit.image })) || (React.createElement("img", { src: '/assets/medicon/images/doctorIcon.svg', alt: "Our benefit" })),
                        React.createElement("p", null, benefit.text)));
                })))));
};
export default Benefits;
//# sourceMappingURL=Benefits.js.map