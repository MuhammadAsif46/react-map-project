import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import "./map.css";
import React, { useState } from "react";
import mapIcon from "../../assets/map-icon.png";
import { MAP_THEME, mapOptions } from "../../utilis/mapConfig";
const Map = () => {
  const api_Key = process.env.API_KEY;
  const [selectedMarker, setSelectedMarker] = useState("");

  const containerStyle = {
    width: "100%",
    height: "87vh",
  };

  const center = {
    lat: 24.8607,
    lng: 67.0011,
  };

  const waterStyles = [
    {
      featureType: "water",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#17bd2a",
        },
      ],
    },
  ];
  //   const anotherMarker = {
  //     lat: 24.8773,
  //     lng: 67.1591,
  //   };

  const makers = [
    {
      name: "Nasir Colony",
      status: "area",
      location: {
        lat: 24.8253,
        lng: 67.1261,
      },
    },
    {
      name: "Karachi",
      status: "main",
      location: {
        lat: 24.8607,
        lng: 67.0011,
      },
    },
    {
      name: "Tooba Masjid",
      status: "masjid",
      location: {
        lat: 24.8433,
        lng: 67.0542,
      },
    },
    {
      name: "Hawke's Bay",
      status: "Beach",
      location: {
        lat: 24.8602,
        lng: 66.8637,
      },
    },
    {
      name: "Gulshan-E-Iqbal",
      status: "main",
      location: {
        lat: 24.9172,
        lng: 67.0924,
      },
    },
    {
      name: "Shah Faisal",
      status: "Town",
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
      options={{
        //   mapTypeControl: false,
        //   mapTypeId: "satellite",
        //   mapTypeId: "terrain",
        //   mapTypeId: "hybrid",
        //   fullscreenControl: false,
        //   streetViewControl: false,
        //   zoomControl: false,
        //   disableDefaultUI: true,
        //   draggable: false,
        //   navigationControl: false
        // styles: waterStyles,
        styles: mapOptions.mapTheme
      }}
    >
      {makers.map((item) => (
        <Marker
          key={item.name}
          position={item.location}
          //   options={{
          //     icon: item.status === "icon1" ? mapIcon : "",
          //   }}
          onClick={() => setSelectedMarker(item)}
        />
      ))}
      {/* <Marker position={anotherMarker} /> */}

      {selectedMarker && (
        <InfoWindow
          position={selectedMarker.location}
          options={{
            pixelOffset: new window.google.maps.Size(0, -40),
          }}
        >
          <div>
            <h2>Location - {selectedMarker.name}</h2>
            <h2>status - {selectedMarker.status}</h2>
            <button onClick={() => setSelectedMarker("")}>Close</button>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
