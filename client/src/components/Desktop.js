import React from "react";

import Exhibition from "./Exhibition";
import Software from "./Software";
import DockContainer from "./DockContainer";
import Top from "./Top";
function Desktop() {
  return (
    <div className="Desktop">
      {/* <Top /> */}
      <Software />
      <Exhibition />
      <DockContainer />
    </div>
  );
}
export default Desktop;
