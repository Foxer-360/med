"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.GoogleMapsApiKey = void 0;

var React = _interopRequireWildcard(require("react"));

var _googleMapReact = _interopRequireDefault(require("google-map-react"));

var _reactGeolocated = require("react-geolocated");

var _Marker = _interopRequireDefault(require("../Marker"));

var _List = _interopRequireDefault(require("../../../List"));

var _MapBox = _interopRequireDefault(require("../MapBox"));

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

var MapComponent =
/** @class */
function (_super) {
  __extends(MapComponent, _super);

  function MapComponent(props) {
    var _this = _super.call(this, props) || this;

    _this.handleMarkerClick = function (e, key, clinic) {
      _this.setState({
        activeMarker: key,
        activeMarkerCenter: {
          lat: clinic.lat,
          lng: clinic.lng
        },
        boxData: clinic
      });

      e.stopPropagation();
    };

    _this.handleMarkerClose = function () {
      _this.setState({
        activeMarker: null,
        activeMarkerCenter: null,
        boxData: null
      });
    };

    _this.displayBox = function (clinicData) {
      _this.setState({
        boxData: clinicData
      });
    };

    _this.getMapBounds = function (map, maps, locations) {
      var bounds = new maps.LatLngBounds();
      locations.forEach(function (location) {
        bounds.extend(new maps.LatLng(location.lat, location.lng));
      });
      return bounds;
    };

    _this.apiIsLoaded = function (map, maps, locations) {
      if (map) {
        var bounds = _this.getMapBounds(map, maps, locations);

        map.fitBounds(bounds);
      }
    };

    _this.deg2Rad = function (deg) {
      return deg * Math.PI / 180;
    };

    _this.pythagorasEquirectangular = function (lat1, lon1, lat2, lon2) {
      lat1 = _this.deg2Rad(lat1);
      lat2 = _this.deg2Rad(lat2);
      lon1 = _this.deg2Rad(lon1);
      lon2 = _this.deg2Rad(lon2);
      var R = 6371;
      var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
      var y = lat2 - lat1;
      var d = Math.sqrt(x * x + y * y) * R;
      return d;
    };

    _this.nearestClinic = function (latitude, longitude, clinics) {
      var mindif = 99999;
      var closest;

      for (var index = 0; index < clinics.length; ++index) {
        var dif = _this.pythagorasEquirectangular(latitude, longitude, clinics[index].lat, clinics[index].lng);

        if (dif < mindif) {
          closest = index;
          mindif = dif;
        }
      }

      return clinics[closest];
    };

    _this.state = {
      boxData: null,
      activeMarker: null,
      activeMarkerCenter: null
    };
    _this.handleMarkerClose = _this.handleMarkerClose.bind(_this);
    return _this;
  }

  MapComponent.prototype.render = function () {
    var _this = this;

    var defaultCenter = {
      lat: 50.08804,
      lng: 14.42076
    };
    var defaultZoom = 7;
    return React.createElement("div", {
      className: "fullWidthContainer"
    }, React.createElement("section", {
      className: 'map'
    }, React.createElement("div", {
      className: 'map__container'
    }, React.createElement("button", null, "Zobrazit v\u0161echny polikliniky")), React.createElement(_List.default, {
      data: this.props.clinics
    }, function (_a) {
      var data = _a.data;
      return React.createElement(React.Fragment, null, data && React.createElement(_googleMapReact.default, {
        bootstrapURLKeys: {
          key: GoogleMapsApiKey
        },
        defaultCenter: defaultCenter,
        center: defaultCenter,
        defaultZoom: defaultZoom,
        options: {
          scrollwheel: false
        },
        yesIWantToUseGoogleMapApiInternals: true,
        onGoogleApiLoaded: function onGoogleApiLoaded(_a) {
          var map = _a.map,
              maps = _a.maps;
          return _this.apiIsLoaded(map, maps, data);
        }
      }, data.map(function (clinic, index) {
        if (clinic.lat && clinic.lng) {
          return React.createElement(_Marker.default, {
            type: clinic.title === _this.nearestClinic(_this.props.coords ? _this.props.coords.latitude : defaultCenter.lat, _this.props.coords ? _this.props.coords.longitude : defaultCenter.lng, data).title ? 'big' : 'small',
            lat: clinic.lat,
            lng: clinic.lng,
            handleMarkerClick: function handleMarkerClick(e, key) {
              return _this.handleMarkerClick(e, key, clinic);
            },
            handleClose: _this.handleMarkerClose,
            active: _this.state.activeMarker === index,
            key: index,
            index: index,
            handleMarkerClose: _this.handleMarkerClose
          });
        }
      }), React.createElement(_Marker.default, {
        type: 'geoLocation',
        lat: _this.props.coords ? _this.props.coords.latitude : defaultCenter.lat,
        lng: _this.props.coords ? _this.props.coords.longitude : defaultCenter.lng,
        key: data.length + 1,
        index: data.length + 1
      })));
    }), this.state.boxData && React.createElement(_MapBox.default, {
      clinicData: this.state.boxData,
      close: this.handleMarkerClose
    })));
  };

  return MapComponent;
}(React.Component);

var _default = (0, _reactGeolocated.geolocated)()(MapComponent);

exports.default = _default;