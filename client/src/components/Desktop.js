import React, { useEffect, useState } from "react";
import Exhibition from "./Exhibition";
import Software from "./Software";
import DockContainer from "./DockContainer";
import Email from "./windows/Email";
import Vpn from "./windows/Vpn";

function Desktop() {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState(false);
  const [vpn, setVpn] = useState(false);
  const [exhibit, setExhibit] = useState(true);
  const [github, setGithub] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  });

  return (
    <div className="Desktop">
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className="Desktop">
          {github && <Software setGithub={setGithub} />}
          {exhibit && <Exhibition setExhibit={setExhibit} />}
          {email && <Email email={email} setEmail={setEmail} />}
          {vpn && <Vpn vpn={vpn} setVpn={setVpn} />}
          <DockContainer setEmail={setEmail} setVpn={setVpn} />
        </div>
      )}
    </div>
  );
}
export default Desktop;
