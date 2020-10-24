import React from "react";
import { Line } from "rc-progress";
import profile from "../images/profile.jpg";

function Loading() {
  return (
    <div className="loading">
      <img className="profile-circular" src={profile} alt="Profile Picture" />
      <Line />
    </div>
  );
}

export default Loading;
