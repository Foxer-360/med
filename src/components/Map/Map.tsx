import * as React from 'react';
import GoogleMapReact from 'google-map-react';
export const GoogleMapsApiKey = 'AIzaSyCSpatDLsxXguzdvuwbTrK3TulOh10MULI';
import Marker from './components/Marker';

interface MapState {
  activeMarker: number | null;
  activeMarkerCenter: {
    lat: number | null;
    lng: number | null;
  };
}

interface MapProps {}

// !DEV ONLY
const markers = [
  {
    lat: 50,
    lng: 14,
  },
];

class Map extends React.Component<any, MapState> {
  constructor(props: MapProps) {
    super(props);

    this.state = {
      activeMarker: null,
      activeMarkerCenter: null,
    };

    this.handleMarkerClose = this.handleMarkerClose.bind(this);
  }

  handleMarkerClick = (e: any, key: number, lat: number, lng: number) => {
    this.setState({
      activeMarker: key,
      activeMarkerCenter: { lat, lng },
    });
    e.stopPropagation();
  };

  handleMarkerClose = () => {
    this.setState({
      activeMarker: null,
      activeMarkerCenter: null,
    });
  };

  public render() {
    const defaultCenter = { lat: 50.08804, lng: 14.42076 };
    let center = defaultCenter;
    const defaultZoom = 7;
    const zoom = 7;
    return (
      <div className="fullWidthContainer">
        <section className={'map'}>
          <div className={'map__container'}>
            <button>Zobrazit všechny polikliniky</button>
          </div>

          <GoogleMapReact
            bootstrapURLKeys={{ key: GoogleMapsApiKey }}
            defaultCenter={defaultCenter}
            defaultZoom={defaultZoom}
            center={center}
            zoom={zoom}
            options={{
              scrollwheel: false,
            }}
          >
            {markers.map((marker, index) => (
              <Marker
                type={'small'}
                lat={marker.lat}
                lng={marker.lng}
                handleMarkerClick={(e, key) => this.handleMarkerClick(e, key, marker.lat, marker.lng)}
                handleClose={this.handleMarkerClose}
                active={this.state.activeMarker === index}
                key={index}
                index={index}
              />
            ))}
          </GoogleMapReact>
        </section>
      </div>
    );
  }
}

export default Map;
