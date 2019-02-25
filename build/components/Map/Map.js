import * as React from 'react';
import MapComponent from './components/MapComponent';
import List from '../List';
var Map = function (props) {
    return (React.createElement(List, { data: props.data.items }, function (_a) {
        var data = _a.data;
        return React.createElement(MapComponent, { clinics: data });
    }));
};
export default Map;
//# sourceMappingURL=Map.js.map