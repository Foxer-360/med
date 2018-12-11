import * as React from 'react';
import MapComponent from './components/MapComponent';

export interface MapProps {}

const Map = (props: MapProps) => {
  return (
    <div>
      <MapComponent />
    </div>  
  );
};

export default Map;
