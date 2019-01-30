"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _DoctorSchedule = _interopRequireDefault(require("./components/DoctorSchedule/DoctorSchedule"));

var _TextBlock = _interopRequireDefault(require("../TextBlock"));

var _Button = _interopRequireDefault(require("../../partials/Button"));

var _Media = _interopRequireDefault(require("../../partials/Media"));

var _graphqlTag = _interopRequireDefault(require("graphql-tag"));

var _reactApollo = require("react-apollo");

var R = _interopRequireWildcard(require("ramda"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var __makeTemplateObject = void 0 && (void 0).__makeTemplateObject || function (cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
};

var GET_CONTEXT = (0, _graphqlTag.default)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["{\n  datasourceItems @client\n}"], ["{\n  datasourceItems @client\n}"])));

var DoctorCard = function DoctorCard(props) {
  return React.createElement(_reactApollo.Query, {
    query: GET_CONTEXT
  }, function (_a) {
    var error = _a.error,
        loading = _a.loading,
        data = _a.data;

    if (error) {
      return 'Error...';
    }

    if (loading) {
      return 'Loading...';
    }

    var datasourceItems = data.datasourceItems;
    var regex = /%([^%]*)%/g;
    var stringifiedData = JSON.stringify(props.data);
    var result;
    var matches = [];

    while (result = regex.exec(stringifiedData)) {
      console.log(result);

      if (result[1]) {
        try {
          var searchKeys = result[1].split(',');
          console.log(searchKeys);

          if (Array.isArray(searchKeys) && searchKeys.length > 0) {
            var getValueFromDatasourceItems = R.path(searchKeys);
            console.log(datasourceItems[datasourceItems.length - 1]);
            var replacement = getValueFromDatasourceItems(datasourceItems[datasourceItems.length - 1].content);
            console.log(result, replacement);

            if (replacement) {
              stringifiedData = stringifiedData.replace(result[0], replacement);
            }
          }
        } catch (e) {
          console.log(e);
        }
      }
    }

    var parsedData = JSON.parse(stringifiedData);
    console.log(parsedData);
    var name = parsedData.name,
        specialization = parsedData.specialization,
        phone = parsedData.phone,
        nurse = parsedData.nurse,
        doctorImage = parsedData.doctorImage,
        clinicImage = parsedData.clinicImage,
        clinicName = parsedData.clinicName,
        clinicExtraInfo = parsedData.clinicExtraInfo,
        clinicAddress = parsedData.clinicAddress,
        schedule = parsedData.schedule,
        additionalInfo = parsedData.additionalInfo;
    return React.createElement("section", {
      className: 'doctorCard'
    }, React.createElement("div", {
      className: "container"
    }, React.createElement("div", {
      className: 'doctorCard__main'
    }, doctorImage && React.createElement(_Media.default, {
      data: doctorImage,
      type: "image"
    }) || React.createElement("img", {
      src: "/assets/medicon/images/doctorIcon.svg"
    }), name && React.createElement("h3", {
      className: 'gradientHeading'
    }, name), specialization && React.createElement("p", {
      className: 'doctorCard__main__spe'
    }, specialization), nurse && React.createElement("p", {
      className: 'doctorCard__main__sis'
    }, "Sestra: ", React.createElement("strong", null, nurse)))), React.createElement("div", {
      className: 'fullwidthContainer'
    }, React.createElement("div", {
      className: "doctorCard__info"
    }, React.createElement("div", {
      className: 'container'
    }, React.createElement("div", {
      className: "doctorCard__info__wrapper"
    }, React.createElement("div", {
      className: 'doctorCard__info__item'
    }, React.createElement("img", {
      src: "/assets/medicon/images/stethoscopeIcon.svg"
    }), React.createElement("p", null, specialization)), React.createElement("div", {
      className: 'doctorCard__info__item'
    }, React.createElement("img", {
      src: "/assets/medicon/images/phoneIcon.svg"
    }), phone && React.createElement("p", null, phone)), React.createElement("div", {
      className: 'doctorCard__info__item'
    }, React.createElement("img", {
      src: "/assets/medicon/images/geoIcon.svg"
    }), React.createElement("div", null, React.createElement("p", null, React.createElement("strong", null, clinicName), clinicExtraInfo && React.createElement("span", null, ' - ' + clinicExtraInfo)), React.createElement("p", null, clinicAddress))))))), React.createElement("div", {
      className: 'container'
    }, React.createElement("div", {
      className: 'doctorCard__timePlace'
    }, React.createElement("div", null, schedule && React.createElement(_DoctorSchedule.default, {
      data: schedule
    })), React.createElement("div", null, clinicImage && React.createElement(_Media.default, {
      data: clinicImage,
      type: "image"
    }))), React.createElement("div", {
      className: 'doctorCard__btnHolder'
    }, React.createElement(_Button.default, {
      classes: 'btn--blueBkg',
      noArrow: true
    }, "objednat")), React.createElement("div", {
      className: 'doctorCard__divider'
    }, React.createElement("div", {
      className: "dividerCircles"
    }, React.createElement("div", null)))), additionalInfo && additionalInfo.map(function (item, i) {
      return React.createElement(_TextBlock.default, {
        key: i,
        data: {
          title: item.title,
          text: item.text
        }
      });
    }));
  });
};

var _default = DoctorCard;
exports.default = _default;
var templateObject_1;