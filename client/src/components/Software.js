import React from "react";
import github from "../images/github.jpg";

function Software() {
  return (
    <div className="software">
      <img
        src={github}
        alt="Github"
        width="700"
        style={{
          borderRadius: "1%",
          position: "absolute",
          right: "10px",
          left: "530px",
          top: "2px",
          bottom: "0px",
          // Specifying all 4 directions gives absolute position
        }}
      />
    </div>
  );
}

export default Software;
