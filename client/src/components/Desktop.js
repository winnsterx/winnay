import React, { useState } from "react";

import Exhibition from "./Exhibition";
import Software from "./Software";
import DockContainer from "./DockContainer";
import Email from "./windows/Email";
import Vpn from "./windows/Vpn";

// import Top from "./Top";

function Desktop() {
  const [email, setEmail] = useState(false);
  const [vpn, setVpn] = useState(false);

  return (
    <div className="Desktop">
      {email ? <Email email={email} setEmail={setEmail} /> : null}
      {vpn && <Vpn vpn={vpn} setVpn={setVpn} />}
      <Software />
      <Exhibition />
      <DockContainer setEmail={setEmail} setVpn={setVpn} />
    </div>
  );
}
export default Desktop;
