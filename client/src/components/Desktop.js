import React, { useState } from "react";
import { useDrop } from "react-dnd";
import update from "immutability-helper";
import { ItemTypes } from "./ItemType";

import About from "./windows/About";
import Exhibition from "./Exhibition";
import Software from "./Software";
import DockContainer from "./DockContainer";
import Loading from "./Loading";
import Email from "./windows/Email";
import Vpn from "./windows/Vpn";
import TetrisContainer from "./windows/TetrisContainer";
import TerminalContainer from "./windows/TerminalContainer";

function Desktop(props) {
  let curZIndex = 20;
  const [windows, setWindows] = useState({
    vpn: { top: 50, left: 80, title: "Drag vpn around" },
    terminal: { top: 50, left: 200 },
    tetris: { top: 10, left: 300 },
    exhibit: { top: 10, left: "20%" },
  });
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.WINDOW,
    drop(item, monitor) {
      console.log("item: " + item.id);
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      console.log("We droppin' at " + left + ", " + top);
      curZIndex++;
      moveWindow(item.id, left, top, curZIndex);
      return undefined;
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const moveWindow = (id, left, top, curZIndex) => {
    setWindows(
      update(windows, {
        [id]: {
          $merge: { left, top, curZIndex },
        },
      })
    );
  };

  const [loading, setLoading] = useState(true);
  const [about, setAbout] = useState(true);
  const [email, setEmail] = useState(false);
  const [vpn, setVpn] = useState(false);
  const [tetris, setTetris] = useState(false);
  const [exhibit, setExhibit] = useState(false);
  const [github, setGithub] = useState(false);
  const [terminal, setTerminal] = useState(false);

  // return (
  //   <div ref={drop} className="Desktop">
  //     {about && <About about={about} setAbout={setAbout} />}​
  //     {github && <Software setGithub={setGithub} />}​
  //     {exhibit && <Exhibition exhibit={exhibit} setExhibit={setExhibit} />}​
  //     {email && <Email email={email} setEmail={setEmail} />}​
  //     {vpn && (
  //       <Vpn
  //         vpn={vpn}
  //         setVpn={setVpn}
  //         id={"vpn"}
  //         left={windows.vpn.left}
  //         top={windows.vpn.top}
  //         curZIndex={curZIndex}
  //       />
  //     )}
  //     {tetris && (
  //       <TetrisContainer
  //         tetris={tetris}
  //         setTetris={setTetris}
  //         id={"tetris"}
  //         left={windows.tetris.left}
  //         top={windows.tetris.top}
  //       />
  //     )}
  //     {terminal && (
  //       <TerminalContainer
  //         setTerminal={setTerminal}
  //         id={"terminal"}
  //         left={windows.terminal.left}
  //         top={windows.terminal.top}
  //       />
  //     )}
  //     <DockContainer
  //       setAbout={setAbout}
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
    <div ref={drop} className="Desktop">
      {about && <About about={about} setAbout={setAbout} />}​
      {github && <Software setGithub={setGithub} />}​
      {exhibit && (
        <Exhibition
          exhibit={exhibit}
          setExhibit={setExhibit}
          id={"exhibit"}
          left={windows.exhibit.left}
          top={windows.exhibit.top}
        />
      )}
      ​{email && <Email email={email} setEmail={setEmail} />}​
      {vpn && (
        <Vpn
          vpn={vpn}
          setVpn={setVpn}
          id={"vpn"}
          left={windows.vpn.left}
          top={windows.vpn.top}
          curZIndex={curZIndex}
        />
      )}
      {tetris && (
        <TetrisContainer
          tetris={tetris}
          setTetris={setTetris}
          id={"tetris"}
          left={windows.tetris.left}
          top={windows.tetris.top}
        />
      )}
      {terminal && (
        <TerminalContainer
          setTerminal={setTerminal}
          id={"terminal"}
          left={windows.terminal.left}
          top={windows.terminal.top}
        />
      )}
      <DockContainer
        setAbout={setAbout}
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
