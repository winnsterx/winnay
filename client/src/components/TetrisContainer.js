import React from "react";
import BrowserFrame from "react-browser-frame";

import Tetris from "react-tetris";

function TetrisContainer({ tetris, setTetris }) {
  return (
    <div className="tetris-container">
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
