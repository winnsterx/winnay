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
            <p>Version 1.2</p>
            <p>
              Hullo&nbsp;
              <span role="img" aria-label="waving-hand">
                👋
              </span>
              ! You are visiting my personal website. If you use a Mac, then
              navigate as you would on your Desktop. Otherwise, click on the
              apps on the Dock to explore!
            </p>
            <p>
              It is still in active development. If you have any feedback and
              suggestion, drop a note using the mail app&nbsp;
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
          ™ and © 2020 Winnie Xiao. All Rights Reserved.
        </small>
      </BrowserFrame>
    </div>
  );
}

export default About;
