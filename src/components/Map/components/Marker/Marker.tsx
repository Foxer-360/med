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

const Marker: React.SFC<MarkerProps> = props => {
  const { type, active, handleMarkerClick, index, handleMarkerClose } = props;
  return (
    <>
      <div className={`markerHolder`}>
        {type !== 'geoLocation' && (
          <div className={`marker ${active ? 'active' : type}`} onClick={e => handleMarkerClick(e, index)} />
        )}
        {type === 'geoLocation' && <div className={'geoLocationMarker'} />}
      </div>
    </>
  );
};

export default Marker;
