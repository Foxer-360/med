import * as React from 'react';

interface MarkerProps {
  type: string;
  lat: number;
  lng: number;
  active: boolean;
  handleMarkerClick: Function;
  handleClose: Function;
  index: number;
}

const Marker: React.SFC<MarkerProps> = props => {
  const { type, active, handleMarkerClick, index } = props;
  return (
    <div className={'markerHolder'}>
      <div className={`marker ${type}`} onClick={e => handleMarkerClick(e, index)} />

    </div>
  );
};

export default Marker;
