import React from "react";
import BrowserFrame from "react-browser-frame";
import { useDrag, useDragDropManager } from "react-dnd";
import Tetris from "react-tetris";
import { ItemTypes } from "../ItemType";

function TetrisContainer({ tetris, setTetris, left, top, id }) {
  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: ItemTypes.WINDOW },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const style = {
    position: "absolute",
    opacity: isDragging ? 0.3 : 1,
  };

  return (
    <div
      ref={drag}
      className="tetris-container"
      style={{ ...style, left, top }}
    >
      <BrowserFrame visible={tetris} setVisible={setTetris}>
        <h1 id="tetris-header">TETRIS YOURSELF</h1>
        <p style={{ color: "white", fontWeight: "300" }}>
          (as opposed to Tetris Friends)
        </p>
        <Tetris>
          {({ HeldPiece, Gameboard, PieceQueue, points, linesCleared }) => (
            // Render it however you'd like
            <div className="tetris-inner-container">
              <div>
                <HeldPiece />
                <div className="game-stats">
                  <p className="points">POINTS: {points}</p>
                  <p className="cleared">CLEARED: {linesCleared}</p>
                </div>
              </div>
              <Gameboard />
              <PieceQueue />
            </div>
          )}
        </Tetris>
      </BrowserFrame>
    </div>
  );
}

export default TetrisContainer;
