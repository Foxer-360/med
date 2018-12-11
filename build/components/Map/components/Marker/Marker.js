import * as React from 'react';
var Marker = function (props) {
    var type = props.type, active = props.active, handleMarkerClick = props.handleMarkerClick, index = props.index;
    return (React.createElement("div", { className: 'markerHolder' },
        type !== 'geoLocation' && React.createElement("div", { className: "marker " + type, onClick: function (e) { return handleMarkerClick(e, index); } }),
        type === 'geoLocation' && React.createElement("div", { className: 'geoLocationMarker' })));
};
export default Marker;
//# sourceMappingURL=Marker.js.map