import React from "react";
import "./changeMapType.css";
import mapToggleIcon from "../../assets/map-icon.png";
const ChangeMapType = (props) => {
  const { handleMapToggle } = props;
  return (
    <>
      <div className="changeMapTypeContainer">
        <img
          className="containerToggle"
          src={mapToggleIcon}
          alt="Map toggle"
          onClick={handleMapToggle}
        />
      </div>
    </>
  );
};
export default ChangeMapType;
