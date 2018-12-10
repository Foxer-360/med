import * as React from 'react';
var Marker = function (props) {
    var type = props.type, active = props.active, handleMarkerClick = props.handleMarkerClick, index = props.index;
    return (React.createElement("div", { className: 'markerHolder' },
        React.createElement("div", { className: "marker " + type, onClick: function (e) { return handleMarkerClick(e, index); } })));
};
export default Marker;
//# sourceMappingURL=Marker.js.map