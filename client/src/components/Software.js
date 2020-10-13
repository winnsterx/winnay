import React from "react";
import github from "../images/github.jpg";

function Software() {
  return (
    <div className="Software">
      <img
        src={github}
        alt="Github"
        width="700"
        style={{
          borderRadius: "1%",
          position: "absolute",
          top: "5px",
          left: "450px",
        }}
      />
    </div>
  );
}

export default Software;
