import React from "react";
import BrowserFrame from "react-browser-frame";
import map from "../../images/map.jpg";

function Vpn({ vpn, setVpn }) {
  return (
    <div className="vpn">
      <BrowserFrame
        url="Currently://Amsterdam, The Netherlands"
        visible={vpn}
        setVisible={setVpn}
      >
        <img
          src={map}
          alt="my location: Amsterdam"
          width="710px"
          height="380px"
        />
      </BrowserFrame>
    </div>
  );
}

export default Vpn;
