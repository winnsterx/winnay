import React, { useState } from "react";
import { DndProvider, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import { ItemTypes } from "./ItemType";

import Exhibition from "./Exhibition";
import Software from "./Software";
import DockContainer from "./DockContainer";
import Loading from "./Loading";
import Email from "./windows/Email";
import Vpn from "./windows/Vpn";
import TetrisContainer from "./windows/TetrisContainer";
import TerminalContainer from "./windows/TerminalContainer";

function Desktop(props) {
  const [windows, setWindows] = useState({
    vpn: { top: 50, left: 80, title: "Drag me around" },
  });
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.WINDOW,
    drop(item, monitor) {
      console.log("item: " + item.id);
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      console.log("We droppin' at " + left + ", " + top);
      moveWindow(item.id, left, top);
      return undefined;
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const moveWindow = (id, left, top) => {
    setWindows(
      update(windows, {
        [id]: {
          $merge: { left, top },
        },
      })
    );
  };

  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState(false);
  const [vpn, setVpn] = useState(false);
  const [tetris, setTetris] = useState(false);
  const [exhibit, setExhibit] = useState(false);
  const [github, setGithub] = useState(false);
  const [terminal, setTerminal] = useState(false);

  return (
    <div ref={drop} className="Desktop">
      ​{github && <Software setGithub={setGithub} />}​
      {exhibit && <Exhibition exhibit={exhibit} setExhibit={setExhibit} />}​
      {email && <Email email={email} setEmail={setEmail} />}​
      {vpn && (
        <Vpn
          vpn={vpn}
          setVpn={setVpn}
          id={"vpn"}
          left={windows.vpn.left}
          top={windows.vpn.top}
        />
      )}
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

  // return loading ? (
  //   <Loading setLoading={setLoading} />
  // ) : (
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

  // return <Loading setLoading={setLoading} />;

  // return (
  //   <div className="Desktop">
  //     <TetrisContainer />
  //   </div>
  // );
}

export default Desktop;
