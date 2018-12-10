var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import GoogleMapReact from 'google-map-react';
export var GoogleMapsApiKey = 'AIzaSyCSpatDLsxXguzdvuwbTrK3TulOh10MULI';
import Marker from './components/Marker';
import MapBox from './components/MapBox';
// !DEV ONLY
var clinics = [
    {
        lat: 50.042601,
        lng: 14.450139,
        type: 'big',
    },
    {
        lat: 50.107963,
        lng: 14.494764,
        type: 'small',
    },
    {
        lat: 50.041031,
        lng: 14.429104,
        type: 'small',
    },
];
var Map = /** @class */ (function (_super) {
    __extends(Map, _super);
    function Map(props) {
        var _this = _super.call(this, props) || this;
        _this.handleMarkerClick = function (e, key, lat, lng) {
            _this.setState({
                activeMarker: key,
                activeMarkerCenter: { lat: lat, lng: lng },
            });
            e.stopPropagation();
        };
        _this.handleMarkerClose = function () {
            _this.setState({
                activeMarker: null,
                activeMarkerCenter: null,
            });
        };
        _this.state = {
            activeMarker: null,
            activeMarkerCenter: null,
        };
        _this.handleMarkerClose = _this.handleMarkerClose.bind(_this);
        return _this;
    }
    //   componentWillReceiveProps(nextProps: MapProps & GeolocatedProps) {
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
                    markers.push(React.createElement(Marker, { type: 'small', lat: clinic.lat, lng: clinic.lng, handleMarkerClick: function (e, key) { return _this.handleMarkerClick(e, key, clinic.lat, clinic.lng); }, handleClose: _this.handleMarkerClose, active: _this.state.activeMarker === index, key: index, index: index }));
                }
            });
        }
        var defaultCenter = { lat: 50.08804, lng: 14.42076 };
        var center = defaultCenter;
        var defaultZoom = 7;
        var zoom = 10;
        if (this.state.activeMarker) {
            center = this.state.activeMarkerCenter;
        }
        return (React.createElement("div", { className: "fullWidthContainer" },
            React.createElement("section", { className: 'map' },
                React.createElement("div", { className: 'map__container' },
                    React.createElement("button", null, "Zobrazit v\u0161echny polikliniky")),
                React.createElement(GoogleMapReact, { bootstrapURLKeys: { key: GoogleMapsApiKey }, defaultCenter: defaultCenter, defaultZoom: defaultZoom, center: center, zoom: zoom, options: {
                        scrollwheel: false,
                    } }, markers),
                this.state.activeMarker && React.createElement(MapBox, null))));
    };
    return Map;
}(React.Component));
export default Map;
//# sourceMappingURL=Map.js.map