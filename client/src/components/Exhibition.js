import React from "react";
import uw from "../images/uw1.jpg";

function Exhibition() {
  return (
    <div className="exhibition">
      {/* Use React Router to turn image into a link */}
      <a href="https://artxspot.winnay.com">
        <img
          src={uw}
          alt="Exhibition"
          width="600"
          style={{
            borderRadius: "1%",
            position: "absolute",
            top: "40px",
            left: "40px",
            right: "60px",
            bottom: "0px",
          }}
        />
      </a>
    </div>
  );
}

export default Exhibition;
