import * as React from 'react';
var Button = function (props) { return (React.createElement("button", { className: "btn " + props.classes },
    props.children,
    !props.noArrow && React.createElement("span", { className: "arrow" }))); };
export default Button;
//# sourceMappingURL=Button.js.map