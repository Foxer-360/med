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
/* tslint:disable */
import * as React from 'react';
var SvgIcon = function (props) {
    switch (props.name) {
        case 'fb':
            return (React.createElement("svg", __assign({ viewBox: "0 0 250.313 250.313" }, props, { className: "searchIcon " + ('searchIcon--' + props.name) }),
                React.createElement("path", { d: "M244.186 214.604l-54.379-54.378c-.289-.289-.628-.491-.93-.76 10.7-16.231 16.945-35.66 16.945-56.554C205.822 46.075 159.747 0 102.911 0S0 46.075 0 102.911c0 56.835 46.074 102.911 102.91 102.911 20.895 0 40.323-6.245 56.554-16.945.269.301.47.64.759.929l54.38 54.38c8.169 8.168 21.413 8.168 29.583 0 8.168-8.169 8.168-21.413 0-29.582zm-141.275-44.458c-37.134 0-67.236-30.102-67.236-67.235 0-37.134 30.103-67.236 67.236-67.236 37.132 0 67.235 30.103 67.235 67.236s-30.103 67.235-67.235 67.235z", fillRule: "evenodd", clipRule: "evenodd" })));
            break;
        case 'close': {
            React.createElement("svg", __assign({ viewBox: "0 0 50 50" }, props, { className: "closeIcon " + ('closeIcon--' + props.name) }),
                React.createElement("path", { d: "M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88   c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242   C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879   s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z", clipRule: "evenodd", fillRule: "evenodd", xmlns: "http://www.w3.org/2000/svg" }));
        }
        case 'arrow': {
            React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "none" }, props, { className: "arrowIcon " + ('arrowIcon--' + props.name) }),
                React.createElement("path", { d: "M32.7,15.9c1.4-1.4,3.6-1.4,5,0c1.4,1.4,1.4,3.6,0,5L12.1,46.4h84.4c2,0,3.6,1.6,3.6,3.5s-1.6,3.6-3.6,3.6H12.1l25.6,25.5\r\n\tc1.4,1.4,1.4,3.7,0,5c-1.4,1.4-3.6,1.4-5,0L1,52.5c-1.4-1.4-1.4-3.6,0-5L32.7,15.9z" }));
        }
        case 'search': {
            React.createElement("svg", __assign({ viewBox: "0 0 250.313 250.313" }, props, { className: "searchIcon " + ('searchIcon--' + props.name) }),
                React.createElement("path", { d: "M244.186 214.604l-54.379-54.378c-.289-.289-.628-.491-.93-.76 10.7-16.231 16.945-35.66 16.945-56.554C205.822 46.075 159.747 0 102.911 0S0 46.075 0 102.911c0 56.835 46.074 102.911 102.91 102.911 20.895 0 40.323-6.245 56.554-16.945.269.301.47.64.759.929l54.38 54.38c8.169 8.168 21.413 8.168 29.583 0 8.168-8.169 8.168-21.413 0-29.582zm-141.275-44.458c-37.134 0-67.236-30.102-67.236-67.235 0-37.134 30.103-67.236 67.236-67.236 37.132 0 67.235 30.103 67.235 67.236s-30.103 67.235-67.235 67.235z", fillRule: "evenodd", clipRule: "evenodd" }));
        }
        default:
            break;
    }
};
export default SvgIcon;
//# sourceMappingURL=SvgIcon.js.map