import React from "react";
import Exhibition from "./Exhibition";
import Software from "./Software";
// import Dock from './Dock'

function Desktop() {
  return (
    <div className="Desktop">
      {/* <Top /> */}
      <Software />
      <Exhibition />
      {/* <Dock /> */}
    </div>
  );
}
export default Desktop;
