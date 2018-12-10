import * as React from 'react';
var TextBlock = function (props) {
    var title = props.data.title;
    return (React.createElement("section", { className: 'textBlock' },
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: 'textBlock__container' },
                title && React.createElement("h2", { className: 'gradientHeading' }, title),
                React.createElement("div", { className: "textBlock__container__text" },
                    "Skupina ",
                    React.createElement("strong", null, "MEDICON"),
                    " pat\u0159\u00ED mezi nejv\u011Bt\u0161\u00ED provozovatele ambulantn\u00EDch za\u0159\u00EDzen\u00ED v Praze.",
                    React.createElement("br", null),
                    " Jej\u00ED pracovi\u0161t\u011B senach\u00E1z\u00ED v lokalit\u00FDch ",
                    React.createElement("strong", null, "Praha 4, Praha 9 a Praha 10."),
                    React.createElement("br", null),
                    " Poskytuje komletn\u00ED spectrum ambulantn\u00EDch specializac\u00ED a v ka\u017Ed\u00E9 z poliklinik i navazuj\u00EDc\u00ED l\u00E9ka\u0159sk\u00E9 slu\u017Eby.")))));
};
export default TextBlock;
//# sourceMappingURL=TextBlock.js.map