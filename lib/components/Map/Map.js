"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GoogleMapsApiKey = void 0;

var React = _interopRequireWildcard(require("react"));

var _googleMapReact = _interopRequireDefault(require("google-map-react"));

var _Marker = _interopRequireDefault(require("./components/Marker"));

var _MapBox = _interopRequireDefault(require("./components/MapBox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var __extends = void 0 && (void 0).__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var GoogleMapsApiKey = 'AIzaSyCSpatDLsxXguzdvuwbTrK3TulOh10MULI';
exports.GoogleMapsApiKey = GoogleMapsApiKey;
// !DEV ONLY
var clinics = [{
  lat: 50.042601,
  lng: 14.450139,
  type: 'big'
}, {
  lat: 50.107963,
  lng: 14.494764,
  type: 'small'
}, {
  lat: 50.041031,
  lng: 14.429104,
  type: 'small'
}];

var Map =
/** @class */
function (_super) {
  __extends(Map, _super);

  function Map(props) {
    var _this = _super.call(this, props) || this;

    _this.handleMarkerClick = function (e, key, lat, lng) {
      _this.setState({
        activeMarker: key,
        activeMarkerCenter: {
          lat: lat,
          lng: lng
        }
      });

      e.stopPropagation();
    };

    _this.handleMarkerClose = function () {
      _this.setState({
        activeMarker: null,
        activeMarkerCenter: null
      });
    };

    _this.state = {
      activeMarker: null,
      activeMarkerCenter: null
    };
    _this.handleMarkerClose = _this.handleMarkerClose.bind(_this);
    return _this;
  } //   componentWillReceiveProps(nextProps: MapProps & GeolocatedProps) {
  //   if (nextProps && nextProps.coords && nextProps.coords.latitude && nextProps.coords.longitude) {
  //     this.props.onSetPosition(nextProps.coords.latitude, nextProps.coords.longitude);
  //   }
  // }


  Map.prototype.render = function () {
    var _this = this;

    var markers = [];

    if (clinics) {
      clinics.forEach(function (clinic, index) {
        if (clinic.lat && clinic.lng) {
          markers.push(React.createElement(_Marker.default, {
            type: 'small',
            lat: clinic.lat,
            lng: clinic.lng,
            handleMarkerClick: function handleMarkerClick(e, key) {
              return _this.handleMarkerClick(e, key, clinic.lat, clinic.lng);
            },
            handleClose: _this.handleMarkerClose,
            active: _this.state.activeMarker === index,
            key: index,
            index: index
          }));
        }
      });
    }

    var defaultCenter = {
      lat: 50.08804,
      lng: 14.42076
    };
    var center = defaultCenter;
    var defaultZoom = 7;
    var zoom = 10;

    if (this.state.activeMarker) {
      center = this.state.activeMarkerCenter;
    }

    return React.createElement("div", {
      className: "fullWidthContainer"
    }, React.createElement("section", {
      className: 'map'
    }, React.createElement("div", {
      className: 'map__container'
    }, React.createElement("button", null, "Zobrazit v\u0161echny polikliniky")), React.createElement(_googleMapReact.default, {
      bootstrapURLKeys: {
        key: GoogleMapsApiKey
      },
      defaultCenter: defaultCenter,
      defaultZoom: defaultZoom,
      center: center,
      zoom: zoom,
      options: {
        scrollwheel: false
      }
    }, markers), this.state.activeMarker && React.createElement(_MapBox.default, null)));
  };

  return Map;
}(React.Component);

var _default = Map;
exports.default = _default;