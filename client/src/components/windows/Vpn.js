import React, { useState } from "react";
import BrowserFrame from "react-browser-frame";
import map from "../../images/map.png";

function Vpn({ vpn, setVpn }) {
  return (
    <BrowserFrame
      url="Currently://Amsterdam, The Netherlands"
      visible={vpn}
      setVisible={setVpn}
    >
      <img
        src={map}
        alt="map"
        width="710px"
        height="380px"
        style={{
          borderBottomLeftRadius: "5px",
          borderBottomRightRadius: "5px",
        }}
      />
    </BrowserFrame>
  );
}

export default Vpn;
