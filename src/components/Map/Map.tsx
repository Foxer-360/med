import * as React from 'react';
import GoogleMapReact from 'google-map-react';
export const GoogleMapsApiKey = 'AIzaSyCSpatDLsxXguzdvuwbTrK3TulOh10MULI';
import Marker from './components/Marker';

interface Clinic {
  lat:  number;
  lng: number;
}

interface MapState {
  activeMarker: number | null;
  activeMarkerCenter: {
    lat: number | null;
    lng: number | null;
  };
}

interface MapProps {}

// !DEV ONLY
const clinics = [
  {
    lat: 50.042601,
    lng: 14.450139,
    type: 'big',
  },
  {
    lat: 50.107963,  
    lng: 14.494764,
    type: 'small',
  },
  {
    lat: 50.041031,
    lng: 14.429104,
    type: 'small',
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
  }

  handleMarkerClose = () => {
    this.setState({
      activeMarker: null,
      activeMarkerCenter: null,
    });
  }

  //   componentWillReceiveProps(nextProps: MapProps & GeolocatedProps) {
  //   if (nextProps && nextProps.coords && nextProps.coords.latitude && nextProps.coords.longitude) {
  //     this.props.onSetPosition(nextProps.coords.latitude, nextProps.coords.longitude);
  //   }
  // }

  public render() {
    let markers = [];

    if (clinics) {
      clinics.forEach((clinic: Clinic, index: number) => {
        if (clinic.lat && clinic.lng) {
          markers.push(
            <Marker
              type={'small'}
              lat={clinic.lat}
              lng={clinic.lng}
              handleMarkerClick={(e, key) => this.handleMarkerClick(e, key, clinic.lat, clinic.lng)}
              handleClose={this.handleMarkerClose}
              active={this.state.activeMarker === index}
              key={index}
              index={index}
            />
          );
        }
      });
    }

    const defaultCenter = { lat: 50.08804, lng: 14.42076 };
    let center = defaultCenter;
    const defaultZoom = 7;
    const zoom = 10;

    if (this.state.activeMarker) {
      center = this.state.activeMarkerCenter;
    }

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
            {markers}
          </GoogleMapReact>
        </section>
      </div>
    );
  }
}

export default Map;
