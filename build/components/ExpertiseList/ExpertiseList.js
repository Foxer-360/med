import * as React from 'react';
import Button from '../../partials/Button';
var ExpertiseList = function (props) {
    return (React.createElement("section", { className: "expertiseList" },
        React.createElement("h3", null, "Odbornosti"),
        React.createElement("div", { className: "grid-container" },
            React.createElement("div", { className: "expertiseList__element" },
                React.createElement("img", { src: "/assets/medicon/images/od-el-1.png", alt: "image" }),
                React.createElement("p", null, "Alergologie")),
            React.createElement("div", { className: "expertiseList__element" },
                React.createElement("img", { src: "/assets/medicon/images/od-el-2.png", alt: "image" }),
                React.createElement("p", null, "gynekologie")),
            React.createElement("div", { className: "expertiseList__element" },
                React.createElement("img", { src: "/assets/medicon/images/od-el-3.png", alt: "image" }),
                React.createElement("p", null, "chirurgie")),
            React.createElement("div", { className: "expertiseList__element" },
                React.createElement("img", { src: "/assets/medicon/images/od-el-4.png", alt: "image" }),
                React.createElement("p", null, "CT/MR")),
            React.createElement("div", { className: "expertiseList__element" },
                React.createElement("img", { src: "/assets/medicon/images/od-el-5.png", alt: "image" }),
                React.createElement("p", null, "eeg")),
            React.createElement("div", { className: "expertiseList__element" },
                React.createElement("img", { src: "/assets/medicon/images/od-el-6.png", alt: "image" }),
                React.createElement("p", null, "foniatrie")),
            React.createElement("div", { className: "expertiseList__element" },
                React.createElement("img", { src: "/assets/medicon/images/od-el-7.png", alt: "image" }),
                React.createElement("p", null, "neurologie")),
            React.createElement("div", { className: "expertiseList__element" },
                React.createElement("img", { src: "/assets/medicon/images/od-el-8.png", alt: "image" }),
                React.createElement("p", null, "gyneorlkologie"))),
        React.createElement(Button, { classes: "btn--blueBkg" }, "vice info")));
};
export default ExpertiseList;
//# sourceMappingURL=ExpertiseList.js.map