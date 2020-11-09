import React, { useState } from "react";
import Exhibition from "./Exhibition";
import Software from "./Software";
import DockContainer from "./DockContainer";
import Loading from "./Loading";
import Email from "./windows/Email";
import Vpn from "./windows/Vpn";
import TetrisContainer from "./windows/TetrisContainer";
import TerminalContainer from "./windows/TerminalContainer";

function Desktop() {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState(false);
  const [vpn, setVpn] = useState(false);
  const [tetris, setTetris] = useState(false);
  const [exhibit, setExhibit] = useState(false);
  const [github, setGithub] = useState(false);
  const [terminal, setTerminal] = useState(false);

  // return (
  //   <div className="Desktop">
  //     ​{github && <Software setGithub={setGithub} />}​
  //     {exhibit && <Exhibition exhibit={exhibit} setExhibit={setExhibit} />}​
  //     {email && <Email email={email} setEmail={setEmail} />}​
  //     {vpn && <Vpn vpn={vpn} setVpn={setVpn} />}
  //     {tetris && <TetrisContainer tetris={tetris} setTetris={setTetris} />}
  //     {terminal && <TerminalContainer setTerminal={setTerminal} />}
  //     <DockContainer
  //       setEmail={setEmail}
  //       setVpn={setVpn}
  //       setTetris={setTetris}
  //       setExhibit={setExhibit}
  //       setGithub={setGithub}
  //       setTerminal={setTerminal}
  //     />
  //     ​
  //   </div>
  // );

  return loading ? (
    <Loading setLoading={setLoading} />
  ) : (
    <div className="Desktop">
      ​{github && <Software setGithub={setGithub} />}​
      {exhibit && <Exhibition exhibit={exhibit} setExhibit={setExhibit} />}​
      {email && <Email email={email} setEmail={setEmail} />}​
      {vpn && <Vpn vpn={vpn} setVpn={setVpn} />}
      {tetris && <TetrisContainer tetris={tetris} setTetris={setTetris} />}
      {terminal && <TerminalContainer setTerminal={setTerminal} />}
      <DockContainer
        setEmail={setEmail}
        setVpn={setVpn}
        setTetris={setTetris}
        setExhibit={setExhibit}
        setGithub={setGithub}
        setTerminal={setTerminal}
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
