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
      {/* <Top />
      {email ? <Email email={email} setEmail={setEmail} /> : null}
      <Software />
      <Exhibition />
      <DockContainer setEmail={setEmail} />
      {vpn ? <Vpn /> : null} */}
      <Vpn />
    </div>
  );
}
export default Desktop;
