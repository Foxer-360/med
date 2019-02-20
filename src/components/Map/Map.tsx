import * as React from 'react';
import MapComponent from './components/MapComponent';
import List from '../List';

export interface MapProps {
  data: LooseObject;
}

const Map = (props: MapProps) => {
  return (
    <List data={props.data.items}>{({ data }) => {
      return <MapComponent clinics={data} />;
    }}</List>);
};  

export default Map;
