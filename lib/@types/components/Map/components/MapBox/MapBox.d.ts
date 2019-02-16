import * as React from 'react';
interface MapBoxProps {
    close: () => void;
    clinicData?: LooseObject;
}
declare const MapBox: React.SFC<MapBoxProps>;
export default MapBox;
