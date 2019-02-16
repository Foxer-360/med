import * as React from 'react';
import MapComponent from './components/MapComponent';

export interface MapProps {
  data: LooseObject;
}

const Map = (props: MapProps) => {
  return <MapComponent clinics={props.data.items} />;
};

export default Map;
