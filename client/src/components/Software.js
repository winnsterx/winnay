import React from "react";
import BrowserFrame from "react-browser-frame";
import github from "../images/github.jpg";

function Software({ setGithub }) {
  return (
    <div className="software">
      <BrowserFrame
        visible={true}
        setVisible={setGithub}
        url="https://github.com/winnayx"
      >
        <img src={github} alt="Github" width="600px" />
      </BrowserFrame>
    </div>
  );
}

export default Software;
