import React, { useState } from "react";
import BrowserFrame from "react-browser-frame";
import map from "../../images/map.png";

function Vpn() {
  const [vpn, setVpn] = useState(true);
  return (
    <BrowserFrame
      url="PROTECTED:// Netherlands #885"
      visible={vpn}
      setVisible={setVpn}
    >
      <img
        src={map}
        alt="map"
        width="710px"
        height="380px"
        style={{ borderRadius: "5px" }}
      />
    </BrowserFrame>
  );
}

export default Vpn;
