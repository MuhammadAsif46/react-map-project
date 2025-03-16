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
  //   const anotherMarker = {
  //     lat: 24.8773,
  //     lng: 67.1591,
  //   };

  const makers = [
    {
      name: "location1",
      location: {
        lat: 24.8253,
        lng: 67.1261,
      },
    },
    {
      name: "location2",
      location: {
        lat: 24.8607,
        lng: 67.0011,
      },
    },
    {
      name: "location3",
      location: {
        lat: 24.8433,
        lng: 67.0542,
      },
    },
    {
      name: "location4",
      location: {
        lat: 24.8602,
        lng: 66.8637,
      },
    },
    {
      name: "location5",
      location: {
        lat: 24.9172,
        lng: 67.0924,
      },
    },
    {
      name: "location6",
      location: {
        lat: 24.8773,
        lng: 67.1591,
      },
    },
  ];

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
      {makers.map((item) => (
        <Marker key={item.name} position={item.location} />
      ))}
      {/* <Marker position={anotherMarker} /> */}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
