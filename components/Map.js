'use client'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MdPadding } from 'react-icons/md';

const containerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '20px',
  width: '25%',
  height: '400px'
};

const center = {
  lat: 36.082337,
  lng: -79.43906
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;