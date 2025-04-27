import React from "react";
import BrowserFrame from "react-browser-frame";
import profile from "../../images/profile.jpg";

function About({ about, setAbout }) {
  return (
    <div className="about">
      <BrowserFrame visible={true} setVisible={setAbout}>
        <div className="about-inner">
          <div className="about-icon">
            <img
              className="profile-circular-about"
              src={profile}
              alt="Profile"
            />
          </div>
          <div className="about-info">
            <h1 style={{ marginBottom: 0 }}>Winnie's macOS</h1>
            <p>Version 2.1</p>
            <p>
              Hullo, I'm Winnie.&nbsp;
              <span role="img" aria-label="waving-hand">
                👋
              </span>
            </p>
            <p>
              I'm currently an engineer at OP Labs, figuring out how to build a
              better internet with the right incentives. Before that, I was
              doing MEV/HFT research and open-source work at Bitwise.
            </p>
            <p>
              This site is under active development. Drop a note using the mail
              app&nbsp;
              <span role="img" aria-label="beer-clinking">
                🥂💖
              </span>
              .
            </p>
          </div>
        </div>
        <small
          style={{
            color: "grey",
            display: "block",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          ™ and © 2023-2025 Winnie Xiao. All Rights Reserved.
        </small>
      </BrowserFrame>
    </div>
  );
}

export default About;
