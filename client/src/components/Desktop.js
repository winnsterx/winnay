import React, { useState } from "react";
import Exhibition from "./Exhibition";
import Software from "./Software";
import DockContainer from "./DockContainer";
import Loading from "./Loading";
import Email from "./windows/Email";
import Vpn from "./windows/Vpn";
import TetrisContainer from "./TetrisContainer";

function Desktop() {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState(false);
  const [vpn, setVpn] = useState(false);
  const [tetris, setTetris] = useState(false);

  const [exhibit, setExhibit] = useState(true);
  const [github, setGithub] = useState(true);

  return loading ? (
    <Loading setLoading={setLoading} />
  ) : (
    <div className="Desktop">
      ​{github && <Software setGithub={setGithub} />}​
      {exhibit && <Exhibition setExhibit={setExhibit} />}​
      {email && <Email email={email} setEmail={setEmail} />}​
      {vpn && <Vpn vpn={vpn} setVpn={setVpn} />}
      {tetris && <TetrisContainer tetris={tetris} setTetris={setTetris} />}
      ​
      <DockContainer
        setEmail={setEmail}
        setVpn={setVpn}
        setTetris={setTetris}
      />
      ​
    </div>
  );

  // return <Loading setLoading={setLoading} />;

  // return (
  //   <div className="Desktop">
  //     <TetrisContainer />
  //   </div>
  // );
}

export default Desktop;
