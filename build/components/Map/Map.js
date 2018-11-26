var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
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
// !DEV ONLY
var markers = [
    {
        lat: 50,
        lng: 14,
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
    Map.prototype.render = function () {
        var _this = this;
        var defaultCenter = { lat: 50.08804, lng: 14.42076 };
        var center = defaultCenter;
        var defaultZoom = 7;
        var zoom = 7;
        return (React.createElement("div", { className: "fullWidthContainer" },
            React.createElement("section", { className: 'map' },
                React.createElement("div", { className: 'map__container' },
                    React.createElement("button", null, "Zobrazit v\u0161echny polikliniky")),
                React.createElement(GoogleMapReact, { bootstrapURLKeys: { key: GoogleMapsApiKey }, defaultCenter: defaultCenter, defaultZoom: defaultZoom, center: center, zoom: zoom, options: {
                        scrollwheel: false,
                    } }, markers.map(function (marker, index) { return (React.createElement(Marker, { type: 'small', lat: marker.lat, lng: marker.lng, handleMarkerClick: function (e, key) { return _this.handleMarkerClick(e, key, marker.lat, marker.lng); }, handleClose: _this.handleMarkerClose, active: _this.state.activeMarker === index, key: index, index: index })); })))));
    };
    return Map;
}(React.Component));
export default Map;
//# sourceMappingURL=Map.js.map