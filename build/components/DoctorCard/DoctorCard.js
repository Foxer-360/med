var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import DoctorSchedule from './components/DoctorSchedule/DoctorSchedule';
import TextBlock from '../TextBlock';
import Button from '../../partials/Button';
import Media from '../../partials/Media';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import * as R from 'ramda';
var GET_CONTEXT = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["{\n  datasourceItems @client\n}"], ["{\n  datasourceItems @client\n}"])));
var DoctorCard = function (props) {
    return (React.createElement(Query, { query: GET_CONTEXT }, function (_a) {
        var error = _a.error, loading = _a.loading, data = _a.data;
        if (error) {
            return 'Error...';
        }
        if (loading) {
            return 'Loading...';
        }
        var datasourceItems = data.datasourceItems;
        var regex = /%([^%]*)%/g;
        var stringifiedData = JSON.stringify(props.data);
        var replacedData = String(stringifiedData);
        var result;
        while (result = regex.exec(stringifiedData)) {
            if (result[1]) {
                try {
                    var searchKeys = result[1].split(',');
                    console.log(searchKeys);
                    if (Array.isArray(searchKeys) && searchKeys.length > 0) {
                        var getValueFromDatasourceItems = R.path(searchKeys);
                        var replacement = getValueFromDatasourceItems(datasourceItems[datasourceItems.length - 1].content);
                        if (replacement) {
                            replacedData = replacedData.replace(result[0], replacement);
                        }
                    }
                }
                catch (e) {
                    console.log(e);
                }
            }
        }
        var parsedData = JSON.parse(replacedData);
        console.log(parsedData);
        var name = parsedData.name, specialization = parsedData.specialization, phone = parsedData.phone, nurse = parsedData.nurse, doctorImage = parsedData.doctorImage, clinicImage = parsedData.clinicImage, clinicName = parsedData.clinicName, clinicExtraInfo = parsedData.clinicExtraInfo, clinicAddress = parsedData.clinicAddress, schedule = parsedData.schedule, additionalInfo = parsedData.additionalInfo;
        return (React.createElement("section", { className: 'doctorCard' },
            React.createElement("div", { className: "container" },
                React.createElement("div", { className: 'doctorCard__main' },
                    (doctorImage && React.createElement(Media, { data: doctorImage, type: "image" })) || (React.createElement("img", { src: "/assets/medicon/images/doctorIcon.svg" })),
                    name && React.createElement("h3", { className: 'gradientHeading' }, name),
                    specialization && React.createElement("p", { className: 'doctorCard__main__spe' }, specialization),
                    nurse && (React.createElement("p", { className: 'doctorCard__main__sis' },
                        "Sestra: ",
                        React.createElement("strong", null, nurse))))),
            React.createElement("div", { className: 'fullwidthContainer' },
                React.createElement("div", { className: "doctorCard__info" },
                    React.createElement("div", { className: 'container' },
                        React.createElement("div", { className: "doctorCard__info__wrapper" },
                            React.createElement("div", { className: 'doctorCard__info__item' },
                                React.createElement("img", { src: "/assets/medicon/images/stethoscopeIcon.svg" }),
                                React.createElement("p", null, specialization)),
                            React.createElement("div", { className: 'doctorCard__info__item' },
                                React.createElement("img", { src: "/assets/medicon/images/phoneIcon.svg" }),
                                phone && React.createElement("p", null, phone)),
                            React.createElement("div", { className: 'doctorCard__info__item' },
                                React.createElement("img", { src: "/assets/medicon/images/geoIcon.svg" }),
                                React.createElement("div", null,
                                    React.createElement("p", null,
                                        React.createElement("strong", null, clinicName),
                                        clinicExtraInfo && React.createElement("span", null, ' - ' + clinicExtraInfo)),
                                    React.createElement("p", null, clinicAddress))))))),
            React.createElement("div", { className: 'container' },
                React.createElement("div", { className: 'doctorCard__timePlace' },
                    React.createElement("div", null, schedule && React.createElement(DoctorSchedule, { data: schedule })),
                    React.createElement("div", null, clinicImage && React.createElement(Media, { data: clinicImage, type: "image" }))),
                React.createElement("div", { className: 'doctorCard__btnHolder' },
                    React.createElement(Button, { classes: 'btn--blueBkg', noArrow: true }, "objednat")),
                React.createElement("div", { className: 'doctorCard__divider' },
                    React.createElement("div", { className: "dividerCircles" },
                        React.createElement("div", null)))),
            additionalInfo &&
                additionalInfo.map(function (item, i) {
                    return React.createElement(TextBlock, { key: i, data: { title: item.title, text: item.text } });
                })));
    }));
};
export default DoctorCard;
var templateObject_1;
//# sourceMappingURL=DoctorCard.js.map