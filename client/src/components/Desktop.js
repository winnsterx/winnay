import React, { useState } from "react";

import Exhibition from "./Exhibition";
import Software from "./Software";
import DockContainer from "./DockContainer";
import Email from "./windows/Email";
import Vpn from "./windows/Vpn";

function Desktop() {
  const [email, setEmail] = useState(false);
  const [vpn, setVpn] = useState(false);
  const [exhibit, setExhibit] = useState(true);
  const [github, setGithub] = useState(true);

  return (
    <div className="Desktop">
      {github && <Software setGithub={setGithub} />}
      {exhibit && <Exhibition setExhibit={setExhibit} />}
      {email && <Email email={email} setEmail={setEmail} />}
      {vpn && <Vpn vpn={vpn} setVpn={setVpn} />}
      <DockContainer setEmail={setEmail} setVpn={setVpn} />
    </div>
  );
}
export default Desktop;
