import React from "react";
import BrowserFrame from "react-browser-frame";
import uw from "../images/uw.jpg";

function Exhibition({ setExhibit }) {
  return (
    <div className="exhibit">
      <BrowserFrame visible={true} setVisible={setExhibit}>
        {/* Use React Router to turn image into a link */}
        <a href="https://artxspot.winnay.com">
          <img src={uw} alt="current exhibition: to come!" width="680px" />
        </a>
      </BrowserFrame>
    </div>
  );
}

export default Exhibition;
