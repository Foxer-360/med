import * as React from 'react';
import MapComponent from './components/MapComponent';
var Map = function (props) {
    return React.createElement(MapComponent, { clinics: props.data.items });
};
export default Map;
//# sourceMappingURL=Map.js.map