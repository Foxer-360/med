import * as React from 'react';
import LazyLoad from 'react-lazyload';

import List from '../List';
import MapComponent from './components/MapComponent';

export interface MapProps {
  data: LooseObject;
}

const Map = (props: MapProps) => {
  return (
    <LazyLoad height={509} offset={100}>
      <List data={props.data.items}>{({ data }) => {
        return <MapComponent clinics={data} />;
      }}</List>
    </LazyLoad>);
};

export default Map;
