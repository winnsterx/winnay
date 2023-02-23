import React, { useState } from "react";
import { useDrop } from "react-dnd";
import update from "immutability-helper";
import { ItemTypes } from "./ItemType";

import About from "./windows/About";
import Exhibition from "./windows/Exhibition";
import DockContainer from "./DockContainer";
import Loading from "./Loading";
import TetrisContainer from "./windows/TetrisContainer";
import TerminalContainer from "./windows/TerminalContainer";

function Desktop(props) {
  let curZIndex = 20;
  const [windows, setWindows] = useState({
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

  const [loading, setLoading] = useState(true);
  const [about, setAbout] = useState(true);
  const [tetris, setTetris] = useState(false);
  const [exhibit, setExhibit] = useState(false);
  const [terminal, setTerminal] = useState(false);

  return loading ? (
    <Loading setLoading={setLoading} />
  ) : (
    <div ref={drop} className="Desktop">
      {about && <About about={about} setAbout={setAbout} />}​
      {exhibit && (
        <Exhibition
          exhibit={exhibit}
          setExhibit={setExhibit}
          id={"exhibit"}
          left={windows.exhibit.left}
          top={windows.exhibit.top}
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
        setTetris={setTetris}
        setExhibit={setExhibit}
        setTerminal={setTerminal}
      />
      ​
    </div>
  );
}

export default Desktop;
