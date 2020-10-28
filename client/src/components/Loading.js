import React, { useState, useEffect } from "react";
import { Line } from "rc-progress";
import profile from "../images/profile.jpg";

function Loading({ setLoading }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    console.log("Use Effect in Loading called");
    if (percent < 180) {
      setInterval(() => {
        setPercent((percent) => percent + 10);
      }, 500);
    } else {
      setLoading(false);
    }
  });

  return (
    <div className="loading">
      <img className="profile-circular" src={profile} alt="Profile" />
      <h4 className="username">winnayx</h4>
      <Line
        percent={percent}
        strokeWidth="1.5"
        trailWidth="1.5"
        strokeColor="white"
        trailColor="rgba(162, 169, 171, 0.6)"
        strokeLinecap="round"
        style={{
          width: "20%",
          opacity: "0.8",
        }}
      />
    </div>
  );
}

export default Loading;
