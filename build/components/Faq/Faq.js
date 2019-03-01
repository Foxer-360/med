import * as React from 'react';
import Button from '@source/partials/Button';
var data = {
    items: [
        {
            title: 'Lorem ipsum dolor sit amet?',
            // tslint:disable-next-line:max-line-length
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu bibendum nulla, ac efficitur odio. Maecenas eu ligula eget ipsum scelerisque posuere. Integer rutrum tristique nisl hendrerit fringilla. Etiam interdum nunc nec scelerisque pulvinar. Phasellus iaculis commodo dui, non aliquet est egestas eget. Nullam arcu enim, laoreet non consectetur in, sodales eu risus.',
        },
        {
            title: 'Lorem ipsum dolor sit amet?',
            // tslint:disable-next-line:max-line-length
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu bibendum nulla, ac efficitur odio. Maecenas eu ligula eget ipsum scelerisque posuere. Integer rutrum tristique nisl hendrerit fringilla. Etiam interdum nunc nec scelerisque pulvinar. Phasellus iaculis commodo dui, non aliquet est egestas eget. Nullam arcu enim, laoreet non consectetur in, sodales eu risus.',
        },
        {
            title: 'Lorem ipsum dolor sit amet?',
            // tslint:disable-next-line:max-line-length
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu bibendum nulla, ac efficitur odio. Maecenas eu ligula eget ipsum scelerisque posuere. Integer rutrum tristique nisl hendrerit fringilla. Etiam interdum nunc nec scelerisque pulvinar. Phasellus iaculis commodo dui, non aliquet est egestas eget. Nullam arcu enim, laoreet non consectetur in, sodales eu risus.',
        },
        {
            title: 'Lorem ipsum dolor sit amet?',
            // tslint:disable-next-line:max-line-length
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu bibendum nulla, ac efficitur odio. Maecenas eu ligula eget ipsum scelerisque posuere. Integer rutrum tristique nisl hendrerit fringilla. Etiam interdum nunc nec scelerisque pulvinar. Phasellus iaculis commodo dui, non aliquet est egestas eget. Nullam arcu enim, laoreet non consectetur in, sodales eu risus.',
        }
    ]
};
var Faq = function (props) {
    var items = data.items;
    return (React.createElement("div", { className: 'faq' },
        React.createElement("div", { className: 'container' },
            items && items.map(function (item, index) {
                return (React.createElement("div", { key: index, className: 'faq__element' },
                    React.createElement("h3", null, item.title),
                    React.createElement("p", null, item.description)));
            }),
            React.createElement(Button, { classes: 'hCenterBlock btn--blueBkg btn--down btn--fullWidth' }, "v\u00EDce info"))));
};
export default Faq;
//# sourceMappingURL=Faq.js.map