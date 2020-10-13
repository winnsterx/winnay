import React from "react";
import uw from "../images/uw1.jpg";

function Exhibition() {
  return (
    <div className="Exhibition">
      {/* Use React Router to turn image into a link */}
      <img
        src={uw}
        alt="Exhibition"
        width="600"
        style={{
          borderRadius: "1%",
          position: "absolute",
          top: "40px",
          right: "540px",
        }}
      />
    </div>
  );
}

export default Exhibition;
