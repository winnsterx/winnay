import React from "react";
import BrowserFrame from "react-browser-frame";
import currexhibit from "../images/currexhibit.jpg";

function Exhibition({ exhibit, setExhibit }) {
  return (
    <div className="exhibit">
      <BrowserFrame visible={exhibit} setVisible={setExhibit}>
        {/* Use React Router to turn image into a link */}
        <a href="https://artxspot.winnay.com">
          <img
            src={currexhibit}
            alt="current exhibition: coming soon"
            width="600px"
          />
        </a>
      </BrowserFrame>
    </div>
  );
}

export default Exhibition;
