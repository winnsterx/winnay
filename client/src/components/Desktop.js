import React, { useState } from "react";
import { useDrop } from "react-dnd";
import update from "immutability-helper";
import { ItemTypes } from "./ItemType";

import About from "./windows/About";
import Exhibition from "./windows/Exhibition";
import Farm from "./windows/Farm";
import Software from "./windows/Software";
import DockContainer from "./DockContainer";
import Loading from "./Loading";
import Email from "./windows/Email";
import Vpn from "./windows/Vpn";
import TetrisContainer from "./windows/TetrisContainer";
import TerminalContainer from "./windows/TerminalContainer";

function Desktop(props) {
  let curZIndex = 20;
  const [windows, setWindows] = useState({
    vpn: { top: 50, left: 80 },
    terminal: { top: 50, left: 200 },
    tetris: { top: 10, left: 300 },
    exhibit: { top: 10, left: 100 },
    farm: { top: 10, left: 100 },
  });
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.WINDOW,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
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

  const [loading, setLoading] = useState(false);
  const [about, setAbout] = useState(true);
  const [email, setEmail] = useState(false);
  const [vpn, setVpn] = useState(false);
  const [tetris, setTetris] = useState(false);
  const [exhibit, setExhibit] = useState(false);
  const [github, setGithub] = useState(false);
  const [terminal, setTerminal] = useState(false);
  const [farm, setFarm] = useState(false);

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
      {farm && (
        <Farm
          farm={farm}
          setFarm={setFarm}
          id={"farm"}
          left={windows.farm.left}
          top={windows.farm.top}
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
        setFarm={setFarm}
      />
      ​
    </div>
  );
}

export default Desktop;
