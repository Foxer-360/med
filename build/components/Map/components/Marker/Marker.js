import * as React from 'react';
import MapBox from '../MapBox';
var Marker = function (props) {
    var type = props.type, active = props.active, handleMarkerClick = props.handleMarkerClick, index = props.index;
    return (React.createElement("div", { className: 'markerHolder' },
        React.createElement("div", { className: "marker " + type, onClick: function (e) { return handleMarkerClick(e, index); } }),
        active && React.createElement(MapBox, null)));
};
export default Marker;
//# sourceMappingURL=Marker.js.map