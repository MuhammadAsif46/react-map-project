import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

const Map = () => {
//   const api_Key = "AIzaSyCcDba7w8OQqgWBCmje7-0qDWJHESQDJmA";
  const api_Key = process.env.API_KEY;


  const containerStyle = {
    width: "100%",
    height: "85vh",
  };

  const center = {
    lat: 24.8607,
    lng: 67.0011,
  };
  const anotherMarker = {
    lat: 24.8773,
    lng: 67.1591,
  };

  const { isLoaded } = useJsApiLoader({
    id: api_Key,
    googleMapsApiKey: api_Key,
  });
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      //   onLoad={onLoad}
      //   onUnmount={onUnmount}
    >
      <Marker position={center} />
      <Marker position={anotherMarker} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
