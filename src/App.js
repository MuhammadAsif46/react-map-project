import React from "react";
import Map from "./components/Map/Map";
import { FaMapMarkerAlt } from "react-icons/fa";

const App = () => {
  return (
    <div>
      <h1>
        Google React Map Javascript Api
        <FaMapMarkerAlt />
      </h1>
      <Map />
    </div>
  );
};

export default App;
