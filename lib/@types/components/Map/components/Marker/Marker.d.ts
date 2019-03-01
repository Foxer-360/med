import * as React from 'react';
interface MarkerProps {
    type: string;
    lat: number;
    lng: number;
    active?: boolean;
    handleMarkerClick?: Function;
    handleClose?: Function;
    index: number;
    handleMarkerClose?: () => void;
}
declare const Marker: React.SFC<MarkerProps>;
export default Marker;
