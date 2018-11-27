import * as React from 'react';
export declare const GoogleMapsApiKey = "AIzaSyCSpatDLsxXguzdvuwbTrK3TulOh10MULI";
interface MapState {
    activeMarker: number | null;
    activeMarkerCenter: {
        lat: number | null;
        lng: number | null;
    };
}
interface MapProps {
}
declare class Map extends React.Component<any, MapState> {
    constructor(props: MapProps);
    handleMarkerClick: (e: any, key: number, lat: number, lng: number) => void;
    handleMarkerClose: () => void;
    render(): JSX.Element;
}
export default Map;
