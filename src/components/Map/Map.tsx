import * as React from 'react';
import LazyLoad from 'react-lazyload';

import List from '../List';
import MapComponent from './components/MapComponent';

export interface MapProps {
  data: LooseObject;
}

const Map = (props: MapProps) => {

  const BACKOFFICE = window && document.querySelector('.ant-layout') ? true : false;
  
  const map = (
    <List data={props.data.items}>{({ data }) => {
      return <MapComponent clinics={data} />;
    }}</List>
  );

  return BACKOFFICE ? map : <LazyLoad height={509} offset={100}>{map}</LazyLoad>;
};

export default Map;
