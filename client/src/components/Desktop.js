import React from "react";

import Exhibition from "./Exhibition";
import Software from "./Software";
import Dock from "./Dock";
import DockContainer from "./Dock";

function Desktop() {
  return (
    <div className="Desktop">
      <Software />
      <Exhibition />
      <DockContainer />
    </div>
  );
}
export default Desktop;
