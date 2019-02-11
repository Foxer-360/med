import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import { GeolocatedProps, geolocated } from 'react-geolocated';
export const GoogleMapsApiKey = 'AIzaSyCSpatDLsxXguzdvuwbTrK3TulOh10MULI';
import Marker from '../Marker';
import MapBox from '../MapBox';

interface Clinic {
  lat: number;
  lng: number;
  name: string;
}

interface MapComponentState {
  activeMarker: number | null;
  activeMarkerCenter: {
    lat: number | null;
    lng: number | null;
  };
}

interface MapComponentProps {}

// !DEV ONLY
const clinics = [
  {
    lat: 50.042957,
    lng: 14.451078,
    name: 'Poliklinika Budějovická',
  },
  {
    lat: 50.108288,
    lng: 14.494519,
    name: 'Poliklinika Vysočany',
  },
  {
    lat: 50.041,
    lng: 14.429081,
    name: 'Poliklinika Zelený pruh',
  },
  {
    lat: 50.107612,
    lng: 14.443059,
    name: 'Poliklinika Holešovice',
  },
];

class MapComponent extends React.Component<MapComponentProps & GeolocatedProps, MapComponentState> {
  constructor(props: MapComponentProps) {
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

  getMapBounds = (map, maps, locations) => {
    const bounds = new maps.LatLngBounds();

    locations.forEach(location => {
      bounds.extend(new maps.LatLng(location.props.lat, location.props.lng));
    });
    return bounds;
  }

  apiIsLoaded = (map, maps, locations) => {
    if (map) {
      const bounds = this.getMapBounds(map, maps, locations);
      map.fitBounds(bounds);
    }
  }

  deg2Rad = deg => {
    return (deg * Math.PI) / 180;
  }

  pythagorasEquirectangular = (lat1, lon1, lat2, lon2) => {
    lat1 = this.deg2Rad(lat1);
    lat2 = this.deg2Rad(lat2);
    lon1 = this.deg2Rad(lon1);
    lon2 = this.deg2Rad(lon2);
    const R = 6371;
    const x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
    const y = lat2 - lat1;
    const d = Math.sqrt(x * x + y * y) * R;
    return d;
  }

  nearestClinic = (latitude, longitude) => {
    let mindif = 99999;
    let closest;

    for (let index = 0; index < clinics.length; ++index) {
      const dif = this.pythagorasEquirectangular(latitude, longitude, clinics[index].lat, clinics[index].lng);

      if (dif < mindif) {
        closest = index;
        mindif = dif;
      }
    }

    return clinics[closest];
  }

  public render() {
    let markers = [];
    const defaultCenter = { lat: 50.08804, lng: 14.42076 };
    const defaultZoom = 7;

    if (clinics) {
      clinics.forEach((clinic: Clinic, index: number) => {
        if (clinic.lat && clinic.lng) {
          markers.push(
            <Marker
              type={
                clinic.name ===
                this.nearestClinic(
                  this.props.coords ? this.props.coords.latitude : defaultCenter.lat,
                  this.props.coords ? this.props.coords.longitude : defaultCenter.lng
                ).name
                  ? 'big'
                  : 'small'
              }
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

      markers.push(
        <Marker
          type={'geoLocation'}
          lat={this.props.coords ? this.props.coords.latitude : defaultCenter.lat}
          lng={this.props.coords ? this.props.coords.longitude : defaultCenter.lng}
          key={markers.length + 1}
          index={markers.length + 1}
        />
      );
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
            center={defaultCenter}
            defaultZoom={defaultZoom}
            options={{
              scrollwheel: false,
            }}
            yesIWantToUseGoogleMapApiInternals={true}
            onGoogleApiLoaded={({ map, maps }) => this.apiIsLoaded(map, maps, markers)}
          >
            {markers}
          </GoogleMapReact>

          {this.state.activeMarker && <MapBox />}
        </section>
      </div>
    );
  }
}

export default geolocated()(MapComponent);
