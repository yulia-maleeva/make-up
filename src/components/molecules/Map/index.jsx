import React from "react";

import GoogleMapReact from "google-map-react";

const Map = () => {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        // add your API key here
        bootstrapURLKeys={{ key: "YOUR_API_KEY" }}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
        defaultZoom={12}
      />
    </div>
  );
};

export default Map;
