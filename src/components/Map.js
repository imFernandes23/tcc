import React, { useEffect, useRef, useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import mapStyle from "./GoogleMapsStyles"

function MapComponent({center, zoom}) {
  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    console.log('chamando o ref', ref.current);
    if(ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center,
          zoom,
          style
        })
      );
    }
  }, [ref,map,center,zoom]);

  return(<div ref={ref} style={{ flexGrow: "1", height: "100%" }} />)
}

const render = (status) => {
  if (status === "LOADING") {
    console.log("Loading...");
    return <h3>{status} ..</h3>;
  }
  if (status === "FAILURE") {
    console.log("Failing...");
    return <h3>{status} ...</h3>;
  }
  if (status === "SUCCESS") {
    console.log("Suceding...");
    return <h3>Success</h3>;
  }
  return null;
};

function MyMap() {
  const center = { lat: -1.350729, lng: -48.367666};
  const zoom = 16;
  return (
    <div style={{ display: 'flex', height: '95vh', width: '100vw', position: "absolute", bottom: 0 }}>
      <Wrapper apiKey="AIzaSyCGhU6kv2oz6AIW4LbG-eO3AraMqmIsAdw" render={render}>
        <MapComponent center={center} zoom={zoom} style={mapStyle}/>
      </Wrapper>
    </div>
  );
}

MyMap.defaultProps = mapStyle

//==============================================
export default MyMap;

