import * as React from 'react';
import GoogleMapReact from 'google-map-react';
import { GeolocatedProps, geolocated } from 'react-geolocated';
export const GoogleMapsApiKey = 'AIzaSyCSpatDLsxXguzdvuwbTrK3TulOh10MULI';

import Marker from '../Marker';
import MapBox from '../MapBox';

interface MapComponentState {
  activeMarker: number | null;
  boxData: LooseObject;
  activeMarkerCenter: {
    lat: number | null;
    lng: number | null;
  };
}

interface MapComponentProps {
  clinics: LooseObject;
}

class MapComponent extends React.Component<MapComponentProps & GeolocatedProps, MapComponentState> {
  constructor(props: MapComponentProps) {
    super(props);

    this.state = {
      boxData: null,
      activeMarker: null,
      activeMarkerCenter: null,
    };

    this.handleMarkerClose = this.handleMarkerClose.bind(this);
  }

  handleMarkerClick = (e: any, key: number, clinic: LooseObject) => {
    this.setState({
      activeMarker: key,
      activeMarkerCenter: { lat: clinic.lat, lng: clinic.lng },
      boxData: clinic,
    });
    e.stopPropagation();
  }

  handleMarkerClose = () => {
    this.setState({
      activeMarker: null,
      activeMarkerCenter: null,
      boxData: null,
    });
  }

  displayBox = clinicData => {
    this.setState({
      boxData: clinicData,
    });
  }

  getMapBounds = (map, maps, locations) => {
    const bounds = new maps.LatLngBounds();

    locations.forEach(location => {
      bounds.extend(new maps.LatLng(location.lat, location.lng));
    });

    if (this.props.coords) {
      bounds.extend(new maps.LatLng(this.props.coords.latitude, this.props.coords.longitude));
    }

    return bounds;
  }

  apiIsLoaded = (map, maps, locations) => {
    if (map && locations && locations.length > 0) {
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

  nearestClinic = (latitude, longitude, clinics) => {
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
    const defaultCenter = { lat: 50.08804, lng: 14.42076 };
    const defaultZoom = 7;

    return (
      <div className="fullWidthContainer">
        <section className={'map'}>
          {/* // ! HIDDEN UNTIL FUNTIONALITY IMPLEMENTED */}
          {/* {<div className={'map__container'}>
            <button>Zobrazit všechny polikliniky</button>
          </div>} */}

          {this.props.clinics && (
            <GoogleMapReact
              bootstrapURLKeys={{ key: GoogleMapsApiKey }}
              defaultCenter={defaultCenter}
              center={defaultCenter}
              defaultZoom={defaultZoom}
              options={{
                scrollwheel: false,
              }}
              yesIWantToUseGoogleMapApiInternals={true}
              onGoogleApiLoaded={({ map, maps }) => this.apiIsLoaded(map, maps, this.props.clinics)}
            >
              {this.props.clinics.length > 0 &&
                this.props.clinics.map((clinic, index) => {
                  if (clinic.lat && clinic.lng && (clinic.lat.trim().length > 0 && clinic.lng.trim().length > 0)) {
                    return (
                      <Marker
                        type={'small'}
                        lat={Number(clinic.lat)}
                        lng={Number(clinic.lng)}
                        handleMarkerClick={(e, key) => this.handleMarkerClick(e, key, clinic)}
                        handleClose={this.handleMarkerClose}
                        active={this.state.activeMarker === index || ( clinic.title ===
                          this.nearestClinic(
                            this.props.coords ? this.props.coords.latitude : defaultCenter.lat,
                            this.props.coords ? this.props.coords.longitude : defaultCenter.lng,
                            this.props.clinics
                          ).title && this.state.activeMarker === null)}
                        key={index}
                        index={index}
                        handleMarkerClose={this.handleMarkerClose}
                      />
                    );
                  }
                })}

              <Marker
                type={'geoLocation'}
                lat={this.props.coords ? this.props.coords.latitude : defaultCenter.lat}
                lng={this.props.coords ? this.props.coords.longitude : defaultCenter.lng}
                key={this.props.clinics.length + 1}
                index={this.props.clinics.length + 1}
              />
            </GoogleMapReact>
          )}
          {this.state.boxData && <MapBox clinicData={this.state.boxData} close={this.handleMarkerClose} />}
        </section>
      </div>
    );
  }
}

export default geolocated()(MapComponent);
