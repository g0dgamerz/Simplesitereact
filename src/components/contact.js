import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
// const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>;

class Contact extends Component {
  static defaultProps = {
    center: {
      lat: 27.6915,
      lng: 85.2959
    },
    zoom: 10
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAlUadcsiIA417mWA2fZXHCLsAytRhJxW8' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={27.6915}
            lng={85.2959}
            key = 'AIzaSyAlUadcsiIA417mWA2fZXHCLsAytRhJxW8'
            text=""
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Contact;
